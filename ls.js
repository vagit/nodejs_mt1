require('./helper')
let fs = require('fs').promise
let path = require('path')
let {dir} = require('yargs')
    .default('dir', __dirname)
    .argv

async function ls() {
    // Use 'await' inside 'async function's
    console.log('Executing ls function...')
    let promise = fs.readdir(__dirname)
    let fileNames = await fs.readdir(dir)
    // Your implementation here

    for (let fileName of fileNames) {
        let filePath = path.join(__dirname, fileName)
        // TODO: Obtain the stat promise from fs.stat(filePath)
        console.log(filePath)
        // TODO: Use stat.isDirectory to exclude subdirectories
        // ...
    }
}

ls()