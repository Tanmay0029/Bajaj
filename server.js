import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ---------- helpers ----------

const isIntegerString = (val) => {
  if (typeof val === "number" && Number.isInteger(val)) return true;
  if (typeof val !== "string") val = String(val);
  return /^-?\d+$/.test(val.trim());
};

const isAlphabeticString = (val) => {
  if (typeof val !== "string") return false;
  return /^[a-zA-Z]+$/.test(val.trim());
};

const toString = (v) => (typeof v === "string" ? v : String(v));

const flattenLetters = (items) => {
  // Gather only alphabetic items, then split into characters
  const chars = [];
  for (const item of items) {
    const s = toString(item).trim();
    if (isAlphabeticString(s)) {
      for (const ch of s) chars.push(ch);
    }
  }
  return chars;
};

const alternatingCaps = (letters) => {
  // Reverse then alternate caps starting with UPPER
  const reversed = [...letters].reverse();
  return reversed
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
};

const env = {
  FULL_NAME: process.env.FULL_NAME || "tanmay_agrawal", 
  DOB_DDMMYYYY: process.env.DOB_DDMMYYYY || "29072004",
  EMAIL: process.env.EMAIL || "tanmay.agrawal2022@vitstudent.ac.in",
  ROLL_NUMBER: process.env.ROLL_NUMBER || "22BCE2680"
};

// ---------- routes ----------


app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body || {};

    if (!Array.isArray(data)) {
      return res.status(200).json({
        is_success: false,
        user_id: `${env.FULL_NAME}_${env.DOB_DDMMYYYY}`,
        email: env.EMAIL,
        roll_number: env.ROLL_NUMBER,
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
      });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];

    let sum = 0;

    for (const item of data) {
      const s = toString(item).trim();

      if (isIntegerString(s)) {
        // Keeping numbers as strings
        const n = parseInt(s, 10);
        if (Math.abs(n) % 2 === 0) {
          even_numbers.push(s);
        } else {
          odd_numbers.push(s);
        }
        sum += n;
      } else if (isAlphabeticString(s)) {
        alphabets.push(s.toUpperCase());
      } else {
        // Special characters include anything 
        if (s.length > 0) special_characters.push(s);
      }
    }

    const concat_string = alternatingCaps(flattenLetters(data));

    return res.status(200).json({
      is_success: true,
      user_id: `${env.FULL_NAME}_${env.DOB_DDMMYYYY}`,
      email: env.EMAIL,
      roll_number: env.ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string
    });

  } 
  
  catch (err) {
    // For error
    return res.status(200).json({
      is_success: false,
      user_id: `${env.FULL_NAME}_${env.DOB_DDMMYYYY}`,
      email: env.EMAIL,
      roll_number: env.ROLL_NUMBER,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: ""
    });
  }
});

// Checking health of the API
app.get("/", (_req, res) => {
  res.json({ status: "ok", route: "/bfhl", made_by: "tanmay agrawal" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`bfhl API listening on port ${PORT}`);
});
