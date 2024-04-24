import bcrypt from 'bcrypt'
export const hashPassword = async(password)=>{
try {
    const saltRounds = 10;
    const hasedPass = await bcrypt.hash(password,saltRounds)
return hasedPass;
} catch (error) {
    console.log(error);
}
}

export const comaprePass = async (password,hasedPass)=>{
return bcrypt.compare(password,hasedPass);
}