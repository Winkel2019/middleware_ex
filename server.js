const express = require("express");
const app = express();
const PORT = 5000;
const userRouter = require("./routes/userRouter");

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/users", userRouter);

app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
