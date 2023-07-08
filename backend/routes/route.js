const express=require('express');
const router=express.Router();

const {studentSignUp,studentLogIn,creatorSignUp,creatorLogIn,modulatorSignUp,modulatorLogIn} = require('../controllers/Auth');
const {auth,isStudent,isCreator} = require('../middlewares/auth');
const {createScholarship}=require('../controllers/Scholarship');
const {createVideo}=require('../controllers/Video');

router.post("/student/signup",studentSignUp);
router.post('/student/login',studentLogIn);
router.post("/creator/signup",creatorSignUp);
router.post('/creator/login',creatorLogIn);
router.post("/modulator/signup",modulatorSignUp);
router.post('/modulator/login',modulatorLogIn);
router.post('/scholarship/create',createScholarship);
router.post('/creater/video/create',createVideo);




module.exports=router;