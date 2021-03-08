module.exports = {
  dialect: 'postgres',
  // host: '127.0.0.1',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  operatorAliases: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
