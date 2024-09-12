import url from 'url'
const getPatch = (req) => {
    return req.url;
}
const getParamsURL = (req) => {
    let urlData = url.parse(req.url, true);
    return JSON.stringify(urlData.query);
}

export default { getPatch, getParamsURL }