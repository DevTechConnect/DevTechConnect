module.exports = function(sequelize, DataTypes) {
  var TrackLinks = sequelize.define("TrackLinks",
  {
    //will have an id by default
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    stepNumber:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
      timestamps:false
    });

  TrackLinks.associate = function (models) {
     models.TrackLinks.belongsTo(models.Tracks, {
       as: "track", //the word "id" will be added at the end of the name automatically
       onDelete: "CASCADE",
       foreignKey: {
         allowNull: false
       }
     });

   };

  return TrackLinks;
};
