'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.addAdmin = function addAdmin (req, res, next, body) {
  Admin.addAdmin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdminById = function deleteAdminById (req, res, next, id) {
  Admin.deleteAdminById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdminById = function getAdminById (req, res, next, id) {
  Admin.getAdminById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllAdmin = function getAllAdmin (req, res, next) {
  Admin.getAllAdmin()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdmin = function updateAdmin (req, res, next, body, id) {
  Admin.updateAdmin(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdminPassword = function updateAdmin (req, res, next, body) {
  Admin.updateAdminPassword(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
