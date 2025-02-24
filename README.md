Features
--------
-Create Product (POST /product/createProduct)

  Accepts form data, including an image file.

  Uploads the image to Cloudinary and stores the URL in productImage.

  Saves the product details in the database

-Get All Products (GET /product/getAllProduct)

   Fetches and returns a list of all products from the database.

-Get Product by ID (GET /product/getProductById/:id)

   Fetches and returns a single product based on its ID.

-Update Product by ID (PUT /product/updateProductById/:id)

  Updates an existing product’s details.
  If a new image is provided, uploads it to Cloudinary and updates the productImage field.
  
  -Delete Product by ID (DELETE /product/deleteProductById/:id)
    Deletes a product from the database.
    If the product has an associated image on Cloudinary, deletes it as well.

Technologies Used
----------------

-Node.js with Express.js for building RESTful routes.
-MongoDB with Mongoose for database management.
-Multer for handling file uploads before sending them to Cloudinary.
-Cloudinary for image storage.
-Proper error handling and validation practices.

Running the Project Locally

Run the application:
  ----------------
    npm start
   The API will be accessible at: http://localhost:5000



Running the Project Locally
---------------------------

 -Create a Product
    Endpoint: POST /product/createProduct

- Get All Products
   Endpoint: GET /product/getAllProduct

-Get a Product by ID
  Endpoint: GET /product/getProductById/:id

-Update a Product by ID
  Endpoint: PUT /product/updateProductById/:id

-Delete a Product by ID
  Endpoint: DELETE /product/deleteProductById/:id  

  Author
  -----
Developed by Kamikazi Christella
  




