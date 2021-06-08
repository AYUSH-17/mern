const mongoose = require("mongoose");

const Schema =  mongoose.Schema;

const PostOfficeSchema = new Schema({
  Name: String,
  Description: String,
  BranchType: String,
  DeliveryStatus: String,
  Taluk: String,
  Circle: String,
  District: String,
  Division: String,
  Region: String,
  State: String,
  Country: String
});

const regionSchema = new Schema({
  id: Number,
  message: String,
  status: String,
  postOffice: [PostOfficeSchema]
});



const Region = mongoose.model("Region", regionSchema);

const deleteAllData = async () => {
  try {
    await Region.deleteMany();
    console.log('All Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
};

 //deleteAllData();

module.exports = Region;
