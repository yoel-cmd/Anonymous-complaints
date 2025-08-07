import express from "express";
import { router,CheckPassword } from "./routes/complaints.js";


const app = express();
app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin',CheckPassword)
app.use("/idf", router);

app.listen(3000, () => console.log("listen.."));
