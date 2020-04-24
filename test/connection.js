const mongoose = require("mongoose", { useUnifiedTopology: true });

//Connect to mongodb
mongoose.connect(
  "mongodb+srv://oyvindjt:EYi6WQN9DfPat58@lkkit2901-rem3a.azure.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

mongoose.connection
  .once("open", function() {
    console.log("Connection has been made");
  })
  .on("error", function(error) {
    console.log("error");
  });
