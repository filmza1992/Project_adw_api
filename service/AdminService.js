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
 * Sign up Admin
 *
 * body Admin 
 * no response value expected for this operation
 **/
exports.addAdmin = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      var Admin = getCollection('admin');
      if ((await Admin.find({ email: body.email })).length > 0) {
        //throw({id: 406, message:"user exist"})
        reject({ code: 406, message: 'user exist' });
        return;
      } else {
        body.created_at = Date.now();
        body.password = await genPass(body.password);
      }

      var Admin = new Admin(body);
      Admin.save();
      resolve({ code: 200, message: 'created admin successfully', data: Admin });
    } catch (err) {
      reject({ code: 404, message: error.message });
    }
  });
}


/**
 * ลบสมาชิก
 *
 * id String admin Id
 * no response value expected for this operation
 **/
exports.deleteAdminById = function (id) {
  return new Promise(async function (resolve, reject) {
    try {
      var Admin = getCollection('Admin');
      const data = await Admin.findOne({ _id: id });
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
 * returns inline_response_200_2
 **/
exports.getAllAdmin = function () {
  return new Promise(async function (resolve, reject) {
    var Admin = getCollection('admin');
    var data = [];
    await Admin.find().sort({ created: -1 }).then(async (res) => {
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

exports.getAdminByEmail = function (email) {
  return new Promise(async function (resolve, reject) {
    try {
      console.log(email);
      var Admin = getCollection('admin');
      var data = await Admin.findOne({ email: email });
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


exports.getAdminById = function (id) {
  return new Promise(async function (resolve, reject) {
    try {
      var Admin = getCollection('admin');
      var data = await Admin.findOne({ _id: id });
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
 * body Admin 
 * id String admin ID
 * no response value expected for this operation
 **/
exports.updateAdmin = function (body, id) {
  return new Promise(async function (resolve, reject) {
    try {
      var Admin = getCollection('admin');
      var previousPassword = body.previous_password;
      var data = await Admin.findOneAndUpdate({ _id: id }, { $set: body });
      console.log(data);
      resolve({ code: 200, message: "Successful operation" });
    } catch (err) {
      reject({ code: 400, message: err.message });
    }
  });
}

exports.updateAdminPassword = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      var Admin = getCollection('admin');
      var previousPassword = body.previous_password;

      console.log(body.email);

      var admin = await Admin.findOne({ email: body.email });

      const filter = { email: body.email };
      const updateDocument = {
        $set: { password: await genPass(body.password) } // Update the password field with the new password
      };
      console.log(body.password);
      if (!admin.empty) {
        const match = await comparePasswords(previousPassword, admin.password);
        if (match) {
          console.log(admin.password);

          const result = await Admin.updateOne(filter, updateDocument);;
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

