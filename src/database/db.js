import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const dbConnection = () => {
    console.log("Trying connect to db...");
    mongoose.connect(
        process.env.DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log("MongoDB Atlas connected!"))
        .catch((error) => console.log(error));
};

export default dbConnection;
