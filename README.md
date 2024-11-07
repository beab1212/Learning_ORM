# ORM(Object-relational Mapper)
## For SQL and Mongodb
### Topics
	data selection(query)
		Model.findAll({})
		Model.findByPk('')
		Model.findOrCreate({...})
		Model.findAndCountAll({...})
	data insertion
	data update
		Model.update({...})
	data deletion
		Model.destroy({...})
	aggregation
		ModelA.hasOne(ModelB, {/* options */})
		ModelA.belongsTo(ModelB, {/* options */})
		ModelA.hasMany(ModelB, {/* options */})
		ModelA.belongsToMany(ModelB, { through: 'ModelC' })
	paranoid
		- A paranoid table is one that, when told to delete a record, it will not truly delete it.
		- Instead, a special column called deletedAt will have its value set to the timestamp of that deletion request.

		class Post extends Model {}
		Post.init({ /* attributes here */ }, {
		  sequelize,
		  paranoid: true,
		  // If you want to give a custom name to the deletedAt column
		  deletedAt: 'destroyTime'
		});
	migration
	seed
	eager loading
	hooks
	isolation level

