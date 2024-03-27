'use strict';

const mongoose = require('mongoose');
var schema = new mongoose.Schema({}, { strict: false });

const { getCollection } = require('../utils/helpers');
const { log } = require('console');

/**
 *
 * body Vote 
 * no response value expected for this operation
 **/
exports.addVote = function(body) {
  return new Promise(async function (resolve, reject) {
    try {
      var Vote = getCollection('vote');
      
      body.create_at = Date.now();
      var vote = new Vote(body);
      vote.save();

      resolve({ code: 200, message: 'created Vote successfully' });
    } catch (error) {
      reject({ code: 404, message: error.message });
    }
  });
}


/**
 * Delete vote
 *
 * vote_id String 
 * returns inline_response_200_7
 **/
exports.deleteVoteById = function(vote_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var Vote = getCollection('vote');
      const data = await Vote.findOne({ _id: vote_id });
      console.log(data);

      if (data) {
        await data.deleteOne();
        console.log('Document removed successfully');
        resolve({
          code: 200,
          message: "Record deleted successfully",
        });
      } else {
        console.log('Document not found');
      }

    } catch (err) {
      reject({ code: 400, message: err.message });
    }
  });
}


/**
 *
 * returns inline_response_200_4
 **/
exports.getVoteAll = function() {
  return new Promise(async function (resolve, reject) {
    var Vote = getCollection('vote');
    var data = [];
    data = await Vote.find();

    if (!data.empty) {
      resolve({ code: 200, data: data });
    } else {
      reject({ code: 404, message: 'no vote found' });
    }
  });
}


/**
 *
 * vote_id String 
 * returns inline_response_200_5
 **/
exports.getVoteById = function(vote_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var vote = getCollection('vote');
      var data = await vote.findOne({ _id: vote_id });
      console.log(data);
      if (!data.empty) {
        resolve({ code: 200, data: data });
      } else {
        reject({ code: 400, message: "No vote found" });

      }
    } catch (err) {
      reject({ code: 400, message: err.message })
    }
  });
}

exports.getVoteByImage = function(image_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var vote = getCollection('vote');
      var data = await vote.find({ 'img.img_id': image_id });
      console.log(data);
      if (!data.empty) {
        resolve({ code: 200, data: data });
      } else {
        reject({ code: 400, message: "No vote found" });

      }
    } catch (err) {
      reject({ code: 400, message: err.message })
    }
  });
}

exports.getVoteByUserId = function(user_id) {
  return new Promise(async function (resolve, reject) {
    var Vote = getCollection('Vote');
    var data = [];
    console.log(user_id);
    data = await Vote.find({'img.user.user_id' : user_id});
    console.log(data);
    if (!data.empty) {
      resolve({ code: 200, data: data });
    } else {
      reject({ code: 404, message: 'no user found' });
    }
  });
}
/**
 * Update a vote
 *
 * body Vote_vote_id_body 
 * vote_id String 
 * returns inline_response_200_6
 **/
exports.updateVoteById = function(body,vote_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var Vote = getCollection('vote');
      var data = await Vote.findOneAndUpdate({ _id: vote_id }, { $set: body });
      console.log(data);
      resolve({ code: 200, message: "Successful operation" });
    } catch (err) {
      reject({ code: 400, message: err.message });
    }
  });
};
  

