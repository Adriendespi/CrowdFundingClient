export interface User 
{
    id: number,
    pseudo: string,
    mail: string,
    pwd: string,
    isAdmin: boolean,

    //usersProjects type a definir
}
export interface UserRegister
{
    pseudo: string,
    mail: string,
    pwd: string,
}
export interface UserLogin
{
    identifiant?: string,
    pwd?: string
}