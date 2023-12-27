module.exports = (sequelize, DataTypes) => {
    const Reason = sequelize.define('Reason', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          reason: {
            type: DataTypes.STRING,
            allowNull: false
          },
          userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false,
          },
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'reasons'
    }
);
Reason.associate = (models) => {
    models.Reason.belongsTo(models.User, {
    foreignKey: 'id',
    })
}
return Reason;
}