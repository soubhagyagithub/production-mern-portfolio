const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path")

dotenv.config();

const app = express();
// middleware
app.use(cors());
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req, res){
    res.send(path.join(__dirname,'./client/build/index.html'))
})
// Routes
const portfolioRoute = require("./routes/portfolioRoute");
app.use("/api/v1/portfolio", portfolioRoute);

//PORT
const PORT = process.env.PORT;

// Listen
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
