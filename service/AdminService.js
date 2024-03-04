'use strict';


/**
 * Sign up Admin
 *
 * body Admin 
 * no response value expected for this operation
 **/
exports.addAdmin = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * ลบสมาชิก
 *
 * id String admin Id
 * no response value expected for this operation
 **/
exports.deleteAdminById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * ดูสมาชิก
 *
 * id String admin Id
 * returns inline_response_200_3
 **/
exports.getAdminById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "birth_day" : "birth_day",
    "password" : "password",
    "img_url" : "img_url",
    "phone" : "phone",
    "created_at" : "created_at",
    "id" : 6,
    "email" : "email",
    "username" : "username"
  },
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
 * ดูสมาชิกทั้งหมด
 *
 * returns inline_response_200_2
 **/
exports.getAllAdmin = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : [ {
    "birth_day" : "birth_day",
    "password" : "password",
    "img_url" : "img_url",
    "phone" : "phone",
    "created_at" : "created_at",
    "id" : 6,
    "email" : "email",
    "username" : "username"
  }, {
    "birth_day" : "birth_day",
    "password" : "password",
    "img_url" : "img_url",
    "phone" : "phone",
    "created_at" : "created_at",
    "id" : 6,
    "email" : "email",
    "username" : "username"
  } ]
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
 * body Admin 
 * id String admin ID
 * no response value expected for this operation
 **/
exports.updateAdmin = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

