require('./db')
const express = require('express');
const app = express();
const port = 1000;

app.use(require('cors')())
app.use(express.json())
app.use('/users', require('./routes/users'))
app.use('/tenants', require('./routes/tenants'))
// app.use('/tenants', require('./routes/tenants'))


app.listen(port, () => console.log(`runing on port ${port}`))