const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'Hello World!'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
