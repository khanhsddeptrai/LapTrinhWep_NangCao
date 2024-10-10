import express from "express";

const viewEngine = (app) => {
    app.use(express.static('./public'));
    app.set("view engine", "ejs")
    app.set("views", "./views")
}

export default viewEngine;