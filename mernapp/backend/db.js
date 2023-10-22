const mongoose = require('mongoose');
const mongoURI="mongodb+srv://dharyajasuja2003:1234567890@cluster0.yv4dw2i.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// const mongoDB=()=>{

//     // mongoose.connect(mongoURI,()=>{
//     //     console.log("connected");
//     // });
//     main().catch(err => console.log(err));

//     async function main() {
//     await mongoose.connect(mongoURI);

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
// }
const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
    //   console.log(data);
    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports=mongoDB;