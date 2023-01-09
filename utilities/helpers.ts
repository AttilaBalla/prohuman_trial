import {TableData, IRandomUser, Order} from "./types";

function isPrime(number: number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function countPrimeNumbersInPostCode(postCode: number): number {

    return ([...postCode.toString()].filter((char) => {
        return isPrime(parseInt(char))
    })).length
}

export function filterUsersByPostcode(users: IRandomUser[]): IRandomUser[] {
    return users.filter((user) => {
        return countPrimeNumbersInPostCode(user.location.postcode) > 1
    })
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export function createTableData(
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    city: string,
    country: string,
    postalCode: number,
): TableData {
    return {
        firstName,
        lastName,
        age,
        gender,
        city,
        country,
        postalCode,
    };
}
