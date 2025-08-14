import { getNoteById, updateNote, deleteNote } from '../../controllers/notesController.js';
import { connectDB } from '../../src/config/db.js';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://rfnotesfin.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  await connectDB();
  const { id } = req.query;
  if (req.method === 'GET') {
    req.params = { id };
    await getNoteById(req, res);
  } else if (req.method === 'PUT') {
    req.params = { id };
    await updateNote(req, res);
  } else if (req.method === 'DELETE') {
    req.params = { id };
    await deleteNote(req, res);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
