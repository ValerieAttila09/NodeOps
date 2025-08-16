import readline from "readline"
import { MongoClient, ServerApiVersion } from "mongodb"
import dotenv from "dotenv"
dotenv.config();

const uri = 'mongodb://localhost:27017'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const opt = [
  { id: 1, info: "Find Data" },
  { id: 2, info: "Find Many Data" },
  { id: 3, info: "Insert Data" },
  { id: 4, info: "Update Data" },
  { id: 5, info: "Delete Data" }
]


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const queries = async () => {
  setTimeout(() => {
    console.log("\n==================")
    console.log("|     Options    |")
    console.log("==================")
    opt.map((run) => {
      console.log(`${run.id}. ${run.info}`)
    })
    const rl = readline.createInterface({
      // eslint-disable-next-line no-undef
      input: process.stdin,
      // eslint-disable-next-line no-undef
      output: process.stdout
    });

    rl.question('Select option : ', (answer) => {
      console.log(`Running : ${opt[answer - 1].info} ...`)
      rl.close()
    });
  }, 1500);
}

queries()

