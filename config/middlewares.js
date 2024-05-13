module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', ''),
    },
  },
  socket: {
    enabled: env.bool('SOCKET_ENABLED', true),
    port: env.int('SOCKET_PORT', 1338),
    settings: {
      cors: {
        origin: ['http://localhost:1337'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
        allowedHeaders: ['content-type'],
      },
    },
  },
  // Add any other configuration options here
});
