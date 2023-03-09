import express from "express";
import { PORT } from "./config.js"
import { ErrorHendler } from "./lib/errorHendler.js";
import router from "./models/users/router.js";

let app = express();

app.use(express.json());
app.use(router);
app.use(ErrorHendler);



app.listen(PORT, () => console.log("server ready " + PORT));