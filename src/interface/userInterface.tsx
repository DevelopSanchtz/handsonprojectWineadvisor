export interface User {
    first_name: string,
    last_name: string,
    id: number,
    email: string,
    avatar: string
}

export interface Support {
    url: string;
    text: string;
}

export interface ResponseUser {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: Support;
}