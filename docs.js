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
 * definitions:
 *   Admin:
 *    type: object
 *    properties:
 *      email:
 *        type: string
 *        description: Admin Email
 *        example: test@test.com
 *      password:
 *        type: string
 *        description: Admin Password
 *        example: 12345
 *      business_name:
 *        type: string
 *        description: Name of the Admin
 *        example: 12345
 */
/**
 * @swagger
 * /api/admin/signup:
 *  post:
 *    description: use to signup as an admin
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/definitions/Admin'
 *    responses:
 *      '201':
 *        description: Admin Created Successfully
 */

/**
 * 
 * @swagger
 * /api/admin/signin:
 *  post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
  
/**
 * @swagger
 * /api/user/signup:
 *  post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/admin/signin:
 *  post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/product:
 *  post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/product:
 *  get:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/product/:id:
 *  get:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/product/:id:
 *  put:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /api/product/:id:
 *  delete:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/category:
 *  post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/category:
 *  get:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/category/:id:
 *  get:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/category/:id:
 *  put:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /api/category/:id:
 *  delete:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /api/measurement:
 *  post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/measurement:
 *  get:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/measurement/:id:
 *  get:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/measurement/:id:
 *  put:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /api/measurement/:id:
 *  delete:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /api/subcategories:
 *  post:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/subcategories:
 *  get:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/subcategories/:id:
 *  get:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/subcategories/:id:
 *  put:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
/**
 * @swagger
 * /api/subcategories/:id:
 *  delete:
 *    description: Use to signup as an admin
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

console.log(swaggerDocs)

}