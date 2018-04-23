module.exports = function(sequelize, DataTypes) {
  var MemberLinks = sequelize.define("MemberLinks",
  {
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
      timestamps:false
    });

  MemberLinks.associate = function (models) {
     models.MemberLinks.belongsTo(models.Links, {
       as: "link", //the word "id" will be added at the end of the name automatically
       onDelete: "CASCADE",
       foreignKey: {
         allowNull: false
       }
     });

     models.MemberLinks.belongsTo(models.Members, {
       as: "member", //the word "id" will be added at the end of the name automatically
       onDelete: "CASCADE",
       foreignKey: {
         allowNull: false
       }
     });
   };

  return MemberLinks;
};
