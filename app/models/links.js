module.exports = function(sequelize, DataTypes) {
  var Links = sequelize.define("Links",
  {
    linkName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    online: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: true
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

  Links.associate = function(models){
        models.Links.belongsTo(models.Topics, {
          as: "topic", //the word "id" will be added at the end of the name automatically
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
  };

  return Links;
};
