# Express application for Car Store API

## Application overview: 
* This Express application has been developed  with TypeScript, integrating MongoDB with Mongoose to manage a Car Store. To ensure data integrity using Mongoose schema validation.

### Project Goal:
* The goal of the Car Store API is to manage car data and customer orders for a car dealership. The API allows for:
1. Managing Cars - an user can add, update, retrieve, and delete car information, such as brand, model, price, and so on.
2. Handling Orders - Customers can place orders for cars, and the stock will be updated automatically.
3. Revenue Calculation - We can calculate the total revenue from all orders using MongoDB's aggregation features."



### To run the app in your local machine 
1. clone the repository, run "git clone https://github.com/hasibhu/level2assignment2.git"
2. run 'npm i' to install all node modules dependecies. 
3. run 'npm run start:dev' to run the server app in local machine 


# working with APIs

## visit the app
 https://level2assignment2-zeta.vercel.app/

## To Get all cars info
 https://level2assignment2-zeta.vercel.app/api/cars

 ## To get ID specific car info
* use postman application with GET method with url https://level2assignment2-zeta.vercel.app/:carId
* Use car id at the end of the url replacing ":carId". 


## To insert car info in DB
* use postman application with POST method with url https://level2assignment2-zeta.vercel.app/api/cars
* data format will be in the following format: the data is type sensetive 
```json
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2024,
  "price": 25000,
  "category": "Sedan",
  "description": "A reliable family sedan with modern features.",
  "quantity": 50,
  "inStock": true
}
```

## To update car info in DB

* use postman application with PUT method with url https://level2assignment2-zeta.vercel.app/api/cars/:carId
* Use car id at the end of the url replacing ":carId". 
* Data format will be in the following format: the data is type sensetive 
```json
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2024,
  "price": 25000,
}
```

## To delete car info from DB

* use postman application with DELETE method with url https://level2assignment2-zeta.vercel.app/api/cars/:carId
* Use car id at the end of the url replacing ":carId". 


# Order

## To create an Order 
* use postman application with POST method with url https://level2assignment2-zeta.vercel.app/api/orders
* data format will be in the following format: the data is TYPE sensetive. 

```json
{
  "email": "customer@example.com",
  "car": "will be replaced by car ID from DB",
  "quantity": 1
}
```


## To see all revenue  
* use postman application with GET method with url https://level2assignment2-zeta.vercel.app/api/orders/revenue




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
