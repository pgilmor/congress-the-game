module.exports = app => {
  app.all("/update/members", (req, res) => {
    require("../update/members");
    require("../update/socials");
    res.send("Members Updated!");
  });
  app.all("/update/committees", (req, res) => {
    require("../update/committees");
    require("../update/committeeMembers");
    res.send("Committees Updated!");
  });
  app.all("/update/periods", (req, res) => {
    require("../update/periods");
    res.send("Periods Updated!");
  });
};
