module.exports = app => {
	return {
		findAll: (params,callback) =>{
			return callback([
				{title: "Consertar o PC"},
				{title: "Fazer compras"},
				]);
		}
	};
};