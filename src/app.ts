import express, { json } from 'express'
import { LoginRoute } from './routes/LoginRoute';

export const app = express()

app.use(json())

app.use("/login", LoginRoute);



