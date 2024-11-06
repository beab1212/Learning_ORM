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
	migration
	seed
	eager loading
	hooks
	isolation level

