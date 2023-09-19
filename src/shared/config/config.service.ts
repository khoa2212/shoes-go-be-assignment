import config from 'config';

import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get sequelizeOrmConfig() {
    return config.database();
  }
}
