const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("Authorization"); // Token is expected to be in the Authorization header

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret
    req.user = decoded; // Add the decoded user information to the request
    next(); // Call the next middleware or route handler
  } catch (err) {
    return res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = authenticate;

// const jwt = require("jsonwebtoken");

// const authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token
//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   try {
//     const decoded = jwt.verify(token, "your_secret_key"); // Replace "your_secret_key" with your actual secret
//     req.user = decoded; // Assuming the token contains user email
//     next();
//   } catch (err) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// module.exports = authenticate;
