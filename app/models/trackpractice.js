module.exports = function(sequelize, DataTypes) {
  var TrackPractice = sequelize.define("TrackPractice",
  {
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
    }
  }, {
      timestamps:false
    });

  TrackPractice.associate = function (models) {
     models.TrackPractice.belongsTo(models.Tracks, {
       as: "track", //the word "id" will be added at the end of the name automatically
       onDelete: "CASCADE",
       foreignKey: {
         allowNull: false
       }
     });
   };

  return TrackPractice;
};
