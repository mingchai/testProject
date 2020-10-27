const axios = require("axios");

module.exports = {
  getUserReq: async function getDetails() {
    try {
      const response = await axios.get("http://localhost:9000/user");
      const info = response.data;

      let details = {};

      for (let detail in info) {
        details[detail] = info[detail];
      }

      return details;
    } catch (err) {
      return err;
    }
  },

  postUserReq: async function postDetails() {
    try {
      const postReq = await axios.post("http://localhost:9000/user");

      return postReq.data;
    } catch (error) {
      return error;
    }
  },
};
