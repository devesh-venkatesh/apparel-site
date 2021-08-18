import mongoose = require("mongoose")
import { IBaseMongooseItem } from "../interfaces"

export interface IShoppingItem extends IBaseMongooseItem {
  name: string
  image: string[]
  seller?: string
  manufacturer?: string
  tags: string[]
  date: Date
  price: number
  discount?: number
  colors?: string[]
  size?: string[]
  additionalInfo?: Record<string, string>
  details?: string[]
  featured?: boolean
  newItem?: boolean
}

const ShoppingItemSchema = new mongoose.Schema<IShoppingItem>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  seller: String,
  manufacturer: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: Number,
  colors: [String],
  size: [String],
  additionalInfo: {
    type: Map,
    of: String,
  },
  details: [String],
  featured: Boolean,
  newItem: Boolean,
})

const ShoppingItem = mongoose.model<IShoppingItem>("ShoppingItem", ShoppingItemSchema)

module.exports = ShoppingItem
