module.exports = app => {
  app.all("/update/members", (req, res) => {
    require("../update/members");
    require("../update/socials");
    res.send("Members Updated!");
  });
};
