const express = require('express')
const path = require('path')
const app = express()
const port = 3304

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



paypal.Buttons({
  createOrder: function(data, actions) {
      return actions.order.create({
          purchase_units: [{
              amount: {
                  value: "15.00",
                  currency_code: "USD"
              },
              shipping: {
                  options: [
                      {
                          id: "SHIP_123",
                          label: "Free Shipping",
                          type: "SHIPPING",
                          selected: true,
                          amount: {
                              value: "3.00",
                              currency_code: "USD"
                          }
                      },
                      {
                          id: "SHIP_456",
                          label: "Pick up in Store",
                          type: "PICKUP",
                          selected: false,
                          amount: {
                              value: "0.00",
                              currency_code: "USD"
                          }
                      }
                  ]
              }
          }]
      });
  }
});