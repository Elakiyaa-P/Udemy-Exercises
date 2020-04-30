const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app= express()
const port=3000

let customers = [
    {
        "cust_name": "priya",
        "cust_id":"001",
        "cust_address": " chetty street",
        "location": "chennai",
        "landmark" : "ayanavaram",
        "ph_no" : 911828299,
    },
    {
        "cust_name": "ramya",
        "cust_id":"002",
        "cust_address": "voc street",
        "location": "chennai",
        "landmark" : "ambattur",
        "ph_no" : 963556656,
    },
    {
        "cust_name": "suja",
        "cust_id":"003",
        "cust_address": "watertank street",
        "location": "chennai",
        "landmark" : "amjikarai",
        "ph_no" : 91235478,
    }

];


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/customer',(req,res)=> {
  res.json(customers);
});



app.get('/customer/:cust_id',(req,res)=>{

    const cust_id = req.params.cust_id;

    for(let customer of customers){
        if(customer.cust_id === cust_id){
            res.json(customer);
            return ;
        }
    }
    res.status(404).send('Customer not found');
});

app.post('/customer',(req,res) => {
    const customer = req.body;
    customers.push(customer);

    res.send('Customer is added to the database');
});

app.put('/customer/:cust_id' , (req,res) => {
    const cust_id = req.params.cust_id;
   const newcustomer = req.body;

   for(let i=0; i< customers.length; i++)
   {
       let customer = customers[i]

       if(customer.cust_id === cust_id)
       { customer[i] = newcustomer;}
   }

    res.send('Customer is edited');
});


app.delete('/customer/:cust_id' , (req,res) => {
    const cust_id = req.params.cust_id;

    customers = customers.filter(i => {
     if(i.cust_id !== cust_id) {
         return true;
     }
     return false;
 });

    res.send('Customer is deleted');
});




app.listen(port, () =>
console.log(`Hello world listening on port ${port}!`
));