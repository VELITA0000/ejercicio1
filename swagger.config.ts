import { SwaggerOptions } from "swagger-ui-express";

const PORT = process.env.PORT || 3000;

const options: SwaggerOptions = {
    swaggerDefinition: {
        openapi: '3.1.0',
        info: {
            title: 'API Dummy',
            description: 'API para fines educativos',
            version: '0.0.1'
        },
        servers: [
            { url: 'http://localhost:' + process.env.PORT}
        ]
    },
    apis: [
        './src/**/*.ts'
    ]
}

export default options;
