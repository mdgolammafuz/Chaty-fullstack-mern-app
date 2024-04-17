// define functions to communicate with the backend api's
import axios from 'axios';

export const loginUser = async ( email: string, password: string ) =>
{
  const res = await axios.post( '/user/login', { email, password } );
  if ( res.status !== 200 )
  {
    throw new Error( 'Unable to login' );
  }
  const data = await res.data;
  return data;
  
}

export const checkAuthSatus = async () =>
{
  const res = await axios.get( '/user/auth-status' );
  if ( res.status !== 200 )
  {
    throw new Error( 'Unable to Authenticate' );
  }
  const data = await res.data;
  return data;
  
}