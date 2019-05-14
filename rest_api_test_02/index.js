const mysql = require('mysql');
const express = require('express')
let app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const mysqlConnection = mysql.createConnection({host: "localhost", user: "root", password: "password", database: "test_schema", multipleStatements: true})

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("DB connectin succeded :)")
    } else {
        console.log("DB connection failed")
    }
})

app.listen(3000, () => console.log('Express sercer is running at port: 3000'))

//get all users!
app.get('/users', (req, res) => {
    mysqlConnection.query('select * from users', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

//get all user by name!
app.get('/users/:name', (req, res) => {
    mysqlConnection.query('select * from users where userName = ?', [req.params.name], (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

//delete a user by ID!
app.delete('/users/:id', (req, res) => {
    mysqlConnection.query('delete from users where ID = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.send('Deleted Successfully :)')
        } else {
            res.send('Something is wrong!')
        }
    })
})

//insert a user
app.delete('/users', (req, res) => {
    let userMaker = req.body
    let sql = 'set ID = ?; set userName = ?; set userEmail = ?; set userPhone = ?; call userMaker(ID, userName, userEmail, userPhone);'
    mysqlConnection.query(sql,[userMaker.ID, userMaker.userName, userMaker.userEmail, userMaker.userPhone], (err, rows) => {
        if (!err) {
            res.send(rows, console.log("Done"))
        } else {
            res.send('Something is wrong!')
        }
    })
})