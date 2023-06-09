const express = require('express');
const db = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { response } = require('express');

const app = express();
const port = 5000;

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const SECRET_KEY = 'mysecretkey';

app.post('/api/login', (req, res) => {

  const { employeeCode, employeePwd } = req.body;
  const token = jwt.sign({ code: employeeCode }, SECRET_KEY);

  try {
    db.query('SELECT * FROM emp_master where employee_code=? and password=?', 
    [employeeCode, employeePwd], 
    (err, result) => {
      if (err) throw err

      // check if the employee code and password exists in db
      if (result.length > 0) {
        const user = result[0];
        res.json({'user': user.full_name, 'grade': user.grade ,'token': token});
      } else if(result.length === 0 ){  
        res.status(401).json({ error: 'Invalid username or password' });
      }  
    }); //end of db.query   
  } catch (error) {
    console.log(error);
  }
});

app.get('/dashboard', (req,res) => {
  res.send("This is dashboard");
})


app.get('/api/emp', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM emp_master');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/notes', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM notes');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/notes', async(req, res) => {

  const {authorName, titleName} = req.body;
  try {
    const [result] = await db.execute("INSERT into notes(title, author) values (?, ?)", [titleName, authorName]);
    res.send({ id: result.insertId, authorName, titleName});
  } catch (error) {
    console.log(error);
  }
});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});