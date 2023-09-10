export interface IUser {
    _id?: number,
    username: string,
    password:string
}
export interface IUserRequest{
    firstName?: string,
    lastName?: string,
    email?: string,
    password?:string
    photo?: string,
}