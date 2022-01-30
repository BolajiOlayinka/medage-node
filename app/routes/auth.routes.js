// const express = require('express');
// const { signup, signin } = require('../controller/auth');
// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
// const router = express.Router();


// router.post('/signup',validateSignupRequest, isRequestValidated, signup);
// router.post('/signin',validateSigninRequest, isRequestValidated, signin);

// router.post('/signup',signup);
// router.post('/signin',signin);
// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

// module.exports = router;
module.exports = (app) => {
const Auth =require('../controllers/user.controller.js');
const upload  =require('../utils/multer')

const uploadDocs =[{name:'profile.licence_doc',maxCount:1},{name:'profile.profile_picture',maxCount:1}]
app.post('/user/signup',upload.fields(uploadDocs), Auth.signup);

app.post('/user/signin', Auth.signin);
}