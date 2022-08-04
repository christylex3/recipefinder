const router = require("express").Router();
const userRoutes = require("./userRoutes");
const mealtimeRoutes = require("./mealtimeRoutes");
const addrecipeRoutes = require("./addrecipeRoutes");

router.use("/user", userRoutes);
router.use("/mealtime", mealtimeRoutes);
router.use("/addrecipe", addrecipeRoutes);

module.exports = router;
