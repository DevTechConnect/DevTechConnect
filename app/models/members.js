module.exports = function(sequelize, DataTypes) {
  var Members = sequelize.define("Members",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joinDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
      timestamps:false
    });
  return Members;
};
