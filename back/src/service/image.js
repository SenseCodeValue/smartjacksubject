const fs = require('fs');
const path = require('path');


exports.createImage = async(name, type ,value)=>{
    try{
        const imgURL = path.join(__dirname, '..', '..', 'public', 'images',name);
        console.log(imgURL);
        // console.log(fs.readdirSync(imgURL));
        fs.writeFileSync(imgURL, value, {encoding: 'base64'}, function(err) {
            console.log('File created');
        });
    }catch(e){
        console.error(e);
        throw Error(e);
    }
}