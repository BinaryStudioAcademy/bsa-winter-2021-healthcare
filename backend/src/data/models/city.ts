import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { ICity } from '~/common/interfaces';

interface CityInstance extends ICity, Model {}

const createCityModel = (orm: Sequelize): ModelCtor<CityInstance> => {
  const City = orm.define<CityInstance>(
    ModelName.CITY,
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.CITIES,
    },
  );

  return City;
};

export default createCityModel;
