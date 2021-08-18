import express = require("express")
import mongoose = require("mongoose")

export interface IBaseMongooseItem {
  _id: mongoose.Types.ObjectId
}

export type IMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => void
export type IMongooseModel<T> = mongoose.Model<T, {}, {}>
