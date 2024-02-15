const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// we can create a function to return a random / fake "User"
const createUser = () => {
    const newUser = {
        _id: faker.number.int(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}

// we can create a function to return a random / fake "Company"
const createCompany = () => {
    const newCompany = {
        _id: faker.number.int(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany;
}

const newFakeUser = createUser();
console.log(newFakeUser);
const newFakeCompany = createCompany();
console.log(newFakeCompany);

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});

app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
});

app.get("/api/user/company", (req, res) => {
    res.json( [{user: newFakeUser, company: newFakeCompany}] );
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
