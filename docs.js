module.exports=(app,port)=>{
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Medage Api",
        description: "Medage Api for both Users, Products and Admin",
        contact: {
          name: "Bolaji Olayinka"
        },
        servers: `${port}`
      }
    },
    // ['.routes/*.js']
    apis: ["docs.js"]
    
  };

/**
 * @swagger
 * /api/admin/signup:
 *   post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: Admin
 *        in: body
 *        description: Admin Signup
 *        required: false
 *        schema:
 *          type: string
 *          format: object
 *          properties: 
 *            email: 
 *             type: string
 *             required: true
 *            password: 
 *             type: string
 *             required: true
 *            business_name: 
 *             type: string
 *             required: true
 *            user_type: 
 *             type: string
 *             required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request              
*/
/**
 * @swagger
 * /api/admin/signin:
 *   post:
 *    description: Use to signin as an admin
 *    parameters:
 *      - name: Admin
 *        in: body
 *        description: Admin Signin
 *        required: false
 *        schema:
 *          type: object
 *          properties: 
 *            email: 
 *             type: string
 *             required: true
 *            password: 
 *             type: string
 *             required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request              
*/
  
/**
 * @swagger
 * /api/user/signup:
 *  post:
 *    description: Use to signup as a user
 *    parameters:
 *      - name: User
 *        in: body
 *        description: User Signup
 *        required: false
 *        schema:
 *          format: object
 *          properties: 
 *            email: 
 *             type: string
 *             required: true
 *            password: 
 *             type: string
 *             required: true
 *            business_name: 
 *             type: string
 *             required: true
 *            user_type: 
 *             type: string
 *             required: true
 *            profile_picture:
 *             type: string
 *             required: false
 *            contact_number:
 *             type: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/product:
 *  post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: Product
 *        in: body
 *        description: Create Product
 *        required: true
 *        schema:
 *          format: object
 *          properties: 
 *            title: 
 *             type: string
 *             required: true
 *            display_title: 
 *             type: string
 *             required: true
 *            quantity_available: 
 *             type: string
 *             required: true
 *            price: 
 *             type: string
 *             required: true
 *            nafdac_reg:
 *             type: string
 *             required: false
 *            product_category:
 *             type: string
 *            product_sub_category:
 *             type: string
 *            product_user:
 *             type: string
 *            thumbnail_one: 
 *             type: string
 *            thumbnail_two:
 *             type: string
 *            thumbnail_three:
 *             type: string
 *            product_measurement: 
 *             type: string
 *            description:
 *             type: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/product:
 *  get:
 *    description: Use to get all products
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/product/{id}:
 *  get:
 *    description: Use get a product by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of product to retrieve
 *        required: true
 *        schema:
 *          type: string
 *          format: string      
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/product/{id}:
 *  put:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Numeric ID of product to edit
 *        required: false
 *      - name: body
 *        in: body
 *        schema:
 *          type: string
 *          format: object
 *          properties:
 *            title: 
 *             type: string
 *             required: true
 *            display_title: 
 *             type: string
 *             required: true
 *            quantity_available: 
 *             type: string
 *             required: true
 *            price: 
 *             type: string
 *             required: true
 *            nafdac_reg:
 *             type: string
 *             required: false
 *            product_category:
 *             type: string
 *            product_sub_category:
 *             type: string
 *            product_user:
 *             type: string
 *            thumbnail_one: 
 *             type: string
 *            thumbnail_two:
 *             type: string
 *            thumbnail_three:
 *             type: string
 *            product_measurement: 
 *             type: string
 *            description:
 *             type: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */
/**
 * @swagger
 * /api/product/{id}:
 *  delete:
 *    description: ID of the product
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Delete Product
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/category:
 *  post:
 *    description: Create New Category
 *    parameters:
 *      - name: Category
 *        in: body
 *        description: Create New Category
 *        required: false
 *        schema:
 *          format: object
 *          properties: 
 *            name: 
 *             type: string
 *             required: true
 *            display_name: 
 *             type: string
 *             required: true
 *            description: 
 *             type: string
 *             required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/category:
 *  get:
 *    description: get all Categories
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/category/{id}:
 *  get:
 *    description: Use to get Category by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of categories to return
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/category/{id}:
 *  put:
 *    description: Edit Category by its ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the Category
 *        required: true
 *      - name: body
 *        in: body
 *        schema:
 *          type: object
 *          format: object
 *          properties:
 *            name: 
 *             type: string
 *             required: true
 *            display_name: 
 *             type: string
 *             required: true
 *            description: 
 *             type: string
 *             required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */
/**
 * @swagger
 * /api/category/{id}:
 *  delete:
 *    description: Delete Category by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the category you want to delete
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */
/**
 * @swagger
 * /api/measurement:
 *  post:
 *    description: Create 
 *    parameters:
 *      - name: customer
 *        in: body
 *        description: Create a new measurement
 *        required: true
 *        schema:
 *          format: object
 *          properties: 
 *            display_cat: 
 *             type: string
 *             required: true
 *            name: 
 *             type: string
 *             required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/measurement:
 *  get:
 *    description: get all Measurements
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/measurement/{id}:
  *  get:
 *    description: Use to get Measurement by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of categories to return
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/measurement/{id}:
 *  put:
 *    description: Edit Measurement by its ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the Measurement
 *        required: true
 *      - name: body
 *        in: body
 *        schema:
 *          type: object
 *          format: object
 *          properties:
 *            display_cat: 
 *             type: string
 *             required: true
 *            name: 
 *             type: string
 *             required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */
/**
 * @swagger
 * /api/measurement/{id}:
 *  delete:
 *    description: Delete Measurement by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the measurement you want to delete
 *        required: false
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */
/**
 * @swagger
 * /api/sub_categories:
 *  post:
 *    description: Create New Sub Category
 *    parameters:
 *      - name: Category
 *        in: body
 *        description: Create Sub Category
 *        required: false
 *        schema:
 *          format: object
 *          properties: 
 *            name: 
 *             type: string
 *             required: true
 *            display_name: 
 *             type: string
 *             required: true
 *            category_group: 
 *             type: string
 *             required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/sub_categories:
 *  get:
 *    description: get all Sub Categories
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/sub_categories/{id}:
 *  get:
 *    description: Use to get Sub Category by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of Sub categories to return
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */

/**
 * @swagger
 * /api/sub_categories/{id}:
 *  put:
 *    description: Edit Sub Category by its ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the Sub Category
 *        required: true
 *      - name: body
 *        in: body
 *        schema:
 *          type: object
 *          format: object
 *          properties:
 *            name: 
 *             type: string
 *             required: true
 *            display_name: 
 *             type: string
 *             required: true
 *            category_group: 
 *             type: string
 *             required: true
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */
/**
 * @swagger
 * /api/sub_categories/{id}:
 *  delete:
 *    description: Delete SubCategory by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the subcategory you want to delete
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response  
 *      '400': 
 *        description: Bad Request 
 */
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


}