'use strict';

const { remove } = require('fs-extra')
	, uploadDirectory = require(__dirname+'/../../helpers/files/uploadDirectory.js')
	, { Boards } = require(__dirname+'/../../db/')
	, buildQueue = require(__dirname+'/../../queue.js');

module.exports = async (req, res, next) => {

	const redirect = `/${req.params.board}/manage.html`;

	//delete file of all selected banners
	await Promise.all(req.body.checkedbanners.map(async filename => {
		remove(`${uploadDirectory}banner/${req.params.board}/${filename}`);
	}));

	//remove from db
	const amount = await Boards.removeBanners(req.params.board, req.body.checkedbanners);

	//update res locals banners in memory
	res.locals.board.banners = res.locals.board.banners.filter(banner => {
		 return !req.body.checkedbanners.includes(banner);
	});

	//rebuild public banners page
	buildQueue.push({
        'task': 'buildBanners',
		'options': {
			'board': res.locals.board,
		}
	});

	return res.render('message', {
		'title': 'Success',
		'message': `Deleted banners.`,
		'redirect': redirect
	});
}
