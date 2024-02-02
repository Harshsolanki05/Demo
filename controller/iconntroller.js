var imodel = require('../model/imodel')

exports.insert= async (req,res) => {
    var data = await imodel.create(req.body)
    res.status(200).json({
        data
    })
}

