import { Client } from "pg";

/* process.env.NODE_ENV === "test"
  ?  */
const database = new Client({
  user: "lucas",
  host: "localhost",
  database: "tests_products",
  password: "06021997",
  port: 5432,

  /* : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      } */
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
