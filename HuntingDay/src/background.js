import db from 'diskdb'
import path from 'path'
import jetpack from 'fs-jetpack'
import electron from 'electron'

const app = electron.app
  // Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const Tray = electron.Tray
const globalShortcut = electron.globalShortcut
const ipcMain = electron.ipcMain

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let appIcon = null

let shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }
    mainWindow.focus()
  }
  return true
})

if (shouldQuit) {
  app.quit()
}

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    'min-width': 600,
    'min-height': 400,
    transparent: true,
    frame: false,
    titleBarStyle: 'hidden',
    'accept-first-mouse': true,
    'title': '出击日',
    'show': false
  })

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function registerShortCut () {
  let ret = globalShortcut.register('ctrl+x', () => {
    console.log('ctrl+x is pressed')
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('ctrl+x'))
}

// function createTray () {
//   appIcon = new Tray('/path/to/my/icon')
//   var contextMenu = Menu.buildFromTemplate([{
//     label: 'Item1',
//     type: 'radio'
//   }, {
//     label: 'Item2',
//     type: 'radio'
//   }, {
//     label: 'Item3',
//     type: 'radio',
//     checked: true
//   }, {
//     label: 'Item4',
//     type: 'radio'
//   }])
//   appIcon.setToolTip('This is my application.')
//   appIcon.setContextMenu(contextMenu)
// }

function testDiskDB () {
  jetpack.dir('db')
  db.connect(path.join(__dirname, 'db'), ['articles'])
  var article = {
    title: 'diskDB rocks',
    published: 'today',
    rating: '5 stars'
  }
    // save
  var savedArticle = db.articles.save(article)
  console.log(savedArticle)

  // findAll
  var foundArticles = db.articles.find()
  console.log(foundArticles)

  foundArticles = db.articles.find({
    rating: '5 stars'
  })
  console.log(foundArticles)

  // findOne
  foundArticles = db.articles.findOne()
  console.log(foundArticles)

  foundArticles = db.articles.findOne({
    rating: '5 stars'
  })
  console.log(foundArticles)

  // update
  var query = {
    title: 'diskDB rocks'
  }

  var dataToBeUpdate = {
    title: 'diskDB rocks again!'
  }

  var options = {
    multi: false,
    upsert: false
  }

  var updated = db.articles.update(query, dataToBeUpdate, options)
  console.log(updated)

  // after update
  foundArticles = db.articles.findOne({
    rating: '5 stars'
  })
  console.log(foundArticles)

  // count
  console.log(db.articles.count())

  // remove
  db.articles.remove({
    rating: '5 stars'
  })
  db.articles.remove()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {
  createWindow()
  registerShortCut()
  // createTray()
  testDiskDB()
})

app.on('will-quit', () => {
  globalShortcut.unregister('ctrl+x')
  globalShortcut.unregisterAll()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('open-dev', (event) => {
  event.returnValue = true
  mainWindow.webContents.openDevTools()
})

ipcMain.on('app-quit', (event) => {
  event.returnValue = true
  mainWindow.close()
})

ipcMain.on('app-minimize', (event) => {
  event.returnValue = true
  mainWindow.minimize()
})

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})
