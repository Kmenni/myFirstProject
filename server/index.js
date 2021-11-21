const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const studentsController = require("./controllers/studentsController");


const app = express();
const port = 8000;


connectDB();

/* middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// controller
app.use("/students",studentsController);

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
})