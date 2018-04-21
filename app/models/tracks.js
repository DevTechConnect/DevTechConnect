module.exports = function(sequelize, DataTypes) {
  var Tracks = sequelize.define("Tracks",
  {
    trackname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    introVideoLink: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    achievementLink: {
      type: DataTypes.STRING(10000),
      allowNull: false
    }
  },
  {
    timestamps:false
  });

  Tracks.associate = function(models){
    models.Tracks.hasMany(models.TrackSteps, {foreignKey: "trackId"});
  }

  return Tracks;
};
