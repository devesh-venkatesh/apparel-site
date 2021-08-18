import { IMiddleware, IMongooseModel } from "../interfaces"
import { IShoppingItem } from "../models/ShoppingItem"

const ShoppingItem: IMongooseModel<IShoppingItem> = require("../models/ShoppingItem")

const postProduct: IMiddleware = (req, res, next) => {
  try {
    const shoppingItemEntry = new ShoppingItem(req.body)

    shoppingItemEntry.save((err, newEntry) => {
      if (err) throw new Error(err.name)

      res.send({ success: false, entry: newEntry._id })
    })

    res.send({ success: false })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const getProduct: IMiddleware = (req, res, next) => {
  ShoppingItem.find({}, (err, list) => {
    res.send(list)
  })
}

module.exports = { postProduct, getProduct }
