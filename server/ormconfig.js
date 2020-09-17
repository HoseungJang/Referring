module.exports = {
  type: "mysql",
  host: "0.0.0.0",
  port: 3306,
  username: "root",
  password: "password",
  database: "reffering",
  synchronize: true,
  entities: ["src/entities/**/*.ts"],
}
