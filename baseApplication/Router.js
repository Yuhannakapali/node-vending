import { parse } from "path"

const Router = (req, res) => {
    console.log("🚀 ~ file: Router.js ~ line 4 ~ Router ~ req", req)
    let parseUrl = parse(req.url, true);
    console.log("🚀 ~ file: Router.js ~ line 5 ~ Router ~ parseUrl", parseUrl)
    let path = parseUrl.pathname;
    console.log("🚀 ~ file: Router.js ~ line 7 ~ Router ~ path", path)
    let trimmedPath = path.replace(/^\/+|\/+$/g, '');
    console.log("🚀 ~ file: Router.js ~ line 7 ~ trimmedPath", trimmedPath)
    let method = req.method.toUppercase();
    console.log("🚀 ~ file: Router.js ~ line 9 ~ method", method)
}

export default Router