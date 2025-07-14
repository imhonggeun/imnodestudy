import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    var html = `<h1>화면 연습</h1>
            <p>node.js 처음이지만 힘들지 않네!</p>`
  res.send(html)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})