const express = require('express');
const router = express.Router();

const {
  studentSignUp,
  studentLogIn,
  creatorSignUp,
  creatorLogIn,
  modulatorSignUp,
  modulatorLogIn,
} = require('../controllers/Auth');
const { auth, isStudent, isCreator } = require('../middlewares/auth');
const { createScholarship } = require('../controllers/Scholarship');
const { createVideo, searchVideo } = require('../controllers/Video');

router.post('/student/signup', studentSignUp);
router.post('/student/login', studentLogIn);
router.post('/creator/signup', creatorSignUp);
router.post('/creator/login', creatorLogIn);
router.post('/modulator/signup', modulatorSignUp);
router.post('/modulator/login', modulatorLogIn);
router.post('/scholarship/create', createScholarship);
router.post('/creater/video/create', createVideo);
router.get('/videos/search', searchVideo);
const {studentSignUp,studentLogIn,creatorSignUp,creatorLogIn,modulatorSignUp,modulatorLogIn,
        getStudent,getCreator} = require('../controllers/Auth');
const {auth,isStudent,isCreator} = require('../middlewares/auth');
const {createScholarship,getScholarship}=require('../controllers/Scholarship');
const {createVideo,getRecommendations,getVideosForSub}=require('../controllers/Video');
const {createRating}=require('../controllers/Rating');

router.post("/student/signup",studentSignUp);
router.post('/student/login',studentLogIn);
router.post("/creator/signup",creatorSignUp);
router.post('/creator/login',creatorLogIn);
router.post("/modulator/signup",modulatorSignUp);
router.post('/modulator/login',modulatorLogIn);
router.post('/scholarship/create',createScholarship);
router.post('/creater/create/video',auth,isCreator,createVideo);
router.post('/student/video/rating/create',auth,isStudent,createRating);

router.get('/student/get',auth,isStudent,getStudent);
router.get('/creator/get',auth,isCreator,getCreator);
router.get('/student/recommendations',auth,isStudent,getRecommendations);
router.get('/student/scholarship',auth,isStudent,getScholarship);
router.get('/student/vidoes/subject',auth,isStudent,getVideosForSub);

module.exports = router;
