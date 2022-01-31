import sqlite3 from "sqlite3";

// import { sqlCreatePlayersTable, sqlWritePlayer } from "./SQL.js";

import { DIR_DB } from "../config/config.js";

export const openDB = function () {
  const db = new sqlite3.Database(DIR_DB, function (err) {
    if (err) {
      console.log("connect error", err);
      return;
    }
    console.log("connect to base");
  });
  return db;
};

export const closeDB = function (db) {
  db.close((err) => {
    if (err) {
      console.log("close err", err);
    }
    console.log("db closed");
  });
};
