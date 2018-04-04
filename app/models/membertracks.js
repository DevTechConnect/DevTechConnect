module.exports = function(sequelize, DataTypes) {
  var MemberTracks = sequelize.define("MemberTracks",
  {
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    maxCompletedStep: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
      timestamps:false
    });

  MemberTracks.associate = function (models) {
     models.MemberTracks.belongsTo(models.Tracks, {
       as: "track", //the word "id" will be added at the end of the name automatically
       onDelete: "CASCADE",
       foreignKey: {
         allowNull: false
       }
     });

     models.MemberTracks.belongsTo(models.Members, {
       as: "member", //the word "id" will be added at the end of the name automatically
       onDelete: "CASCADE",
       foreignKey: {
         allowNull: false
       }
     });
   };

  return MemberTracks;
};
