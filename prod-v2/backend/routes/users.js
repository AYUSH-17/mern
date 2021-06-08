const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  // let newUser = new User();
  const events = req.body.events;
  res.json(events);
  events.map((details) => {
    newUser = new User({
      userId: req.body.userId,
      fName: req.body.fName,
      lName: req.body.lName,
      username: req.body.username,
       events: [
      {
        eventType: details.eventType,
        eventName: details.eventName,
        eventStartDate: details.eventStartDate,
        eventEndDate: details.eventEndDate,
        country: details.country,
        state: details.state,
        region: details.region,
        eventCategory: details.eventCategory, 
      },
    ],
         
    });
  });

  console.log(newUser);

  // newUser.save()
  //   .then(() => res.json('User added!'))
  //   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;