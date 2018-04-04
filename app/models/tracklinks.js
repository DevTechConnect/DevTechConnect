module.exports = function(sequelize, DataTypes) {
  var TrackLinks = sequelize.define("TrackLinks",
  {
    //will have an id by default
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    linkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stepNumber:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
      timestamps:false
    });

  TrackLinks.associate = function (models) {
     models.Tracks.belongsTo(models.Tracks, {
       as: "track", //the word "id" will be added at the end of the name automatically
       onDelete: "CASCADE",
       foreignKey: {
         allowNull: false
       }
     });


    models.TrackLinks.belongsTo(models.Links, {
      as: "link", //the word "id" will be added at the end of the name automatically
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
   };

  return TrackLinks;
};
