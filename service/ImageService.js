'use strict';


/**
 *
 * body Image 
 * no response value expected for this operation
 **/
exports.addImage = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete image
 *
 * image_id String 
 * returns inline_response_200_11
 **/
exports.deleteImageById = function(image_id) {
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
 *
 * returns inline_response_200_8
 **/
exports.getImageAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "img_url" : "img_url",
    "id" : 6,
    "create_at" : "create_at"
  }, {
    "img_url" : "img_url",
    "id" : 6,
    "create_at" : "create_at"
  } ],
  "status" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "img_url" : "img_url",
    "id" : 6,
    "create_at" : "create_at"
  }, {
    "img_url" : "img_url",
    "id" : 6,
    "create_at" : "create_at"
  } ],
  "status" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

