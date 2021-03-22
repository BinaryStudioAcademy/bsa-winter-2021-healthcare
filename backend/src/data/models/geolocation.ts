import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IGeolocation } from '~/common/interfaces';

interface GeolocationInstance extends IGeolocation, Model {}

const createGeolocationModel = (
  orm: Sequelize,
): ModelCtor<GeolocationInstance> => {
  const Geolocation = orm.define<GeolocationInstance>(
    ModelName.GEOLOCATION,
    {
      lat: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lng: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.GEOLOCATIONS,
    },
  );

  return Geolocation;
};

export default createGeolocationModel;
