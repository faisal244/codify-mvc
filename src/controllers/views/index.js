const path = require("path");

const renderHomePage = (req, res) => {
	const filePath = path.join(__dirname, "../../../public/publicHome.html");
	return res.sendFile(filePath);
};

const renderLoginPage = (req, res) => {
	return res.render("login", { currentPage: "login" });
};

const renderSignupPage = (req, res) => {
	return res.render("signup", { currentPage: "signup" });
};

const renderDashboardPage = (req, res) => {
	return res.render("dashboard");
};

const renderCreatePlaylistPage = (req, res) => {
	const filePath = path.join(__dirname, "../../../public/createPlaylist.html");
	return res.sendFile(filePath);
};

const renderPlaylistPage = (req, res) => {
	const filePath = path.join(__dirname, "../../../public/singlePlaylist.html");
	return res.sendFile(filePath);
};

const renderExplorePage = (req, res) => {
	return res.render("explore");
};

module.exports = {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderDashboardPage,
	renderCreatePlaylistPage,
	renderPlaylistPage,
	renderExplorePage,
};
