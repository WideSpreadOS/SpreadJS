// App Name
let appName = process.env.APP_NAME || 'Spread App'
// NPM Modules
import dotenv from "dotenv"
import express from "express"
import pkg from 'body-parser';
import path from 'path';
import consolidate from 'consolidate'

// dotenv
dotenv.config()


// Port
const port = process.env.PORT || 5000


// express configuration
const app = express()
const router = express.Router();

app.engine('html', consolidate.swig)


/* 
node_modules/express/lib/view.js
CHANGED
line 58: this.root = opts.root;
TO
line 58: this.root = 'frontend/fragments';
*/
app.set('views', path.join(path.dirname("./frontend"))); 
app.set('view engine', 'html');
app.set('view options', { layout: 'layout' });

app.set('view engine', 'html');

// Middleware
const { bodyparser: bodyParser } = pkg;
// app.use(bodyParser.json());

// Static
app.use(express.static('frontend'));





// express routing
app.get('/*', (req, res) => {
    console.log('Getting fragments/test.js...')
    res.render('layout.html')
})





app.listen(port, () => {
    console.log(`${appName} listening at http://localhost:${port}`)
})