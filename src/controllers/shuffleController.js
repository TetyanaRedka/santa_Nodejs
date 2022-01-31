
import { openDB, closeDB } from "../db/index.js";

import { sqlReadPlayers, sglAddBodyPlayers } from "../db/SQL.js";

export const shuffleController = (req, res) => {
  const db = openDB();

  try {
    db.all(sqlReadPlayers, function (err, rows) {
      if (err) throw err;

      const newRows = rows
        .map((row) => {
          row.www = Math.random();
          return row;
        })
        .sort((a, b) => (a.www > b.www ? 1 : -1));

      const result = newRows.map((el, i) => {
        if (i === newRows.length - 1) {
          el.body_id = newRows[0].id;
        } else {
          el.body_id = newRows[i + 1].id;
        }

        return el;
      });

      result.forEach(({ body_id, id }) => {
        db.run(sglAddBodyPlayers, [body_id, id], function (err) {
          if (err) throw err;
        });
      });
    });

    db.all(sqlReadPlayers, function (err, rows) {
      if (err) throw err;

      const result = rows.map(({ id, name, surname, wishes, body_id }) => {
        wishes = wishes.split(",");

        return { id, name, surname, wishes, body_id };
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
