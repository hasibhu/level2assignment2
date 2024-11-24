# Express application for Car Store

1. clone the repository, run "git clone https://github.com/hasibhu/level2assignment2.git"
2. run 'npm i' to install all node modules dependecies. 
3. run 'npm run start:dev' to run the server in local machine 


# working with APIs

## visit the app
##### https://level2assignment2-zeta.vercel.app/

## To Get all cars info
#### https://level2assignment2-zeta.vercel.app/api/cars

## To insert car info in DB
use postman application with POST method with url https://level2assignment2-zeta.vercel.app/api/cars
data format will be in the following format: the data is type sensetive 
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


## 



## interface > Schema > Model > DB Query
#### IRCS 
* Request hits route and then route calls controller, controller calls service, and service will handle buiness ligic.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
