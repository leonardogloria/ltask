module.exports = (sequelize,DataType) => {
	const Tasks = sequelize.define("Tasks", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement:true
		}
	});
	return Tasks;
	
};