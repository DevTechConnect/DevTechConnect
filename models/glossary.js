module.exports = function(sequelize, DataTypes) {
  var Glossary = sequelize.define("Glossary",
  {
    term: {
      type: DataTypes.STRING,
      allowNull: false
    },
    acronymMeaning: {
      type: DataTypes.STRING,
      allowNull: true
    },
    definition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps:false
  });

  return Glossary;
};
