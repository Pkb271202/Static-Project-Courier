// console.log("hi")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<html lang="en" dir="ltr">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Register</title>
      <link rel="icon" type="image/x-icon" href="./Image/ASC.png">
      <link rel="stylesheet" href="./style1.css">
  </head>
  <body>
      <div class="center">
          <h1>Register</h1>
          <form method="POST" action="register.html">
          
              <div class="txt_feild">
                  <input type="text" name="username" id="username" required>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt_feild">
                  <input type="email" name="email" id="email" required>
                  <span></span>
                  <label>Email</label>
              </div>
              <div class="txt_feild">
                  <input type="password" name="password" id="password" required>
                  <span></span>
                  <label>Password</label>
              </div>
              <input type="submit" name="submit" value="Register">
              <div class="signup_link">
                  Already a member? <a href="./login.html">Login</a>
              </div>
          </form>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
