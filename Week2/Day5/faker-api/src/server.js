const express = require("express")
const app = express()
const PORT = 8000
const { faker } = require('@faker-js/faker');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// we can create a function to return a random / fake "Product"
const createProduct = () => {
  const newFake = {
    name: faker.commerce.productName(),
    price: "$" + faker.commerce.price(),
    department: faker.commerce.department()
  };
  return newFake;
};

const createUser = () => {
  const newUser = {
    _id: faker.number.int(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
  return newUser;
}

const createCompany = () => {
  const newCompany = {
    _id: faker.number.int(),
    name: faker.company.name(),
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    }
  }
  return newCompany
}

app.get("/api/users/new", (req, res) => {
  console.log(req)
  const user = createUser()
  res.json(user)
});

app.get("/api/companies/new", (req, res) => {
  console.log(req)
  const company = createCompany()
  res.json(company)
});

app.get("/api/user/company", (req, res) => {
  console.log(req)
  const user = createUser()
  const company = createCompany()
  res.json({ user, company })
});

app.listen(PORT, () => console.log("running"))