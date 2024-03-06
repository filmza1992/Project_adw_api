'use strict';

var utils = require('../utils/writer.js');
var Vote = require('../service/VoteService');

module.exports.addVote = function addVote (req, res, next, body) {
  Vote.addVote(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteVoteById = function deleteVoteById (req, res, next, vote_id) {
  Vote.deleteVoteById(vote_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVoteAll = function getVoteAll (req, res, next) {
  Vote.getVoteAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVoteById = function getVoteById (req, res, next, vote_id) {
  Vote.getVoteById(vote_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVoteByImage = function getVoteByImage (req, res, next, image_id) {
  Vote.getVoteByImage(image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateVoteById = function updateVoteById (req, res, next, body, vote_id) {
  Vote.updateVoteById(body, vote_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
