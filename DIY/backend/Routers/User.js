const {Router} = require("express")
const Model = require("../Models/User")

const router = Router();

router.post("/add", (req, res) => {
    console.log(req.body);
    new Model(req.body).save()

    .then((result) => {
       res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
});

module.exports = router;