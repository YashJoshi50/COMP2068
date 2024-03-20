const connect = require('connect');
const url = require('url');

function calculate(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const params = parsedUrl.query;

  const method = params.method;
  const x = Number(params.x);
  const y = Number(params.y);

  let result;
  let expression;

  if (isNaN(x) || isNaN(y)) {
    result = "Invalid input: Please provide numbers for x and y.";
  } else {
    switch (method) {
      case "add":
        result = x + y;
        expression = x + " + " + y;
        break;
      case "subtract":
        result = x - y;
        expression = x + " - " + y;
        break;
      case "multiply":
        result = x * y;
        expression = x + " * " + y;
        break;
      case "divide":
        if (y === 0) {
          result = "Cannot divide by zero.";
        } else {
          result = x / y;
          expression = x + " / " + y;
        }
        break;
      default:
        result = "Invalid method: Please use add, subtract, multiply, or divide.";
    }
  }

  res.end(`${expression} = ${result}`);
}

const app = connect();
app.use('/lab2', calculate);


app.listen(3000, () => {
  console.log('Server listening on port 3000');


  
});