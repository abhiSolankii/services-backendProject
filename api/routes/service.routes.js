import express from "express";
import {
  getAllServices,
  getService,
  createService,
  updateService,
  deleteService,
} from "../controllers/service.controller.js";

const router = express.Router();

router.get("/", getAllServices);
router.get("/:id", getService);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
