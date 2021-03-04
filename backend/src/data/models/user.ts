import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize:Sequelize) => {
    const User = sequelize.define('user', {
      id: {
        allowNull: false,
        type: DataTypes.UUID
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      surname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE
      },
      sex: {
        allowNull: false,
        type: DataTypes.ENUM('male', 'female')
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM('patient', 'doctor')
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      imagePath: {
        allowNull: false,
        type: DataTypes.STRING
      },
      geoposition: {
        type: DataTypes.GEOGRAPHY
      },
      diagnosis: {
        type: DataTypes.UUID
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    }, {});

    return User;
};
