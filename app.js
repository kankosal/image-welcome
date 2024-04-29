const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const TITLE = process.env.TITLE || "Welcome to My App";
  const DESCRIPTION = process.env.DESCRIPTION || "This is a simple welcome page for demonstration purposes.";
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Replace placeholders in HTML with the actual title and description
    const htmlResponse = data.replace('{{TITLE}}', TITLE).replace('{{DESCRIPTION}}', DESCRIPTION);
    res.send(htmlResponse);
  });
});

app.get('/contact-us', (req, res) => {
  const TITLE = "Contact";
  const DESCRIPTION = "This is a simple welcome page for demonstration purposes.";
  const filePath = path.join(__dirname, 'contact.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Replace placeholders in HTML with the actual title and description
    const htmlResponse = data.replace('{{TITLE}}', TITLE).replace('{{DESCRIPTION}}', DESCRIPTION);
    res.send(htmlResponse);
  });
});

app.get('/about', (req, res) => {
  const TITLE = "About";
  const DESCRIPTION = "This is a simple welcome page for demonstration purposes.";
  const filePath = path.join(__dirname, 'about.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Replace placeholders in HTML with the actual title and description
    const htmlResponse = data.replace('{{TITLE}}', TITLE).replace('{{DESCRIPTION}}', DESCRIPTION);
    res.send(htmlResponse);
  });
});

app.listen(PORT, () => {
  console.log(`Now pull latest version`);
  console.log(`Server is running on port ${PORT}`);
});
