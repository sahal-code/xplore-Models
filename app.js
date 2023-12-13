
const express = require('express');
const { AppUser } = require('./models');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


app.post('/addUser', async (req, res) => {
  try {
  
    const { first_name, middle_name, last_name, user_type, email_id, phone, profile_photo, otp_receive_time, verification_status, additional_info } = req.body;


    const newUser = await AppUser.create({
      first_name,
      middle_name,
      last_name,
      user_type,
      email_id,
      phone,
      profile_photo,
      otp_receive_time,
      verification_status,
      additional_info,
    });

    res.json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
