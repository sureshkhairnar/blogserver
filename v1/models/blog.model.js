// const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);

// const projectSchema = new mongoose.Schema({
//   projectid: Number,
//   projectname: String,
//   reason: String,
//   type: String,
//   division: String,
//   category: String,
//   priority: String,
//   department: String,
//   startdate: Date,
//   enddate: Date,
//   location: String,
//   status: String,
//   createdAt: { type: Date, default: Date.now },
// });

// projectSchema.plugin(AutoIncrement, { inc_field: "projectid" });
// module.exports = mongoose.model("Project", projectSchema);

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  tags: {
    type: Array,
  },
  imageUrl: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
