const express = require('express');
const {
    register,
    login,
    logout,
    getMe,
    forgotPassword,
    resetPassword,
    updateDetails,
    updatePassword
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
    .post('/register', register)
    .post('/login', login)
    .get('/logout', logout)
    .get('/me', protect, getMe)
    .post('/forgotpassword', forgotPassword)
    .put('/resetpassword/:resettoken', resetPassword)
    .put('/updatedetails', protect, updateDetails)
    .put('/updatepassword', protect, updatePassword);

module.exports = router;