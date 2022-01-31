import { services } from "../services/index.js";

import { MAX_PLAYERS_COUNT } from "../config/config.js";

import { openDB, closeDB } from "../db/index.js";

import {
  sqlWritePlayer,
  sqlReadPlayers,
  sqlReadPlayerById,
  sqlCreatePlayersTable,
} from "../db/SQL.js";

export const addPlayerController = (req, res) => {
  const db = openDB();

  // db.run(sqlCreatePlayersTable);
  const { name, surname, wishes } = req.body;

  try {
    db.all(sqlReadPlayers, function (err, rows) {
      if (err) throw err;
      if (rows.length > MAX_PLAYERS_COUNT)
        throw Error(`maximum players are ${MAX_PLAYERS_COUNT})`);
    });

    db.run(sqlWritePlayer, [name, surname, wishes], function (err) {
      if (err) throw err;
      const lastId = this.lastID;

      db.get(sqlReadPlayerById, lastId, function (err, row) {
        if (err) throw err;
        if (row) {
          row.wishes = row.wishes.split(",");
          res.status(200).json({
            status: "created",
            code: "201",
            data: row,
          });
        }
      });
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      status: "error",
      code: "400",
      data: error.message,
    });
  }

  closeDB(db);
};
