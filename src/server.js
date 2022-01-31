import express from "express";
import routes from "./routes/index.js";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// const setup = async () => {
//   const db = await dbPromise;
//   // await db.migrate();

//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//   });
// };

// setup();
