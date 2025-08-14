const mongoose = require("mongoose");

async function exportSchema() {
  try {
    await mongoose.connect(
      "mongodb+srv://chymukesh:boom123@cluster0.67qpzkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB Atlas ✅");

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log(
      "Collections found:",
      collections.map((c) => c.name)
    );

    for (let coll of collections) {
      const docs = await mongoose.connection.db
        .collection(coll.name)
        .find()
        .limit(10)
        .toArray();
      if (docs.length === 0) {
        console.log(`Collection ${coll.name} is empty`);
        continue;
      }
      const fields = new Set();
      docs.forEach((doc) => Object.keys(doc).forEach((key) => fields.add(key)));
      console.log(`Collection: ${coll.name}`, Array.from(fields));
    }

    await mongoose.connection.close();
    console.log("Disconnected from MongoDB Atlas ✅");
  } catch (err) {
    console.error("Error:", err);
  }
}

exportSchema();
