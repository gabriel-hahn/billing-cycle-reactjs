module.exports = {
  dialect: 'postgres',
  // host: 'host.docker.internal',
  host: '127.0.0.1',
  username: 'gabriel_postgres',
  password: 'gabriel_postgres',
  database: 'billing_cycle_db',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
