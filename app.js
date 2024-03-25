// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const productRoutes = require('./routes/productRoutes');
// const attributeRoutes = require('./routes/attributeRoutes');
// const variantRoutes = require('./routes/variantRoutes');

// const app = express();

// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/product-variant-db');


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => console.log('Connected to MongoDB'));

// app.get('/', (req, res) => {
//     res.send('Welcome to the product variant management system.');
// }); 

// app.use('/products', productRoutes);
// app.use('/attributes', attributeRoutes);
// app.use('/variants', variantRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


// app.js



// app.js

// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const attributeRoutes = require('./routes/attributeRoutes');
const variantRoutes = require('./routes/variantRoutes');

const app = express();
const uri = "mongodb+srv://ANIKETH:2QogVdyueYPJrGUn@cluster0.zyaknmx.mongodb.net/?retryWrites=true&w=majority"; // MongoDB URI with password

app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        
        // Define routes and middleware that depend on the database connection
        app.get('/', (req, res) => {
            res.send('Welcome to the product variant management system.');
        });

        app.use('/products', productRoutes);
        app.use('/attributes', attributeRoutes);
        app.use('/variants', variantRoutes);

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if unable to connect to the database
    });
