'use strict';

const mongoose = require('mongoose');
var schema = new mongoose.Schema({}, { strict: false });

const { getCollection } = require('../utils/helpers');
const { log } = require('console');

/**
 *
 * body Image 
 * no response value expected for this operation
 **/
exports.addImage = function(body) {
  return new Promise(async function (resolve, reject) {
    try {
      var Image = getCollection('image');
      
      body.created_at = Date.now();
       

      

      var Image = new Image(body);
      Image.save();

      resolve({ code: 200, message: 'created Image successfully' });
    } catch (error) {
      reject({ code: 404, message: error.message });
    }
  });
}


/**
 * Delete image
 *
 * image_id String 
 * returns inline_response_200_11
 **/
exports.deleteImageById = function(image_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var Image = getCollection('image');
      const data = await Image.findOne({ _id: image_id });
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
 * returns inline_response_200_8
 **/
exports.getImageAll = function() {
  return new Promise(async function (resolve, reject) {
    var Image = getCollection('image');
    var data = [];
    data = await User.find();

    if (!data.empty) {
      resolve({ code: 200, data: data });
    } else {
      reject({ code: 404, message: 'no user found' });
    }
  });
}


exports.getImageByUserId = function(user_id) {
  return new Promise(async function (resolve, reject) {
    var Image = getCollection('image');
    var data = [];
    data = await Image.find({'user.user_id' : user_id});

    if (!data.empty) {
      resolve({ code: 200, data: data });
    } else {
      reject({ code: 404, message: 'no user found' });
    }
  });
}
/**
 *
 * image_id String 
 * returns inline_response_200_9
 **/
exports.getImageById = function(image_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "img_url" : "img_url",
    "id" : 6,
    "create_at" : "create_at"
  },
  "status" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a image
 *
 * body Image_image_id_body 
 * image_id String 
 * returns inline_response_200_10
 **/
exports.updateImageById = function(body,image_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var Image = getCollection('image');
      var data = await Image.findOneAndUpdate({ _id: image_id }, { $set: body });
      console.log(data);
      resolve({ code: 200, message: "Successful operation" });
    } catch (err) {
      reject({ code: 400, message: err.message });
    }
  });
}

