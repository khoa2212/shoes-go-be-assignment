import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../config/config.service';
import { Product } from 'src/common/entities/product.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.sequelizeOrmConfig,
        dialect: configService.sequelizeOrmConfig.dialect as Dialect,
      });

      // Models
      sequelize.addModels([Product]);

      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
