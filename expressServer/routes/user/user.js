const express = require("express");
const router = express.Router();
const { name, internet, finance, lorem } = require("faker");

const tones = ["humorous", "ironic", "cynical"];

router.get("/", (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      name: name.findName(),
      email: internet.email(),
      account: finance.account(),
      biography: lorem.paragraph(),
      tone: tones[Math.floor(Math.random(0, 1) * tones.length)],
    });
  }, 295);
});

router.post("/", (req, res) => {
  let passFailStatus = Math.random(0, 1);

  if (passFailStatus >= 0.5) {
    res.json({
      status: "SUCCESS",
      message: "New entry saved to database.",
    });
  } else {
    res.json({
      status: "FAIL",
      message: "Something went wrong. Please try again.",
    });
  }
});

module.exports = router;
