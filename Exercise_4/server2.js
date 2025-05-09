const otpGenerator = require('otp-generator');

const otp = otpGenerator.generate(
);

console.log("OTP:", otp);  // should be only digits, like 482910

const crypto = require('crypto');
const otp1 = crypto.randomInt(10, 100).toString();
console.log("OTP1:", otp1); // Example: "473920"


const token = crypto.randomBytes(7).toString('hex');


console.log("Token:", token);
