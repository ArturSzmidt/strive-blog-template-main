import express from 'express'; // importing 3rd part module
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';

import studentsRoutes from './students/index.js';

const server = express();

const port = 3001;

server.use(express.json()); // If I do not specify this line of code BEFORE the routes, all the request bodies are going to be undefined
server.use(cors());

server.use('/students', studentsRoutes); // /students will be the prefix for all the endpoints contained in the students Router
// server.use("/books", booksRoutes)

console.table(listEndpoints(server));

server.listen(port, () => {
  console.log('Server listening on port ', port);
});
