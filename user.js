import express from 'express';
import {createUser} from '../database.js';

app.use(express.json()); // Så vi kan læse req.body

app.post('/opretbruger', async (req, res) => {
  const { brugernavn, email, password, repeatpassword } = req.body;

  try {
    await createUser(brugernavn, email, password, repeatpassword);
    res.status(201).send('Bruger oprettet');
  } catch (err) {
    res.status(500).send('Fejl ved oprettelse');
  }
});

export default router;

