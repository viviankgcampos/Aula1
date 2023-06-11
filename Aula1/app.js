const express = require("express");
const os = require("os");
const app = express();

app.get("/", (request, response) => {
    return response
        .status(200)
        .json({
            message: "Ola"
        });
    });

app.get("/liveness", (request, response) => {
    return response
        .status(200)
        .json({
            message: "meu app esta vivo",
            path: process.cwd(),
            gid: process.getegid(),
            uid: process.getuid()
        });

    });

app.get("/readiness", (request, response) => {
    return response
        .status(200)
        .json({
            message: "meu app esta pronto",
            plataform: os.plataform(),
            freeman: os.freeman(),
            homedir: os.homedir()
        });

    });



module.exports = app;