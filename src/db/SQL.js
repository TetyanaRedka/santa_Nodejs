import { TABLE } from "../config/config.js";

////////////////// единоразово создаем новую таблицу и ее структуру

export const sqlCreatePlayersTable = `CREATE TABLE ${TABLE}(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name NVARCHAR NOT NULL,
    surname NVARCHAR  NOT NULL,
    wishes NVARCHAR NOT NULL,
    body_id SMALLINT UNSIGNED
);`;

/////////////// форма запроса на добавление
export const sqlWritePlayer = `INSERT INTO ${TABLE} (name, surname, wishes)
                VALUES(?,?,?)`;

/////////////// форма запроса на чтение
export const sqlReadPlayers = `SELECT * FROM ${TABLE}`;

////////////// получение данных игрока по ID
export const sqlReadPlayerById = `SELECT
id id,
name name,
surname surname,
wishes wishes
FROM ${TABLE}
WHERE id  = ?`;

/////////////// форма запроса на добавление

export const sglAddBodyPlayers = `UPDATE ${TABLE} SET body_id = ? WHERE id  = ?;`;

////////////// получение данных игрока по ID
export const sqlReadPlayerByBodyId = `SELECT
id id,
name name,
surname surname,
wishes wishes
FROM ${TABLE}
WHERE body_id  = ?`;
