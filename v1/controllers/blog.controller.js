// const ProjectModel = require("../models/project.model");

// class ProjectCtrl {
//   static createProject(req, res) {
//     const project = req.body;
//     new ProjectModel(project)
//       .save()
//       .then((result) => {
//         res
//           .status(201)
//           .send({ message: "Project created successfully", data: result });
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).send({ message: "Project not created", error: err });
//       });
//   } // createProject

//   static updateProject(req, res) {
//     const { id } = req.params;
//     const project = req.body;
//     ProjectModel.findOneAndUpdate({ _id: id }, project, { new: true })
//       .then((result) => {
//         res.status(201).send({
//           message: "Project updated successfully",
//           data: result,
//         });
//       })
//       .catch((err) => {
//         res.status(404).send({ message: "Project not updated", error: err });
//         console.log("error", err);
//       });
//   } // updateProject

//   static deleteProject(req, res) {
//     const { id } = req.params;

//     ProjectModel.findOneAndDelete({ _id: id }, { status: 2 })
//       .then((result) => {
//         res.status(201).send({
//           message: "Project deleted successfully",
//           data: result,
//         });
//       })
//       .catch((err) => {
//         res.status(404).send({ message: "Project not deleted", error: err });
//       });
//   } // deletproject

//   static getSingleProject(req, res) {
//     const { id } = req.params;
//     ProjectModel.findOne({ _id: id })
//       .then((result) => {
//         res.status(200).send({ message: "User document", data: result });
//       })
//       .catch((err) => {
//         res.status(404).send({ message: "User not availabel", error: err });
//       });
//   } //for fecth single project

//   static getAllProject(req, res) {
//     ProjectModel.find()
//       .then((result) => {
//         res.status(201).send({ message: "Project details ", data: result });
//       })
//       .catch((err) => {
//         console.error(err);
//         res
//           .status(404)
//           .send({ message: " Project details could not fetch", error: err });
//       });
//   } //for fetchAllProject

//   // static getProjectDetails(req, res) {
//   //   ProjectModel.find({
//   //     $or: [{ projectname: { $regex: req.params.key, $options: "i" } }],
//   //   })
//   //     .then((result) => {
//   //       res.status(200).send({ data: result, messageL: "Project Data" });
//   //     })
//   //     .catch((err) => {
//   //       res.status(404).send({ message: "Project not availabel", error: err });
//   //       console.log(err);
//   //     });
//   // } // for fetch projectname

//   static async projectStatistic(req, res) {
//     try {
//       console.log("Request parameters:", req.params);
//       console.log("Request body:", req.body);
//       const totalProjects = await ProjectModel.countDocuments({
//         status: { $in: ["Running", "Closed", "Closure Delay", "Cancelled"] },
//       });
//       const running = await ProjectModel.countDocuments({
//         status: "Running",
//       });
//       const cancel = await ProjectModel.countDocuments({
//         status: "Cancelled",
//       });
//       const closureDelay = await ProjectModel.countDocuments({
//         status: "Closure Delay",
//       });
//       const close = await ProjectModel.countDocuments({
//         status: "Closed",
//       });

//       res.status(200).send({
//         message: "Project statistics",
//         data: { totalProjects, running, cancel, close, closureDelay },
//       });
//     } catch (err) {
//       res.status(500).send({
//         message: "Error fetching project statistics",
//         error: err,
//       });
//       console.log(err);
//     }
//   }
// }

// module.exports = ProjectCtrl;

const BlogModel = require("../models/blog.model");

class BlogCtrl {
  static createBlog(req, res) {
    const blog = req.body;
    if (req.file) {
      blog.imageUrl = req.file.path;
    }

    new BlogModel(blog)
      .save()
      .then((result) => {
        res
          .status(201)
          .send({ message: "Blog created successfully", data: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Blog not created", error: err });
      });
  }

  static updateBlog(req, res) {
    const { id } = req.params;
    const blog = req.body;
    if (req.file) {
      blog.imageUrl = req.file.path;
    }

    BlogModel.findOneAndUpdate({ _id: id }, blog, { new: true })
      .then((result) => {
        res
          .status(200)
          .send({ message: "Blog updated successfully", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "Blog not updated", error: err });
      });
  }

  static deleteBlog(req, res) {
    const { id } = req.params;

    BlogModel.findOneAndDelete({ _id: id })
      .then((result) => {
        res
          .status(200)
          .send({ message: "Blog deleted successfully", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "Blog not deleted", error: err });
      });
  }

  static getSingleBlog(req, res) {
    const { id } = req.params;

    BlogModel.findOne({ _id: id })
      .then((result) => {
        res
          .status(200)
          .send({ message: "Blog fetched successfully", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "Blog not found", error: err });
      });
  }

  static getAllBlogs(req, res) {
    BlogModel.find()
      .then((result) => {
        res
          .status(200)
          .send({ message: "Blogs fetched successfully", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "Blogs not found", error: err });
      });
  }
}

module.exports = BlogCtrl;
