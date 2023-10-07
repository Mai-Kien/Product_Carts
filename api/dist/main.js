"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'src/public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'src/views'));
    app.setViewEngine('hbs');
    await app.listen(process.env.API_PORT || 3456);
}
bootstrap();
//# sourceMappingURL=main.js.map