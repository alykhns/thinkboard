import { createNote, getAllNotes } from '../controllers/notesController.js';
import { connectDB } from '../src/config/db.js';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://rfnotesfin.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  await connectDB();
  if (req.method === 'GET') {
    await getAllNotes(req, res);
  } else if (req.method === 'POST') {
    await createNote(req, res);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}