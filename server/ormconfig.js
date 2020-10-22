const { NODE_ENV } = process.env;

module.exports = {
  production: {
    type: "mysql",
    host: "referring-mysql",
    port: 3306,
    username: "root",
    password: "password",
    database: "referring",
    synchronize: true,
    entities: ["src/entities/**/*.ts"],
  },
  development: {
    type: "mysql",
    host: "0.0.0.0",
    port: 3306,
    username: "root",
    password: "password",
    database: "referring",
    synchronize: true,
    entities: ["src/entities/**/*.ts"],
  }
}[NODE_ENV]
