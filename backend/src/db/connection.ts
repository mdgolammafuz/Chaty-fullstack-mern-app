import { connect } from "mongoose";

async function connectToDatabase ()
{
  try
  {
    await connect(process.env.MONGODB_URL)
  } catch ( error )
  {
    throw new Error( 'Couldnot connect to MongoDB' );
  }

}

async function disconnectFromDatabase ()
{
  try
  {
    
  } catch ( error )
  {
    console.log( error )
    throw new Error( 'Could not disconnect from MongoDB' );
  }
}

export {connectToDatabase, disconnectFromDatabase}