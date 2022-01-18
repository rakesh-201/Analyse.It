
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { Client } = require("pg");
const neo4j = require("neo4j-driver");

const upload_data = require("./Utilities/spatialFunctions").upload_data;
const find_avg = require("./Utilities/spatialFunctions").find_avg;
const find_tot_avg = require("./Utilities/spatialFunctions").find_tot_avg;
const find_avg_dist = require("./Utilities/spatialFunctions").find_avg_dist;
const find_cases = require("./Utilities/spatialFunctions").find_cases;
const { insert, count } = require("./Utilities/graphFunctions");


const client = new Client({
  user: "postgres",
  password: "Optics@#12345",
  host: "localhost",
  port: "5432",
  database: "Project!",
});

client
  .connect()
  .then(async() => {
    console.log("connected")
    await client.query("BEGIN");
    const res = await find_cases({lat: 19.0760, lng: 72.8777}, client);
    console.log(res.rows[0].covid_case)
    await client.query("COMMIT");
  })
  .catch((err) => console.error(err));

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', '1234'))
const session = driver.session();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/analyse", (req, res) => {
  res.send("Hello");
});

app.post("/analyse", async (req, res) => {
  try{
  // console.log(req.body);

  const data = req.body.data;

  const cur_loc = req.body.cur_loc;

  await upload_data(data, client);

  let avg = await find_avg(client);
  console.log(avg)

  avg = avg.rows[0].avg

  console.log(avg)

  let tot_avg = await find_tot_avg(client);

  tot_avg = tot_avg.rows[0].avg

  let result = await avg >= tot_avg ? false : true;

  let dist = await find_avg_dist(cur_loc, client);

  dist = dist.rows[0].avg

  let cases = await find_cases(cur_loc, client);

  cases = cases.rows[0].covid_case

  await insert(data, cur_loc, client, session)
  // await count(dist, session)
  res.json({avg, tot_avg, result, dist, cases});
  }
  catch (err){
    console.log(err)
  }
});

// app.post('/count', async(req, res) => {
//   const dist = req.body.dist
//   const r = await count(dist, session)
//   res.json({result})
// })

app.get('/all_data', async(req, res) => {
  const result = await client.query("SELECT e.name, e.district, d.covid_case FROM districts AS d, entities AS e ON d.district = e.district;");
  res.json({result});
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

