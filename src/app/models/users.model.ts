// Modelo de dados do usuário
export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    status: number;
    date: Date;
}

// Response dos usuários
export interface ResponseUsers {
    status: number;
    result: User[];
}

// Response de 1 usuário
export interface ResponseUser {
    status: number;
    result: User[];
}

// Response de Delete
export interface ResponseDelUser {
    status: number;
    result: string;
}

// Response de Post
export interface ResponsePostUser {
    status: number;
    result: string;
}

// Response de Put
export interface ResponsePutUser {
    status: number;
    result: string;
}
