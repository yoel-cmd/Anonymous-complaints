import express from "express";

export const router = express.Router();

export function CheckPassword(req, res, next) {
  try {
    console.log(req.body);
    if (req.body.password !== process.env.PASSWORD)
      return res.status(400).json({ error: "password error" });
    else {
      next();
    }
  } catch (error) {
    return res.status(426).json({ error: "problem" });
  }
}

router.post("/admin", (req, res) => {
  console.log(req.body);
  res.send("hi from admin");
});

router.post("/complaint", (req, res) => {
  console.log(req.body);
  console.log("hi from complaint");
  res.send("hi from complaint");
});
