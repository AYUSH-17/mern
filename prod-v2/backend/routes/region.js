const router = require("express").Router();
let Region = require("../models/region.model");

router.route("/277201").get((req, res) => {
  Region.find()
    .then((region) => res.json(region))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  let newData = new Region();
  const postOffice = req.body.postOffice;
  console.log(postOffice);
  postOffice.map((details) => {
    console.log(details.Name);
    newData = new Region({
      id: req.body.id,
      message: req.body.message,
      status: req.body.status,
      postOffice: [
        {
          Name: details.Name,
          Description: details.Description,
          BranchType: details.BranchType,
          DeliveryStatus: details.DeliveryStatus,
          Taluk: details.Taluk,
          Circle: details.Circle,
          District: details.District,
          Division: details.Division,
          Region: details.Region,
          State: details.State,
          Country: details.Country,
        },
      ],
    });
  });

  newData
    .save()
    .then(() => res.json("Region added!" + newData))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
