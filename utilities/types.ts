export interface IRandomUser {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        city: string,
        state: string,
        country: string,
        postcode: number
    }
}

export type Order = 'asc' | 'desc'

export interface Data {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

export interface HeadCell {
    id: keyof Data;
    label: string;
    numeric: boolean;
}
