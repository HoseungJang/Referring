module.exports = {
  type: "mysql",
  host: "reffering-mysql",
  port: 3306,
  username: "root",
  password: "password",
  database: "reffering",
  synchronize: true,
  entities: ["src/entities/**/*.ts"],
}
