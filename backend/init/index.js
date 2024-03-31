const  mongoose  = require("mongoose")
const initData = require("./data.js")
const Tours = require("../models/tours.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/toursplanning"
main()
.then(()=>{
    console.log("connected to DB")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

}

const initDB = async ()=>{
    await Tours.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj}))
    const getinitdata = await Tours.insertMany(initData.data)
    console.log("data was initialized")

    console.log(getinitdata)
    
}
initDB()