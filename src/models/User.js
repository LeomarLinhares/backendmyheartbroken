module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
  {
      id: {
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
  );
  return User;
}