import { parse } from "path"

const Router = (req, res) => {
    console.log("🚀 ~ file: Router.js ~ line 4 ~ Router ~ req", req.url)
    let parseUrl = parse(req.url, false);
    console.log("🚀 ~ file: Router.js ~ line 5 ~ Router ~ parseUrl", parseUrl)
    // let path = parseUrl.pathname;
    // console.log("🚀 ~ file: Router.js ~ line 7 ~ Router ~ path", path)
    // let trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // console.log("🚀 ~ file: Router.js ~ line 7 ~ trimmedPath", trimmedPath)
    let method = req.method.toUppercase();
    console.log("🚀 ~ file: Router.js ~ line 9 ~ method", method)
    console.log('Request received on path: ' + trimmedPath + ' with method: ' + method);
}

export default Router