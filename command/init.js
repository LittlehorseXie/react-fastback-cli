'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')

module.exports = co(function *() {
  let projectName = yield prompt('Project name: ')
  let gitUrl = config.gitUrl
  let cmdStr = `git clone ${gitUrl} ${projectName}`

  console.log(chalk.green('\n Start generating...'))

  exec(cmdStr, (error) => {
    if (error) {
      console.log(error)
      process.exit()
    }
    console.log(chalk.green('\n √ Generation completed!'))
    console.log(chalk.yellow(`\n cd ${projectName} && npm install \n`))
    process.exit()
  })
})