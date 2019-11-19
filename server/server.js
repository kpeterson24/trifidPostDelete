// requires
const express = require( 'express' );

const app = express();
// NEEDED FOR A POST (req.body)
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
// also needed for POST
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
const port = 5000;
let messages = [];
// server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) //end server up

// setup pur routers

// when requests come in for /messages send to messagesRouter
const messagesRouter = require('./routers/messages_router');
app.use('/messages', messagesRouter);
const testingRouter = require('./routers/test_router');
app.use('/test', testingRouter);