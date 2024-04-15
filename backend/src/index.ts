import app from './app.js';
import { connectToDatabase } from './db/connection.js';

const PORT = process.env.PORT || 5000

//connections and listenrs
connectToDatabase().then( () =>
{
  app.listen( PORT, () => console.log( `server is ready at PORT ${PORT} & connected to Database`) );
} ).catch( ( err ) => console.log( err ) );
