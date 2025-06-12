const { log } = require('console')
const fs = require('fs')

fs.writeFile('msg.txt', "hello world", (err)=>{
    if (err) throw err
    console.log('file is updated');
})
