import User from "../model/user.js";

const signupUser = async (request, response) => {
  try {
    const userData = request.body;
    const newUser = new User(userData);
    await newUser.save();
    return response.status(200).json({ msg: "Signup done" });
  } catch (error) {
    return response.status(400).json({ msg: "there is some error" });
  }
};
