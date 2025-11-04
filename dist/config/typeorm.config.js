"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
class TypeOrmConfig {
    static getOrmConfig(configService) {
        const isProduction = process.env.NODE_ENV === 'production';
        return {
            type: 'mysql',
            url: configService.get('DATABASE_URL'),
            entities: ['dist/**/*.entity.js'],
            synchronize: true,
            ssl: isProduction
                ? {
                    rejectUnauthorized: false,
                }
                : false,
        };
    }
}
exports.default = TypeOrmConfig;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => TypeOrmConfig.getOrmConfig(configService),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=typeorm.config.js.map