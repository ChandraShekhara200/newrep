import { User } from "../models/user/user.model.js";

export const getUserProfile = async (req, res) => {
  try {
    console.log(req.user);

    const userData = await User.findById(req.user.id);

    return res.status(200).json(userData);
  } catch (error) {
    console.error("Error in getting user profile", error.message);
    return res
      .status(500)
      .json({
        status: "INTERNAL_SERVER_ERROR",
        message: "Error in getting user profile",
      });
  }
};