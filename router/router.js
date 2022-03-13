const express = require("express");
const router = new express.Router();
const user = require("../model/schema.js")

router.post('/newEmployee', (req, res) => {
    console.log(req.body);
   {
        //const{first_name,last_name,email,mobole_number} = req.body;
        const newUser = new user({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            mobole_number: req.body.mobile_number
        });
   newUser.save()
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log("Error found" + err);
            })
    }
});
router.get("/employeeDetail/:id", async (req, res) => {
    try {
        const id=req.params.id;
        const data = await user.findById(id);
        res.send(data);
    } catch (err) {
        console.log(err);
    }
}
);
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await user.findByIdAndDelete(id)   //user.findByIdAndDelete(req.params.id);
        res.send("Data is deleted succesfully...");
    } catch (err) {
        console.log("error found" + err);
    }

});
module.exports = router;
