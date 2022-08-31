const fs = require('fs');
let path = require('path');
const { resolve, reject} = require('bluebird');
const main = () => {

  const filePath = path.resolve(__dirname, 'data.json');
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if(err) {
        if(err.code === 'ENOENT') {
          reject(new Error('File Does Not Exist'));
        }
        if(err.code === 'EISDIR') {
          reject(new Error('Path is a  directory'));
        }else {
          reject(err);
        } 
      } else {
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          reject(new Error('JSON Invalid'));
        }
      }
    });
  });   
};



module.exports = main;
