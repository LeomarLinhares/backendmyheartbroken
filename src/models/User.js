module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
  {
      userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataType.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'users'
      }
  )
  User.associate = (models) => {
    User.hasMany(models.Reason, {
      foreignKey: 'user_id'
    })
  }
  return User;
}