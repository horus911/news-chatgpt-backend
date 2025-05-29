const cors = require('cors');

// Ajoute ceci avant les routes
app.use(cors({
  origin: 'https://horus911.github.io'
}));

