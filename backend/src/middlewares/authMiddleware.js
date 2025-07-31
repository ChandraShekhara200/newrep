import jwt from "jsonwebtoken";
import { config } from "../config.js";

export const loggedInUser = (req, res, next) => {
  try {
    const token = req.cookies["jwt"];
    if (!token) {
      console.error("No token found in cookies for logged in user");
      return res
        .status(401)
        .json({ status: "UNAUTHORIZED", message: "No token found" });
    }
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET);
      req.user = decoded; // Attach user info to request object
      next();
    } catch (error) {
      console.error("Error in verifying token", error.message);
      return res
        .status(403)
        .json({ status: "FORBIDDEN", message: "Invalid token" });
    }
  } catch (error) {
    console.error("Error in loggedInUser middleware", error.message);
    return res
      .status(500)
      .json({
        status: "INTERNAL_SERVER_ERROR",
        message: "Error in loggedInUser middleware",
      });
  }
};