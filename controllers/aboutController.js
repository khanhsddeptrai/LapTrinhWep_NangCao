import express from "express";

const getAboutPage = (req, res) => {
    return res.render('pages/about', {
        pageTitle: "About"
    })
}

export default getAboutPage;