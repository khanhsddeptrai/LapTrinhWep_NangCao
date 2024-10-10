import express from "express";

const getHomePage = (req, res) => {
    return res.render('pages/home', {
        pageTitle: "Home page"
    })
}

export default getHomePage;