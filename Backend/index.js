const express = require('express');
const jsonServer = require('json-server');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')

const app = express();
app.use(cors(
  {
    origin: 'http://localhost:3000'
  }
))
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'your-secret-key'; // Replace this with your own secret key

app.use(express.json());
app.use(middlewares);

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
};


function getRandomId(length = 8) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}





// User registration
app.post('/register', (req, res) => {
  const { FirstName,LastName,Email, password } = req.body;

  if (!FirstName || !password || !LastName || !Email) {
    return res.status(400).json({ message: 'FirstName and password are required' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: getRandomId(), FirstName,LastName,Email, password: hashedPassword };

  // Add the user to the JSON Server database
  router.db.get('users').push(newUser).write();


  res.status(201).json({ message: 'Registration successful' });
});

// User login
app.post('/login', (req, res) => {
  const { Email, password } = req.body;
  console.log(Email)
  console.log(password)

  const user = router.db.get('users').find({ Email }).value();
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = generateToken(user.id);
  res.status(200).json({ token,...user });
});

app.use('/', router);



app.post('/blogs',(req,res)=>{
  const { userId, title,Firstname, description } = req.body;

  const date = Date.now();


  const newBlog = { userId, title,Firstname,date, description };
  router.db.get('blogs').push(newBlog).write();
  


  res.status(201).json(newBlog);
})


app.get('/blogs',(req,res)=>{
    const Blogs = router.db.get('blogs')
    res.status(201).json(Blogs);
})


app.delete('/blogs/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)

  const blog = router.db.get('blogs').find({ id }).value();
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  router.db.get('blogs').remove({ id }).write();
  res.status(204).send('Delete Success'); // No content response
});


app.put('/update-blog/:id', async (req, res) => {
  const blogId = req.params.id;
  const updatedData = req.body;
  console.log(updatedData)
  console.log(blogId)

  try {
    // Check if the blog exists
    const existingBlog = router.db.get('blogs').find({ id: blogId }).value();
    if (!existingBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Update the blog using Axios
    await axios.put(`http://localhost:5000/blogs/${blogId}`, updatedData); // Replace with your JSON Server's URL

    res.status(204).send(); // No content response
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Error updating blog' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
