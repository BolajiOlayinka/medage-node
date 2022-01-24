const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
}); 
// exports.uploads = (file,folder)=>{
//   return new Promise(resolve=>{
//     cloudinary.uploader.upload(file,(result)=>{
//       resolve({
//         url:result.url,
//         id:result.public_id
//       })
//     },{
//       resource_type:"auto",
//       folder:media
//     })
//   })
// }
module.exports = cloudinary;
// const cloudinary = require('cloudinary');
// const {CloudinaryStorage} = require("multer-storage-cloudinary");
// const multer = require('multer');
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
//     });
//     const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: 'product',
//       allowedFormats: ['jpg','png'],
//       transformation: [{ width: 500, height: 500, crop: "limit" }]
//     },
    
//     });
//     const parser = multer({ storage });
//     module.exports=parser