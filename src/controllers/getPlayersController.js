import { openDB, closeDB } from "../db/index.js";

import { sqlReadPlayers } from "../db/SQL.js";

export const getPlayersController = async (_, res) => {
  const db = openDB();

  try {
    db.all(sqlReadPlayers, function (err, rows) {
      if (err) throw err;

      console.log(rows);

      const result = rows.map(({ id, name, surname, wishes }) => {
        wishes = wishes.split(",");

        return { id, name, surname, wishes };
      });

      if (result) {
        res.status(200).json({
          status: "success",
          code: "200",
          data: result,
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      code: "400",
      data: error.message,
    });
  }

  closeDB(db);
};
