import Sequelize from 'sequelize';

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.STRING(100),
          unique: true,
          primaryKey: true,
          allowNull: false,
        },
        pw: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(30),
          unique: true,
          allowNull: false,
        },
        profileImg: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: 'User',
        tableName: 'user',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
}
