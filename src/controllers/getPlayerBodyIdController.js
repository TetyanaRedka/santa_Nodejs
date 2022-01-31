import { openDB, closeDB } from "../db/index.js";

import { sqlReadPlayerByBodyId } from "../db/SQL.js";

export const getPlayerBodyIdController = async (req, res) => {
  const db = openDB();
  try {
    db.get(sqlReadPlayerByBodyId, [req.params.body_id], function (err, row) {
      if (err) throw err;

      row.wishes = row.wishes.split(",");

      res.status(200).json({
        status: "success",
        code: "200",
        data: row,
      });
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
