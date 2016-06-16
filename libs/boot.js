module.exports = app => {
	app.listen(app.get("port"), () => {
		console.log("Ltask rodando!");
	});
}