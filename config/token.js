import jwt from "jsonwebtoken";

// ✅ This doesn't need to be async (jwt.sign is synchronous)
const genToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    return token;
  } catch (error) {
    console.log(`Error during JWT token generation: ${error}`);
  }
};

export default genToken;
