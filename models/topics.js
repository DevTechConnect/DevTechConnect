module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define("Topics",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  },
  {
    timestamps:false
  });

  Topics.associate = function(models){
    models.Topics.hasMany(models.Links, {foreignKey: "topicId"});
  }

  return Topics;
};
