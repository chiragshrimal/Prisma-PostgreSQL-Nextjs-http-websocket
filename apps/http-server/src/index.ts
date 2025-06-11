import express from "express";
import { client } from "@repo/db/client";

const app = express();

// ✅ Add this to parse JSON request bodies
app.use(express.json());

console.log("hello");

app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json({
    message: "Signup successfully",
    id: user.id,
  });
});

app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});
