const express = require("express");
const itemRouters = require("./router/item");
const ExpressError = require("./expressError");

const app = express();

app.use(express.json());
app.use('/itmes', itemRouters);


// 404 handler

app.use(function(req, res, next) {
    return new ExpressError('Not Found', 404);
});

// general error handler

app.use((err, req, res, next) => {
    res.stauts(err.status || 500);

    return res.json({
        error: err.message,
    });
});



module.exports = app