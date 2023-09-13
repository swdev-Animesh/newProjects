import mongoose from "mongoose";

const Connection = async (username, pass) => {
  const URL = `mongodb+srv://${username}:${pass}@mern-cluster.p7mh7ib.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log(`no Problem , everything runs fine ,database connected`);
  } catch (error) {
    console.log(`${error}: is problem , database not connected`);
  }
};

export default Connection;
