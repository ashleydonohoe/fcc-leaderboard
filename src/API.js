var axios = require("axios");

module.exports = {
  fetchTop100For30Days: function() {
    const url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    return axios.get(url).then(function(response) {
      return response.data;
    });
  },
  fetchTop100ForAllTime: function() {
    const url = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    return axios.get(url).then(function(response) {
      return response.data;
    });
  }
}
