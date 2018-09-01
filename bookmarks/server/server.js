// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()

// // Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares)

// // Add custom routes before JSON Server router
// server.get('/echo', (req, res) => {
//     res.jsonp(req.query)
// })

// // To handle POST, PUT and PATCH you need to use a body-parser
// // You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//     if (req.method == "POST") {
//         req.body.createdAt = Date.now();
//         req.body.updatedAt = Date.now();
//         const bookmarkName = req.body.websiteName;
//         const url = req.body.websiteUrl;

//         req.body.name = bookmarkName;
//         req.body.url = url;

//         if (!req.body.tags) {
//             req.body.tags = []
//         }

//         if (!req.body.archived) {
//             req.body.archived = false
//         }

//         delete req.body.websiteName;
//         delete req.body.websiteUrl;

//         console.log(req.body);
//     } else if (req.method == "PUT") {
//         // do form handling
//         if (!req.body.createdAt) {
//             req.body.createdAt = Date.now();
//         }
//         req.body.updatedAt = Date.now();
//     }
//     // Continue to JSON Server router
//     next()
// });

// // Use default router
// server.use(router)
// server.listen(3001, () => {
//     console.log('JSON Server is running')
// })
// hello.js
module.exports = (req, res, next) => {
    if (req.method == "POST") {
        req.body.createdAt = Date.now();
        req.body.updatedAt = Date.now();
        const bookmarkName = req.body.websiteName;
        const url = req.body.websiteUrl;

        req.body.name = bookmarkName;
        req.body.url = url;

        if (!req.body.tags) {
            req.body.tags = []
        }

        if (!req.body.archived) {
            req.body.archived = false
        }

        delete req.body.websiteName;
        delete req.body.websiteUrl;

        console.log(req.body);
    } else if (req.method == "PUT") {
        // do form handling
        if (!req.body.createdAt) {
            req.body.createdAt = Date.now();
        }
        req.body.updatedAt = Date.now();
    }
    // Continue to JSON Server router
    next()
}