const jwt = require("jsonwebtoken");

function setUser(id, user) {
  const payload = {
    id,
    ...user,
  };
  return jwt.sign(payload, "");
}

function getUser(id) {
  return sessionIdToUserMap.get(id);
}

module.exports = {
  setUser,
  getUser,
};
