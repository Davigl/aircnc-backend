const express = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const SessionsController = require("./controllers/SessionsController");
const SpotsController = require("./controllers/SpotsController");
const ProfilesController = require("./controllers/ProfilesController");
const BookingsController = require("./controllers/BookingsController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionsController.store);
routes.post("/spots", upload.single("thumbnail"), SpotsController.store);
routes.get("/spots", SpotsController.index);

routes.get("/dashboard", ProfilesController.show);

routes.post("/spots/:spot_id/bookings", BookingsController.store);

module.exports = routes;
