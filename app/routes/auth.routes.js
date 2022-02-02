module.exports = (app) => {
const Auth =require('../controllers/user.controller.js');
const upload  =require('../utils/multer');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../utils/validators');

const uploadDocs =[{name:'licence_doc',maxCount:1},{name:'profile_picture',maxCount:1}]
app.post('/api/user/signup',upload.fields(uploadDocs), validateSignupRequest, isRequestValidated,Auth.signup);

app.post('/api/user/signin',validateSigninRequest, isRequestValidated, Auth.signin);
}