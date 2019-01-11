let { readFile } = require('fs')
let { promisify } = require('util')

let { Option } = require('rust-std')
let babel = require('babel-core')

let myCustomTranspiler = require('./index')

let readFileAsync = filepath => promisify(readFile)(filepath, 'utf8')

async function main() {
  try {
    let inputFile = Option.from(process.argv[2]).expect(
      'Expected input file path.'
    )
    let src = await readFileAsync(inputFile)
    let output = babel.transform(src, {
      plugins: [myCustomTranspiler]
    })
    console.log(output.code)
  } catch (error) {
    console.error(error.message)
    process.exit(-1)
  }
}

main()
