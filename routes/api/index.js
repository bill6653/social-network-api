const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const thoughtRoutes = require("./thoughtRoutes");

router.route("/").get(userRoutes);
// router.route("/thoughts").get(thoughtRoutes);

module.exports = router;
