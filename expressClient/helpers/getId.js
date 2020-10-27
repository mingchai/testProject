const axios = require("axios");

module.exports = {
  fetchId: async function fetchId() {
    try {
      const response = await axios.get("http://localhost:9000/id");

      return response.data.id;
    } catch (error) {
      return error;
    }
  }
};
