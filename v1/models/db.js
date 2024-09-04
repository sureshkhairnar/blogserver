const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://sureshkhairnar137:NUrUMicjWOsiVxCA@cluster0.oigqxna.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Could not connect to the database", err));
