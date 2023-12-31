const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 - Andre Pedrosa',
    description: 'My API for CSE341 class assignments',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
