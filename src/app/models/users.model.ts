export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    status: number;
    date: Date;
}

export interface ResponseUsers {
    status: string;
    result: User[];
}

export interface ResponseUser {
    status: string;
    result: User[];
}
// O que esperar do response de delete
export interface ResponseDelUser {
    status: string;
    result: string;
}