const imageService = require('../service/image');

exports.createImage = async(req, res, next) => {
    try{
        const name = req.body.name;
        const value = req.body.value;
        const type = req.body.type;
        imageService.createImage(name, type, value);
        
        const responseObj = {
            msg : "success create image",
            name
        }
        return res.json(responseObj);
    }catch(e){
        console.error(e);
        next(e);
    }
}
exports.getImageURL = async(req, res, next) => {
    try{
        const name = req.params.name;
        imageService.getImageURL(name)
        .then(imageURL=>{
            res.json({imageURL});
        })
        
    }catch(e){
        console.error(e);
        next(e);
    }
}