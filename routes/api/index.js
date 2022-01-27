// Set requirements for express router
const router = require('express').Router();

// Sets routes
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');
// Adds /users to created routes
router.use('/users', usersRoutes);
// Adds /thoughts to created routes
router.use('/thoughts', thoughtsRoutes);

// Export module router
module.exports = router;