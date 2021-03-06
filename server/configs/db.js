const mongoose = require("mongoose");

const connectDB = () => {
  const uri = "mongodb://localhost:27017/StudentsDB";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(uri, options);
};

module.exports =  connectDB;
