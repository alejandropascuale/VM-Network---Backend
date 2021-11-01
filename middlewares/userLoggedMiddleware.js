const db = require('../database/models');

async function userLoggedMiddleware (req, res, next) {
	const userInCookie = req.cookies.userName;
	if (userInCookie) {
		const userSearch = await db.User.findOne ({where: {userName: userInCookie}})
		req.session.userLogged = userSearch;
		res.locals.userLogged = req.session.userLogged;
	}
	next();
}
module.exports = userLoggedMiddleware;