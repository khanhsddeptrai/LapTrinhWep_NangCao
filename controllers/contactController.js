

const getContactPage = (req, res) => {
    return res.render('partials/layout', { page: 'pages/contact' })
}

export default getContactPage;