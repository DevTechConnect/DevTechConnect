module.exports = function(sequelize, DataTypes) {
  var RelatedTracks = sequelize.define("RelatedTracks",
  {
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    relatedTrackId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps:false
  });

  return RelatedTracks;
};
