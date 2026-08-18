// server.js
// Minimal Node.js (Express) server that serves the site's static files
// and catches every unmatched route with a custom 404 page (404.html + 404.css).

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const PUBLIC_DIR = path.join(__dirname, 'public');

// Serve all static files (html, css, js, images, etc.) as-is.
// e.g. /assets/css/404.css, /assets/js/404.js
app.use(express.static(PUBLIC_DIR));

// --- Add your real routes above this line ---
// app.get('/', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'index.html')));

// Catch-all 404 handler.
// Anything that didn't match a static file or a route above lands here.
app.use((req, res) => {
  res.status(404).sendFile(path.join(PUBLIC_DIR, '4040.html'), (err) => {
    if (err) {
      // Fallback in case 404.html itself can't be found/sent
      res.status(404).send('404 - Page Not Found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Try a bad URL, e.g. http://localhost:${PORT}/does-not-exist`);
});