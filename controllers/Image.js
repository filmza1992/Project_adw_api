'use strict';

var utils = require('../utils/writer.js');
var Image = require('../service/ImageService');

module.exports.addImage = function addImage (req, res, next, body) {
  Image.addImage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteImageById = function deleteImageById (req, res, next, image_id) {
  Image.deleteImageById(image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImageAll = function getImageAll (req, res, next) {
  Image.getImageAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImageByUserId = function getImageByUserId (req, res, next,user_id) {
  Image.getImageByUserId(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImageById = function getImageById (req, res, next, image_id) {
  Image.getImageById(image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateImageById = function updateImageById (req, res, next, body, image_id) {
  Image.updateImageById(body, image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
