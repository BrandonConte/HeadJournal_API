// Require express router
const router = require('express').Router();
// Import all the api routes
const apiRoutes = require('./api');
// prefix of '/api' to all of the api routes
router.use('./api', apiRoutes);

// 404 error status message
router.use((req, res) => {
    res.status(404).send('<h1> 404 ERROR!</h1>');
});
// Module export router
module.exports = router;
