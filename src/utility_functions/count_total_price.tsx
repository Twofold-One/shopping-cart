import { CardProps } from '../interfaces/general';

export const totalPrice = (array: Array<CardProps>): number => {
    const total = array
        .map((obj) => obj.price)
        .reduce((prev, curr) => prev + curr, 0);
    return total;
};
