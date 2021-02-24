'use strict';

process
	.on('uncaughtException', console.error)
	.on('unhandledRejection', console.error);

const Mongo = require(__dirname+'/db/db.js')

(async () => {

	await Mongo.connect();
	await Mongo.checkVersion();
	await config.load();

	const tasks = require(__dirname+'/helpers/tasks.js')
		, { queue } = require(__dirname+'/queue.js')

	queue
		.on('error', console.error)
		.on('failed', console.warn);

	queue.process(async job => {
		await tasks[job.data.task](job.data.options);
		return null;
	});

})();


