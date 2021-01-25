import express from 'express'
import { join } from 'path'

const projects = require('../projects.json')
const app = express()
const port = 8091

app.use(express.static(join(__dirname, '..', 'public')))
app.set('views', join(__dirname, '..', 'public', 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index', { projects: projects }))

app.get('/steam', (req, res) => res.redirect('https://steamcommunity.com/id/Nimplexy'))
app.get('/youtube', (req, res) => res.redirect('https://youtube.com/Nimplex'))
app.get('/twitter', (req, res) => res.redirect('https://twitter.com/Nimplexy'))
app.get('/discord', (req, res) => res.redirect('https://discord.gg/VFHgtc4'))
app.get('/github', (req, res) => res.redirect('https://github.com/Nimplex'))
app.get('/reddit', (req, res) => res.redirect('https://www.reddit.com/user/Nimplex'))

app.listen(port, () => console.log(`Server is ready. Listening on port: ${port}`))