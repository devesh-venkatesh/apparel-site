import express = require("express")
import { IMiddleware } from "../interfaces"

const adminController: Record<string, IMiddleware> = require("../controllers/admin")

const router = express.Router()

router.get("/product", adminController.getProduct)
router.post("/product", adminController.postProduct)

module.exports = router
