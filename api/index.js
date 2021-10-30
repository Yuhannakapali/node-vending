/*
 * Primary file for the api for the vending machine.
 * 30-oct-2021
 * yuhanna Kapali
 */


import { createServer } from "http";
import { app } from "../baseApplication/index.js"

createServer(app).listen(8000, () => {
    console.log("server is running");
});