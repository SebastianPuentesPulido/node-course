import bcrypt from 'bcrypt';
const password = '123JOHANpuentes!';

bcrypt.hash(password,5,(err,hash)=> {
    console.log(hash);
    bcrypt.compare(password,hash,(err,data)=> {
        console.log(data);
    });
});