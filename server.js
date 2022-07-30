const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Dev Connector API',
      description: 'Dev Connector API information',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:5001',
        description: 'Development server'
      }
    ]
  },
  apis: ['./routes/api/*.js']
};

const swaggerDoc = swaggerJsDoc(swaggerOptions);

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
