
import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function GenerateHashPassword(password : string) : Promise<string>{

    
    const hashedPassword :string = await bcrypt.hash(password, saltRounds);

    return hashedPassword
}

export async function CheckHashPassword(password : string, hashedPassword: any) : Promise<boolean>{

    let passwordMatched : boolean = await bcrypt.compare(password, hashedPassword);

    return passwordMatched;
}