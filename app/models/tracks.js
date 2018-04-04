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
    }
  },
  {
    timestamps:false
  });

  Tracks.associate = function(models){
    models.Tracks.hasMany(models.TrackLinks, {foreignKey: "trackId"});
  }

  return Tracks;
};
