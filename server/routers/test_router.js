const express = require( 'express' );

//make new router
let testRouter = express.Router();

testRouter.get( '/', ( req, res )=>{
    console.log( '/test GET' );
    res.send( 'ribbet' );
}) //end test GET

testRouter.post( '/', ( req, res )=>{
    console.log( '/test POST:', req.body );
    
    res.sendStatus( 201 );
}) // end test POST
module.exports = testRouter;