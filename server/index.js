
const piexif = require('piexifjs');
const fs = require('fs');

function getExifData(filename){

    const base64DataFromJPEG = fs.readFileSync(filename).toString('binary');
    return piexif.load(base64DataFromJPEG);
}

function parseExifData(exifData){
    
    for (exifID in exifData) {
        if(exifID === 'thumbnail') continue;
        for (tag in exifData[exifID]) {
            console.log(`${piexif.TAGS[exifID][tag]['name']} : ${exifData[exifID][tag]}`)
        }
    }
}

parseExifData(getExifData('../images/image.jpg'))