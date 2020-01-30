const express = require('express')

const db = require('../db')

const router = express.Router()


router.get('/', (req, res) => { 

  db.getInstruments()
    .then(images => {
      console.log(images)
      res.render('index',{images:images})    
    })
})

router.get('/instruments/:id', (req,res) => {
  db.getNameAndBlurb(req.params.id)
  .then(blurb => {
    console.log(blurb)
    res.render('instrumentpage', {blurb: blurb})
  })
})

router.post('/instruments/:id', (req,res) => {
  db.editBlurb(req.params.id,req.body.blurb)
    .then(result => {
      console.log(result)
      res.send('yay')
    })
})









//this is the function to test that db.getInstruments is working
// db.getInstruments()
// .then(result => console.log(result))
// })

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('index', {users: users})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

module.exports = router
