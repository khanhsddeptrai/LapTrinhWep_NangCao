
const getContactPage = (req, res) => {
    return res.render('partials/layout', {
        page: 'pages/contact',
        pageTitle: 'Contact Page'
    })
}

export default getContactPage;