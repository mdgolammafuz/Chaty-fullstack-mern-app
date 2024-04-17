/*
To resolve the error which typically arises 
when TypeScript cannot find a property
within the Request object
*/
import express from "express";

declare global {
  namespace Express {
    interface Request {
      signedCookies?: Record<string,any>
    }
  }
}