const mongoose = require("mongoose");
const fs = require("fs");

// Define enums manually
const enums = {
  Gender: ["male", "female", "other"],
  Status: ["active", "inactive"],
  BloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  ExamType: ["midterm", "final", "quiz"],
};

async function generateUML() {
  try {
    await mongoose.connect(
      "mongodb+srv://chymukesh:boom123@cluster0.67qpzkh.mongodb.net/college_management?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB Atlas ✅");

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log(
      "Collections found:",
      collections.map((c) => c.name)
    );

    let uml = `@startuml\n\n`;

    // Add enums
    for (let [name, values] of Object.entries(enums)) {
      uml += `enum ${name} { ${values.join(", ")} }\n\n`;
    }

    const nestedClasses = new Set();
    const allCollections = {};

    // Analyze each collection
    for (let coll of collections) {
      const docs = await mongoose.connection.db
        .collection(coll.name)
        .find()
        .limit(20)
        .toArray();
      if (docs.length === 0) continue;

      const fields = new Set();
      docs.forEach((doc) => Object.keys(doc).forEach((key) => fields.add(key)));
      allCollections[coll.name] = Array.from(fields);

      uml += `class ${capitalize(coll.name)} {\n`;
      fields.forEach((f) => {
        if (
          typeof docs[0][f] === "object" &&
          !Array.isArray(docs[0][f]) &&
          docs[0][f] !== null
        ) {
          // Nested object
          const nestedName = capitalize(f);
          nestedClasses.add(nestedName);
          uml += `    +${nestedName} ${f}\n`;
        } else if (f.toLowerCase().includes("gender"))
          uml += `    +Gender ${f}\n`;
        else if (f.toLowerCase().includes("status"))
          uml += `    +Status ${f}\n`;
        else if (f.toLowerCase().includes("bloodgroup"))
          uml += `    +BloodGroup ${f}\n`;
        else if (f.toLowerCase().includes("examtype"))
          uml += `    +ExamType ${f}\n`;
        else uml += `    +String ${f}\n`;
      });
      uml += `}\n\n`;
    }

    // Add nested classes
    nestedClasses.forEach((nc) => {
      uml += `class ${nc} {\n    +String name\n    +String relationship\n    +String phone\n}\n\n`;
    });

    // Add dynamic relationships for nested objects and foreign keys
    for (let [collName, fields] of Object.entries(allCollections)) {
      fields.forEach((f) => {
        if (nestedClasses.has(capitalize(f))) {
          uml += `${capitalize(collName)} "1" -- "1" ${capitalize(f)} : has\n`;
        } else if (
          f.toLowerCase().endsWith("id") &&
          f.toLowerCase() !== "_id"
        ) {
          const target = capitalize(f.replace(/Id$/i, ""));
          if (allCollections[target.toLowerCase()]) {
            uml += `${capitalize(
              collName
            )} "1" -- "0..*" ${target} : refersTo\n`;
          }
        }
      });
    }

    uml += "\n@enduml";

    fs.writeFileSync("dynamicSchema.puml", uml);
    console.log("PlantUML diagram saved as dynamicSchema.puml ✅");

    await mongoose.connection.close();
    console.log("Disconnected from MongoDB Atlas ✅");
  } catch (err) {
    console.error("Error:", err);
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

generateUML();
