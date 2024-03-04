'use strict';
const mongoose = require('mongoose');
var schema = new mongoose.Schema({}, { strict: false });

const { getCollection } = require('../utils/helpers');
const { log } = require('console');


const bcrypt = require('bcrypt');

const genPass = async (pass) => {
  const saltR = 10;
  const salt = await bcrypt.genSalt(saltR);
  const passH = await bcrypt.hash(pass, salt);
  return passH;
};

async function comparePasswords(password, hashedPassword) {
  try {
    // Compare the provided password with the hashed password
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    // Handle error
    console.error('Error comparing passwords:', error);
    return false;
  }
}
/**
 * Sign up Member
 *
 * body User 
 * no response value expected for this operation
 **/
exports.addUser = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      var User = getCollection('user');
      if ((await User.find({ email: body.email })).length > 0) {
        //throw({id: 406, message:"user exist"})
        reject({ code: 406, message: 'user exist' });
        return;
      } else {
        body.created_at = Date.now();
        body.password = await genPass(body.password);

      }

      var User = new User(body);
      User.save();

      resolve({ code: 200, message: 'created user successfully' });
    } catch (error) {
      reject({ code: 404, message: error.message });
    }
  });
}


/**
 * ลบสมาชิก
 *
 * id String user Id
 * no response value expected for this operation
 **/
exports.deleteUserById = function (id) {
  return new Promise(async function (resolve, reject) {
    try {
      var User = getCollection('user');
      const data = await User.findOne({ _id: id });
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
 * ดูสมาชิกทั้งหมด
 *
 * returns inline_response_200
 **/
exports.getAllUser = function () {
  return new Promise(async function (resolve, reject) {
    var User = getCollection('user');
    var data = [];
    await User.find().sort({ created: -1 }).then(async (res) => {
      for await (let item of res) {
        const { password, ...rest } = item._doc;
        data.push(rest);
      };
    })

    if (!data.empty) {
      resolve({ code: 200, data: data });
    } else {
      reject({ code: 404, message: 'no user found' });
    }
  });
}


/**
 * ดูสมาชิก
 *
 * id String user Id
 * returns inline_response_200_1
 **/
exports.getUserById = function (id) {
  return new Promise(async function (resolve, reject) {
    try {
      var User = getCollection('user');
      var data = await User.findOne({ _id: id });
      console.log(data);
      if (!data.empty) {
        resolve({ code: 200, data: data });
      } else {
        reject({ code: 400, message: "No user found" });

      }
    } catch (err) {
      reject({ code: 400, message: err.message })
    }
  });
}


/**
 *
 * body User 
 * id String user ID
 * no response value expected for this operation
 **/
exports.updateUser = function (body, id) {
  return new Promise(async function (resolve, reject) {
    try {
      var User = getCollection('user');
      var previousPassword = body.previous_password;
      var data = await User.findOneAndUpdate({ _id: id }, { $set: body });
      console.log(data);
      resolve({ code: 200, message: "Successful operation" });
    } catch (err) {
      reject({ code: 400, message: err.message });
    }
  });
}

exports.updateUserPassword = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      var User = getCollection('user');
      var previousPassword = body.previous_password;

      console.log(body.email);

      var user = await User.findOne({ email: body.email });

      const filter = { email: body.email };
      const updateDocument = {
        $set: { password: await genPass(body.password) } // Update the password field with the new password
      };
      console.log(body.password);
      if (!user.empty) {
        const match = await comparePasswords(previousPassword, user.password);
        if (match) {
          console.log(user.password);

          const result = await User.updateOne(filter, updateDocument);;
          console.log(`${result.modifiedCount} document(s) updated`);
          console.log('Password updated successfully');
          resolve({ code: 200, message: "Successful operation" });
        } else {
          reject({ code: 400, message: "Password not match" })
        }
      } else {
        reject({ code: 400, message: "not found user" })
      }


    } catch (err) {
      reject({ code: 400, message: err.message });
    }
  });
}

