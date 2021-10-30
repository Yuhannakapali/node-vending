/*
 * Primary file for the api for the vending machine.
 * 30-oct-2021
 * yuhanna Kapali
 */


import { createServer } from "http";

const app = (req, res) => {
    res.end("server is Working \n")
}
createServer(app).listen(8000, () => {
    console.log("server is running");
});