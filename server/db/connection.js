import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.LOCAL_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  serverSelectionTimeoutMS: 10 * 1000
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  if (uri === process.env.LOCAL_URI) {
    console.log(
      "Pinged your local deployment. You successfully connected to MongoDB!"
    );
  }
  else {
    console.log(
      "Pinged your remote deployment. You successfully connected to MongoDB!"
    );
  }
} catch (err) {
  console.error(err);
}

let db = client.db("fitness-app");

export default db;