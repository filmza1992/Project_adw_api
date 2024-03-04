'use strict';


/**
 * Logs in current
 * การเข้าสู่ระบบของผู้ใช้งาน
 *
 * body User_login_body 
 * no response value expected for this operation
 **/
exports.loginUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Logs out current
 * Logout user
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Refresh User
 *
 * body User_refresh_body 
 * no response value expected for this operation
 **/
exports.userRefresh = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

