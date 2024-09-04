// const router = require("express").Router();
// const multer = require("multer");
// const path = require("path");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/venues");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });
// const {
//   createProject,
//   updateProject,
//   deleteProject,
//   getSingleProject,
//   getAllProject,
//   projectStatistic,
// } = require("../controllers/project.controller");

// router.post("/", upload.array("images", 10), createProject);
// router.put("/:id", upload.array("images", 10), updateProject);
// router.delete("/:id", deleteProject);
// router.get("/:id", getSingleProject);
// router.get("/", getAllProject);
// router.get("/statistic", projectStatistic);

// module.exports = router;

const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/blogs");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const {
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  getAllBlogs,
} = require("../controllers/blog.controller");

router.post("/", upload.single("image"), createBlog);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);
router.get("/:id", getSingleBlog);
router.get("/", getAllBlogs);

module.exports = router;
