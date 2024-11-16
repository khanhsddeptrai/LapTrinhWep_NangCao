import express from "express";
import userModel from "../services/userModel.js";

const getHomePage = async (req, res) => {
    let userList = await userModel.getAllUser();
    return res.render('partials/layout', {
        page: 'pages/home/',
        pageTitle: 'Home Page',
        users: userList
    })
}

const getUserDetail = async (req, res) => {
    let id = req.params.id
    let user = await userModel.getUserDetail(id);

    return res.render('partials/layout', {
        page: `pages/getUserDetail`,
        pageTitle: 'Detail User Page',
        user: user
    })
}

const getCreateUser = async (req, res) => {
    return res.render('partials/layout', {
        page: 'pages/createUser',
        pageTitle: 'Create user page'
    })

};

const postCreateUser = async (req, res) => {
    let { username, fullname, email, address, } = req.body;
    await userModel.createNewUser(req.body);
    res.redirect("/user");
}

const getUpdateUser = async (req, res) => {
    // let { fullname, email, address } = req.body;
    // let updateUser = await userModel.updateUserInfo()
    let id = req.params.id
    let user = await userModel.getUserDetail(id);

    return res.render('partials/layout', {
        page: `pages/updateUserDetail`,
        pageTitle: 'Update Detail User Page',
        user: user
    })

};

const postUpdateUser = async (req, res) => {
    let id = req.params.id;
    let { username, fullname, email, address, } = req.body;
    await userModel.updateUserInfo(id, req.body)
    res.redirect("/user")

};

const deleteUser = async (req, res) => {
    let id = req.params.id;
    await userModel.deleteUserById(id)
    res.redirect("back")

};


export { getHomePage, getUserDetail, getUpdateUser, postUpdateUser, getCreateUser, deleteUser, postCreateUser };