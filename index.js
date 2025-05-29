const cors = require('cors');

// Ajoute ceci avant les routes
app.use(cors({
  origin: 'https://horus911.github.io'
}));

git add index.js
git commit -m "Fix CORS for GitHub Pages"
git push
