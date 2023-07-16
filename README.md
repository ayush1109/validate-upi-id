# validate-upi-id

Introducing a compact and lightweight library that offers an efficient and streamlined approach to verify UPI ID. _This library enables developers to easily validate any UPI ID without incurring any additional expenses._

# How to use

```javascript
const verifyUPI = require('validate-upi-id')
//upiId: id you want to verigy
const response = await verifyUPI(upiId)
/*response = {
  payeeAccountName: 'Account Name',
  vpa: 'UPI ID',
  vpaValid: 'Valid or Not
}
*/

```

## Examples

```javascript
verifyUPI("7290928675@paytm").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
/*Output: {
  payeeAccountName: 'Ayush Garg',
  vpa: '7290928675@paytm',
  vpaValid: true
}
*/

verifyUPI("7290928675@ybl").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
/*Output: {
  vpa: '7290928675@ybl',
  vpaValid: false,
  errorMessage: 'Invalid UPI ID!'
}
*/

For any inquiries, questions, or clarifications regarding this library, we encourage you to reach out to us via email at **gargayush308@gmail.com**. We are here to provide prompt assistance and address any doubts you may have about the library's functionality, implementation, or any other related concerns. Your feedback is valuable to us, and we are committed to ensuring a seamless experience with our library. Please don't hesitate to contact us; we look forward to assisting you. 


