const contactModel = require("../models/contactModel");
const controller = {};

// Add Contact
controller.addContact = (req, res) => {
    const body = req.body;
    const { name, email, mobile, salary, designation, img } = body;

    // Response Variable
    const response = {
        name: "",
        email: "",
        mobile: "",
        salary: "",
        designation: "",
        img: "",
        data: "",
        error: "",
        message: "",
        sussess: false
    }

    if (name == "") response.name = "Name is required!";
    if (mobile == "") response.mobile = "Mobile is required!";

    if (response.name != "" || response.mobile != "") {
        response.message = "Validation failed!";
        res.send(response);
    } else {
        const contactData = new contactModel(body);
        contactData.save((err, data) => {
            if (err) {
                response.message = "Error occured!";
                response.error = err;
                res.send(response);
            } else {
                response.message = "Contact saved!";
                response.sussess = true;
                response.data = data;
                res.send(response);
            }
        })
    }
}

// Update Contact
controller.updateContact = (req, res) => {
    const body = req.body;
    const { _id, name, email, mobile, salary, designation, img } = body;

    // Response Variable
    const response = {
        _id: "",
        name: "",
        email: "",
        mobile: "",
        salary: "",
        designation: "",
        img: "",
        data: "",
        error: "",
        message: "",
        sussess: false
    }

    if (_id == "") response._id = "Contact ID is required!";
    if (name == "") response.name = "Name is required!";
    if (mobile == "") response.mobile = "Mobile is required!";

    if (response._id != "" || response.name != "" || response.mobile != "") {
        response.message = "Validation failed!";
        res.send(response);
    } else {
        contactModel.findByIdAndUpdate({ _id }, body, (err, data) => {
            if (err) {
                response.message = "Error occured!";
                response.error = err;
                res.send(response);
            } else {
                response.message = "Contact updated!";
                response.sussess = true;
                response.data = data;
                res.send(response);
            }
        })
    }
}

// Search Contact
controller.searchContact = (req, res) => {
    const body = req.body;
    const { query } = req;

    // Response Variable
    const response = {
        data: "",
        error: "",
        message: "",
        sussess: false
    }

    const condition = {}
    contactModel.find(condition, (err, data) => {
        if (err) {
            response.message = "Error occured!";
            response.error = err;
            res.send(response);
        } else {
            response.sussess = true;
            response.data = data;
            res.send(response);
        }
    })
}

// Delete Contact
controller.deleteContact = (req, res) => {
    const body = req.body;
    const { _id } = body;

    // Response Variable
    const response = {
        _id: "",
        data: "",
        error: "",
        message: "",
        sussess: false
    }

    if (_id == "") response._id = "Contact ID is required!";

    if (response._id != "") {
        response.message = "Validation failed!";
        res.send(response);
    } else {
        contactModel.findByIdAndDelete({ _id }, (err, data) => {
            if (err) {
                response.message = "Error occured!";
                response.error = err;
                res.send(response);
            } else {
                response.message = "Contact deleted!";
                response.sussess = true;
                response.data = data;
                res.send(response);
            }
        })
    }
}
module.exports = controller;