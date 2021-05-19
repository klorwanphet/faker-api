const express=require('express')
const app = express()
const port =8000
const faker =require('faker')
app.get("/api", (req,res)=>{
    res.json({message:"Welcome"})
})
app.get("/api/user/new/",(req,res)=>{
    const user=new User();
    res.json({user:user})
})
app.get("/api/company/new/",(req,res)=>{
    const company=new Company();
    res.json({company:company})
})
app.get("/api/user/company/",(req,res)=>{
    const company=new Company();
    const user=new User();
        res.json({user:user,company:company})
})

app.listen(port,()=> console.log('Running on port', port))

class User{
    constructor(){
        this.fname=faker.name.firstName()
        this.lname=faker.name.lastName()
        this.phoneNumber=faker.phone.phoneNumber()
        this.email=faker.internet.email()
        this.password=faker.internet.password()
    }
}

class Company{
    constructor(){
        this.name=faker.company.companyName()
        this.street=faker.address.streetName()
        this.city=faker.address.cityName()
        this.state=faker.address.state()
        this.zipCode=faker.address.zipCode()
        this.coutry=faker.address.country()
    }
}