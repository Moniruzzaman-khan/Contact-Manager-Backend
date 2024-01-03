const express = require('express');
const { createContact, readContact, readContactById, updateContact, deleteContact} = require("../controllers/ContactController")
const router = express.Router();

router.post('/createContact',createContact)
router.get('/readContact',readContact)
router.get('/readContactById/:id',readContactById)
router.post('/updateContact/:id',updateContact)
router.get('/deleteContact/:id',deleteContact)

module.exports = router