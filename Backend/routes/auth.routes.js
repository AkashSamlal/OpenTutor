const express = require("express"); 
const router = express.Router(); 
//Import controller of signup 
const {signup, signin, requestPassword, authenticateToken, resetPassword, activateAccount, courseSetup, getUserInfo, 
    modifyBioBox, changePassword , profileDirect, modifyCourses } = require("../controllers/auth.controller");

//API Endpoint for localhost:5000/signup directed to the signup method
router.post('/signup', signup); 
router.post('/signin', signin); 
router.post('/request-password', requestPassword); 
router.post('/reset-password', resetPassword); 
router.post('/email-activate', activateAccount); 
router.post('/addcourse', authenticateToken, courseSetup);
router.get('/userinfo', authenticateToken, getUserInfo);
router.get('/profile', authenticateToken, profileDirect);
router.post('/bioBox', authenticateToken, modifyBioBox);
router.post('/changePassword', authenticateToken, changePassword);
router.post('/modifyCourses', authenticateToken, modifyCourses); 
//Export features for other to transfer
module.exports = router; 