'use strict';

module.exports = {

	deleteBoardController: require(__dirname+'/deleteboard.js'),
	editBansController: require(__dirname+'/editbans.js'),
	appealController: require(__dirname+'/appeal.js'),
	globalActionController: require(__dirname+'/globalactions.js'),
	actionController: require(__dirname+'/actions.js'),
	addCustomPageController: require(__dirname+'/addcustompage.js'),
	deleteCustomPageController: require(__dirname+'/deletecustompage.js'),
	addNewsController: require(__dirname+'/addnews.js'),
	editNewsController: require(__dirname+'/editnews.js'),
	editCustomPageController: require(__dirname+'/editcustompage.js'),
	deleteNewsController: require(__dirname+'/deletenews.js'),
	uploadBannersController: require(__dirname+'/uploadbanners.js'),
	deleteBannersController: require(__dirname+'/deletebanners.js'),
	addAssetsController: require(__dirname+'/addassets.js'),
	deleteAssetsController: require(__dirname+'/deleteassets.js'),
	addFlagsController: require(__dirname+'/addflags.js'),
	deleteFlagsController: require(__dirname+'/deleteflags.js'),
	boardSettingsController: require(__dirname+'/boardsettings.js'),
	transferController: require(__dirname+'/transfer.js'),
	resignController: require(__dirname+'/resign.js'),
	deleteAccountController: require(__dirname+'/deleteaccount.js'),
	editAccountController: require(__dirname+'/editaccount.js'),
	loginController: require(__dirname+'/login.js'),
	twofactorController: require(__dirname+'/twofactor.js'),
	registerController: require(__dirname+'/register.js'),
	changePasswordController: require(__dirname+'/changepassword.js'),
	deleteSessionsController: require(__dirname+'/deletesessions.js'),
	deleteAccountsController: require(__dirname+'/deleteaccounts.js'),
	globalSettingsController: require(__dirname+'/globalsettings.js'),
	createBoardController: require(__dirname+'/create.js'),
	makePostController: require(__dirname+'/makepost.js'),
	editPostController: require(__dirname+'/editpost.js'),
	addStaffController: require(__dirname+'/addstaff.js'),
	deleteStaffController: require(__dirname+'/deletestaff.js'),
	editStaffController: require(__dirname+'/editstaff.js'),
	editRoleController: require(__dirname+'/editrole.js'),

	//these dont have a "real" controller
	newCaptchaForm: require(__dirname+'/../../models/forms/newcaptcha.js'),
	blockBypassForm: require(__dirname+'/../../models/forms/blockbypass.js'),
	logoutForm: require(__dirname+'/../../models/forms/logout.js'),

};
