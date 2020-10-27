const express = require("express");
const router = express.Router();
const { fetchId } = require("../helpers/getId");
const { getUserReq, postUserReq } = require("../helpers/getUserInfo");
const { log } = console;

router.get("/", (req, res) => {
  try {
    async function fetchPageInfo() {
      const fetchedId = await fetchId();
      log(`Fetched ID was: ${fetchedId}`);

      const fetchedUserDetails = await getUserReq();
      log(`Fetched user info was: 
        \n name: ${fetchedUserDetails.name},
        \n email: ${fetchedUserDetails.email},
        \n account: ${fetchedUserDetails.account},
        \n tone: ${fetchedUserDetails.tone} \n`);

      const postAttempt = await postUserReq();
      log(`Attempt to POST to /user was ${postAttempt.status} \n`);

      res.render("./index", {
        uuid: fetchedId,
        userDetails: fetchedUserDetails,
        postStatus: postAttempt.status,
      });
    }

    fetchPageInfo();
  } catch (err) {
    res.render("./index", { error: err });
  }
});

module.exports = router;
