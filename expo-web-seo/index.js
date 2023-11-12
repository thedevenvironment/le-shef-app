const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

/**
 * Bundle Web App
 * -
 */
async function bundleWebApp() {
  try {
    // Step 1 : Copy Files
    printLog('INFO', `TASK 1: Copying Static Files`)
    await copyFiles()

    // Step 2 : Create Custom HTML
    printLog('INFO', `TASK 2: Creating Custom HTML`)
    await injectHTML()

    // Success
    printLog(`SUCCESS`, `Bundling web app complete! :)`)
  } catch (err) {
    printLog(`ERROR`, `Bundling web app failed. - ${err}`)
  }
}

/**
 * Copy File Asyncronously
 * -
 */
function copyFile(src, dest) {
  return new Promise((resolve, reject) => {
    fs.copyFile(createPath(src), createPath(dest), fs.constants.COPYFILE_FICLONE, (err) => {
      if (err) return reject(`failed to copy file to: ${dest}`)
      printLog('SUCCESS', `File copied to: ${dest}`)
      return resolve()
    })
  })
}

/**
 * Copy Files
 * -
 */
async function copyFiles() {
  try {
    await copyFile('./seo/robots.txt', '../web-build/robots.txt')
    await copyFile('./seo/sitemap.xml', '../web-build/sitemap.xml')
    await copyFile('./seo/og-image.jpg', '../web-build/og-image.jpg')
  } catch (err) {
    printLog('ERROR', err)
    throw err
  }
}

/**
 * Create File Path
 * -
 */
function createPath(dest) {
  return path.join(__dirname, dest)
}

/**
 * Inject HTML
 * -
 */
function injectHTML() {
  return new Promise((resolve, reject) => {
    try {
      const $indexHTML = cheerio.load(readFileSync('../web-build/index.html'))
      const $seoHTML = cheerio.load(readFileSync('./seo/seo.html'))

      $indexHTML('head').append($seoHTML('head'))
      $indexHTML('noscript').replaceWith($seoHTML('noscript'))

      writeFileSync('../web-build/index.html', $indexHTML.html())
      printLog('SUCCESS', 'HTML file created successfully!')

      return resolve()
    } catch (err) {
      printLog('ERROR', err.message)
      return reject('ERROR: Failed to write HTML file. :(')
    }
  })
}

/**
 * Print Log
 * -
 */
function printLog(state, text) {
  if (state === 'INFO') {
    console.log('\x1b[44m%s\x1b[37m\x1b[0m', `🦋 ${text.toUpperCase()} `)
  } else if (state === 'ERROR') {
    console.log('\x1b[31m%s\x1b[0m', `🚨 ${text}`)
  } else if (state === 'WARNING') {
    console.log('\x1b[33m%s\x1b[0m', `🌕 ${text}`)
  } else if (state === 'SUCCESS') {
    console.log('\x1b[32m%s\x1b[0m', `✅ ${text}`)
  } else {
    console.log(text)
  }
}

/**
 * Read File Syncronously
 * -
 */
function readFileSync(dest) {
  return fs.readFileSync(createPath(dest), { encoding: 'utf8' })
}

/**
 * Write File Syncronously
 * -
 */
function writeFileSync(dest, file) {
  return fs.writeFileSync(createPath(dest), file, { encoding: 'utf8' })
}

// Start Bundler
bundleWebApp()
