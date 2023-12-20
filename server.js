const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 5000; // Choose a port number

app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  try {
    const inputArray = req.body;

    if (
      inputArray &&
      inputArray.response &&
      inputArray.name &&
      inputArray.email &&
      inputArray.message
    ) {
      const recaptchaResponse = await verifyHuman(inputArray);

      if (recaptchaResponse.success) {
        await pushMessage(
          inputArray.name,
          inputArray.email,
          inputArray.message,
          inputArray.phone
        );
        res.status(200).json({ status: 200, message: 'Success' });
      } else {
        res.status(501).json({ status: 501, message: 'Failed captcha verification' });
      }
    } else {
      res.status(250).json({ status: 250, message: 'Incomplete data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }
});

async function verifyHuman(inputArray) {
  const recaptchaSecret = 'YOUR_RECAPTCHA_SECRET_KEY';
  const recaptchaResponse = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${inputArray.response}`
  );
  return recaptchaResponse.data;
}

async function pushMessage(name, email, message, phone = '000') {
  const pushbulletAccessToken = 'YOUR_PUSHBULLET_ACCESS_TOKEN';
  const messageType = inputArray.type === 'contact' ? 'Contact Form' : 'Careers Form';

  const messageBody = {
    title: `${messageType} (Website) - ${name}`,
    body: `Name: ${name}\nMessage: ${message}\nEmail: ${email}\nPhone: ${phone}`,
    type: 'note',
  };

  await axios.post('https://api.pushbullet.com/v2/pushes', messageBody, {
    headers: {
      'Access-Token': pushbulletAccessToken,
      'Content-Type': 'application/json',
    },
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
