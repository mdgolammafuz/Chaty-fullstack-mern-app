import express from 'express'

const app = express();

//middlewares
app.use(express.json())

app.delete( "/user/:id", ( req, res, next ) =>
{
  console.log( req.params.id );
  return res.send( "hello" );
})

//connections and listenrs
app.listen( 4000, () => console.log( "server open" ) );