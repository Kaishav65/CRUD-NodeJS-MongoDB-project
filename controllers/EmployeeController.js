const Employee = require('../models/EmployeeModel')

// show the list of employees

const index = (req,res,next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occcured'
        })
    })
}

// show single employee
const show = (req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occcured'
        })
    })

}

// add new employee
const store = (req,res,next)=>{
    let employee = new Employee({
        name : req.body.name,
        designation: req.body.designation,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age
    })
    employee.save()
    .then(response=>{
        res.json({
            message:'Employee Added SuccessFully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occcured'
        })
    })
}

// update an employee
const update = (req,res,next)=>{
   let employeeID = req.body.employeeID

    let updateData = {
        name : req.body.name,
        designation: req.body.designation,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(response=>{
        res.json({
            message:'Employee updated SuccessFully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occcured'
        })
    })
}  

// delete an employee
const destroy = (req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)

    .then(()=>{
        res.json({
            message:'Employee deleted SuccessFully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occcured'
        })
    })
}

module.exports={
    index,show,store,update,destroy
}