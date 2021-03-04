import * as Sequelize from "sequelize";
import { User } from "../../../../healthcare-shared/src/interfaces/user.interface";
import { UserInstance } from "../../data/models/user"

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<UserInstance, User>;
}
