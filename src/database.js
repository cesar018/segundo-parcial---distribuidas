import { Pool } from 'pg'
export const pool=new Pool({
    host:'ec2-18-214-195-34.compute-1.amazonaws.com',
    user:'bhieblgshktiap',
    password:'fd9d817625f72171f00339522061d565e595fef8c58fe28a7cc4d8b5304218f8',
    database: 'ddcmjidnvarje7',
    port:5432,
    ssl:{rejectUnauthorized:false}
});