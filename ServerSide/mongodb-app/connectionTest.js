//serves to test the db connection by returning existing collections

const connectDB = require("./db");

(async () => {
  const db = await connectDB();

  try {
    // Fetch all users from the "users" collection
    const usersCollection = db.collection("users");
    const users = await usersCollection.find().toArray();  // Fetch all users

    // Fetch all blogs from the "blogs" collection
    const blogsCollection = db.collection("blogs");
    const blogs = await blogsCollection.find().toArray();  // Fetch all blogs

    // Log the results
    console.log("Users:", users);
    console.log("Blogs:", blogs);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // Close the connection
    process.exit(0);
  }
})();
