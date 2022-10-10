import { Client } from "pg";

const database = new Client({
  user: "lucas",
  host: "localhost",
  database: "tests_products",
  password: "06021997",
  port: 5432,
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
