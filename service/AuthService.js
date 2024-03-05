'use strict';

const { getCollection } = require('../utils/helpers');

const bcrypt = require('bcrypt');

async function comparePasswords(password, hashedPassword) {
  try {
    // Compare the provided password with the hashed password
    const match = await bcrypt.compare(password, hashedPassword);
    console.log({ password: password, hashedPassword: hashedPassword });
    return match;
  } catch (error) {
    // Handle error
    console.error('Error comparing passwords:', error);
    return false;
  }
}
/**
 * Logs in current
 * การเข้าสู่ระบบของผู้ใช้งาน
 *
 * body User_login_body 
 * no response value expected for this operation
 **/
exports.loginUser = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      var User = getCollection('user');
      const user = await User.findOne({ email: body.email });
      console.log(user);
      if (user) {
        const isMatch = await comparePasswords(body.password, user.password);
        if (isMatch) {
          resolve({ code: 200, message: "Successfuly_Login" });
        } else {
          reject({ code: 400, message: "Not Successful Login User,password is not match" })
        }
      } else {
        var Admin = getCollection('admin');
        const admin = await Admin.findOne({ email: body.email });
        console.log(admin);
        if (admin) {
          const isMatch = await comparePasswords(body.password, admin.password);
          if (isMatch) {
            resolve({ code: 200, message: "Successfuly_Login_Admin" });
          } else {
            reject({ code: 400, message: "Not Successful Login Admin,password is not match" })
          }
        } else {
          reject({ status: 401, message: 'unauthorize' })
        }
      }
    } catch (err) {
      reject({ code: 400, message: err.message })
    }
    resolve();
  });
}

