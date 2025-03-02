import {Router} from "express";

export const tradesRouter = Router();

tradesRouter.get("/", async (req, res) =>{
    const {market} = req.query;
    // get from db to be implemented

    res.json({});
});