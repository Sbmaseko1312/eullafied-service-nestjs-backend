"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
class TypeOrmConfig {
    static getOrmConfig(configService) {
        return {
            type: 'mysql',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: ['dist/**/*.entity.js'],
            synchronize: true
        };
    }
}
exports.default = TypeOrmConfig;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => TypeOrmConfig.getOrmConfig(configService),
    inject: [config_1.ConfigService]
};
//# sourceMappingURL=typeorm.config.js.map