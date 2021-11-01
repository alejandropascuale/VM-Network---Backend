const db = require('../database/models');

async function userLoggedMiddleware (req, res, next) {
	const emailInCookie = req.cookies.userEmail;
	if (emailInCookie) {
		const userSearch = await db.User.findOne ({where: {email: emailInCookie}})
		req.session.userLogged = userSearch;
		res.locals.userLogged = req.session.userLogged;
	}
	next();
}
module.exports = userLoggedMiddleware;