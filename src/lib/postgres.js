import pg from "pg";
import { pgConfig } from "../config.js";


const pool = new pg.Pool(pgConfig);

async function fatchAll(SQL, params = []) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params);
    return rows
  } catch (error) {
    console.log(error);
  }
  finally {
    client.release();
  }
}

async function fatch(SQL, params = []) {
  const client = await pool.connect();
  try {
    const { rows: [row] } = await client.query(SQL, params);
    return row
  } catch (error) {
    console.log(error);
  }
  finally {
    client.release();
  }
}


export {
  fatchAll,
  fatch
}