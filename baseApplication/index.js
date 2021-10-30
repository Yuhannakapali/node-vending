import Router from "./Router.js"

export const app = (req, res) => {
    Router(req, res);

    res.end("server is Working \n")
}