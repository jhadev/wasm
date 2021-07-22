const express = require("express");
const app = express();

// do not do this
app.use(express.static("./"));

// app.use('/wasm', express.static('./build'))

app.listen(3000, () => console.log("server is running on port 3000"));
