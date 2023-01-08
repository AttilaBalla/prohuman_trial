export interface IRandomUser {
    gender: string;
    name: {
        title: string,
        first: string,
        last: string
    };
    location: {
        city: string,
        state: string,
        country: string,
        postcode: number
    };
    dob: {
        date: Date,
        age: number
    };
    email: string;
}

export type Order = 'asc' | 'desc'

export type Gender = 'male' | 'female'

export interface TableData {
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    country: string;
    postalCode: number;
    email: string;
}

export interface HeadCell {
    id: keyof TableData;
    label: string;
    numeric: boolean;
}
