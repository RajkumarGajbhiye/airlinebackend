const express = require('express')
 const router =express.Router();
const {getDetails,getDetailsById,insertDetails,pagination,updateDetails,deleteDetails} = require("../controller/airlinecontroller.js")
 

router.route('/details').get(getDetails).post(insertDetails).put(updateDetails).delete(deleteDetails)
router.route('/details/:id').get(getDetailsById)

 module.exports ={router}