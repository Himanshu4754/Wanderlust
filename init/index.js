const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://himanshugurjar1306:GZlaOnOylYEOF3ds@cluster0.3ytsj21.mongodb.net/";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL); 
} 

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6892154a2894c22139123422" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
