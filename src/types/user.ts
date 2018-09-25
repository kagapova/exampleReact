export interface IUser {
    token: string,
    loading?: boolean,
    error?: string,
    auth: boolean,
    first_name: string,
    last_name: string
}