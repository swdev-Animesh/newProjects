import User from "../model/user.js";

const signupUser = async (request, response) => {
  try {
    const userData = request.body;
    const newUser = new User(userData);
    await newUser.save();
    return response.status(200).json({ msg: "Signup done" });
  } catch (error) {
    if (response.status == "failed") {
      return response.status(failed).json({ msg: "there is some error" });
    } else return response.status(500).json({ msg: "there is some error" });
  }
};
