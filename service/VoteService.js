'use strict';


/**
 *
 * body Vote 
 * no response value expected for this operation
 **/
exports.addVote = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete vote
 *
 * vote_id String 
 * returns inline_response_200_7
 **/
exports.deleteVoteById = function(vote_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "img" : {
      "img_url" : "img_url",
      "id" : 6,
      "create_at" : "create_at"
    },
    "id" : 0,
    "create_at" : "2000-01-23T04:56:07.000+00:00",
    "user" : {
      "birth_day" : "birth_day",
      "password" : "password",
      "img_url" : "img_url",
      "phone" : "phone",
      "created_at" : "created_at",
      "id" : 6,
      "email" : "email",
      "username" : "username"
    }
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
 * returns inline_response_200_4
 **/
exports.getVoteAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "img" : {
      "img_url" : "img_url",
      "id" : 6,
      "create_at" : "create_at"
    },
    "id" : 0,
    "create_at" : "2000-01-23T04:56:07.000+00:00",
    "user" : {
      "birth_day" : "birth_day",
      "password" : "password",
      "img_url" : "img_url",
      "phone" : "phone",
      "created_at" : "created_at",
      "id" : 6,
      "email" : "email",
      "username" : "username"
    }
  }, {
    "img" : {
      "img_url" : "img_url",
      "id" : 6,
      "create_at" : "create_at"
    },
    "id" : 0,
    "create_at" : "2000-01-23T04:56:07.000+00:00",
    "user" : {
      "birth_day" : "birth_day",
      "password" : "password",
      "img_url" : "img_url",
      "phone" : "phone",
      "created_at" : "created_at",
      "id" : 6,
      "email" : "email",
      "username" : "username"
    }
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
 * vote_id String 
 * returns inline_response_200_5
 **/
exports.getVoteById = function(vote_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "img" : {
      "img_url" : "img_url",
      "id" : 6,
      "create_at" : "create_at"
    },
    "id" : 0,
    "create_at" : "2000-01-23T04:56:07.000+00:00",
    "user" : {
      "birth_day" : "birth_day",
      "password" : "password",
      "img_url" : "img_url",
      "phone" : "phone",
      "created_at" : "created_at",
      "id" : 6,
      "email" : "email",
      "username" : "username"
    }
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
 * Update a vote
 *
 * body Vote_vote_id_body 
 * vote_id String 
 * returns inline_response_200_6
 **/
exports.updateVoteById = function(body,vote_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "img" : {
      "img_url" : "img_url",
      "id" : 6,
      "create_at" : "create_at"
    },
    "id" : 0,
    "create_at" : "2000-01-23T04:56:07.000+00:00",
    "user" : {
      "birth_day" : "birth_day",
      "password" : "password",
      "img_url" : "img_url",
      "phone" : "phone",
      "created_at" : "created_at",
      "id" : 6,
      "email" : "email",
      "username" : "username"
    }
  }, {
    "img" : {
      "img_url" : "img_url",
      "id" : 6,
      "create_at" : "create_at"
    },
    "id" : 0,
    "create_at" : "2000-01-23T04:56:07.000+00:00",
    "user" : {
      "birth_day" : "birth_day",
      "password" : "password",
      "img_url" : "img_url",
      "phone" : "phone",
      "created_at" : "created_at",
      "id" : 6,
      "email" : "email",
      "username" : "username"
    }
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

