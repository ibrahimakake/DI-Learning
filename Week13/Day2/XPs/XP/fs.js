/*Exercise 1 : Reading From A File In Node.JS

Instructions

Create a text file and write something inside (example: ‘Some Text To See’)
Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal

========

Exercise 2 : Writing Files With Node JS

Instructions

Create an fs.js file, and use the Node js File System to create a new text file and write to it.


Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)


Use the Node js File System to delete the file.
*/

let fs = require('fs')

fs.readFile('hello.txt' ,((err,data)=>{
    if(err){
        console.log(err)
        return
    }else{
        console.log(data.toString())
    }
}))
console.log("----- Starting !---------", '\n',);




fs.writeFile('myFile.txt', 'Hello, this is my file content!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File created and content written successfully.');
        

        const  juice = '\nBuy orange juice'

        fs.appendFile('myFile.txt',juice , (appendErr) => {
            if (appendErr) {
                console.error('Error appending to file:', appendErr);
            } else {
                console.log('Text appended to the file successfully.');
                }

                 
                   fs.unlink('myFile.txt', (unlinkErr) => {
                    if (unlinkErr) {
                        console.error('Error deleting file:', unlinkErr);
                    } else {
                        console.log('File deleted successfully.');
                    }
                })
        });
    }
});

