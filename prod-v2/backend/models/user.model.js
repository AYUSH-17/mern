const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventType: {
    type: String,
    required: true,
    trim: true,
  },
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  eventStartDate: {
    type: Date,
    required: true,
    trim: true,
  },
  eventEndDate: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  region: {
    type: Number,
    required: true,
    trim: true,
    minlength: 6,
  },
  eventCategory: {
    type: String,
    required: true,
    trim: true,
  },
});

const userSchema = new Schema(
  {
    userId: {
      type: Number,
      required: true,
      trim: true,
    },
    fName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    lName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    events: [eventSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

const deleteAllData = async () => {
  try {
    await User.deleteMany();
    console.log("All Data successfully deleted");
  } catch (err) {
    console.log(err);
  }
};

//  deleteAllData();

module.exports = User;
