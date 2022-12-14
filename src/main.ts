import ac from 'ansi-colors'
import argv from './argv.js'
import init from './scripts/init.js'
import ignore from './scripts/ignoreData.js'
import makeSrc from './scripts/makeSrc.js'
import packageManager from './scripts/packageManager.js'
import * as builder from './builder'

argv.flag['no-install'] || packageManager()
argv.flag['no-ignore'] || ignore()
argv.flag['no-src'] || makeSrc()

switch (argv.cmd) {
  case 'init':
    init()
    break

  case 'dev':
    builder.dev()
    break

  case 'build':
    builder.build()
    break

  case '':
    console.warn(ac.yellow('No command found'))
    process.exit(1)

  default:
    console.error(ac.red('Unknown command `' + ac.yellow(argv.cmd) + '`'))
    process.exit(1)
}
