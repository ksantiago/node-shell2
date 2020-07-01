// const path = require('path')

const pwd = () => {
  process.stdout.write(__dirname)
  // process.stdout.write(path.dirname(__filename))
  // process.stdout.write(process.cwd())
}

module.exports = pwd
