import express from 'express'
import cors from 'cors'

const PORT = 3000
const app = express()

app.use((cors))  // Use this after the variable declaration
app.use(express.json());

// mimicing actual db
const users = [
    { id: 1, name: 'Saba gul', email: 'saba123@gmail.com' },
    { id: 2, name: 'Hina khan', email: 'hina123@gmail.com' },
    { id: 3, name:'Sara ali', email: 'sara123@mail.com'}
   
]
function errorHandler(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong',
        error: true
    })
}