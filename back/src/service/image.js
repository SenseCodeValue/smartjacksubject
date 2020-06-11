const fs = require('fs');
const path = require('path');


exports.createImage = async(name, type ,value)=>{
    try{
        const imgURL = path.join(__dirname, '..', '..', 'public', 'images',name);
        console.log(imgURL);
        fs.writeFileSync(imgURL, value.split(',')[1], {encoding: 'base64'}, function(err) {
            console.log('File created');
        });
    }catch(e){
        console.error(e);
        throw Error(e);
    }
}
exports.getImageURL = async(name) => {
    try{
        const imgURL = path.join(__dirname, '..', '..', 'public', 'images',name);
        let isExist = false;
        fs.readFileSync(imgURL,function (err, data) {
            if (err) throw err;
          });
            return `http://localhost:3030/static/${name}`;
    }catch(e){
        console.error(e);
        throw(e);
    }
}