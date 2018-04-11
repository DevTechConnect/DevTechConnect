module.exports = function(sequelize, DataTypes) {
  var TrackSteps = sequelize.define("TrackSteps",
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

  TrackSteps.associate = function (models) {
     models.TrackSteps.belongsTo(models.Tracks, {
       as: "track", //the word "id" will be added at the end of the name automatically
       onDelete: "CASCADE",
       foreignKey: {
         allowNull: false
       }
     });

   };

  return TrackSteps;
};
