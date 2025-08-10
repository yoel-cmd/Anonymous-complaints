import express from "express";
import { createComplaint, getAllcomplaint } from "../DB/connect.js";

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
router.post("/admin", async (req, res) => {
  try {
    const val = await getAllcomplaint();
    console.log(val);
    res.send(`<pre>${JSON.stringify(val, null, 2)}</pre>`);
  } catch (error) {}
});

router.post("/complaint", async (req, res) => {
  try {
    await createComplaint(req.body);
    res.send("insert complaint");
    console.log("insert complaint");
  } catch (error) {
    console.log(error);
  }
});
