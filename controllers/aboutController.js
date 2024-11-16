import express from "express";

const getAboutPage = (req, res) => {
    return res.render('partials/layout', {
        page: 'pages/about',
        pageTitle: 'About Page'
    })
}

export default getAboutPage;