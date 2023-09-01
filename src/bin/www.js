const dotenv = require("dotenv");

const app = require(`${__dirname}/../apps/app.js`);
const config = require("config");

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
