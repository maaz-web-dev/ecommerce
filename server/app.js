require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OHVT3FRcoJFnOAvBj5aGoxs3PDuUYYkPXqRvmbgAa9gShQPpM0IIsymMKr8ikloS5hIdzeYwZTmXgm0J8vJWCzS00HJDcDdIF");

app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;


   const lineItems = products.map((product) => ({
  price_data: {
    currency: "USD",
    product_data: {
      name: product.dish,
      images: [product.imgdata],
    },
    unit_amount: Math.round(product.price * 100), 
  },
  quantity: product.qnty,
}));


    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({id:session.id})
 
})


app.listen(7000,()=>{
    console.log("server start")
})