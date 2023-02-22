module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'todolist'),
      user: env('DATABASE_USERNAME', 'todolistadmin'),
      password: env('DATABASE_PASSWORD', 'LG38P5jIyuCAG4DzFQKUri6yXXnGyNIF'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
