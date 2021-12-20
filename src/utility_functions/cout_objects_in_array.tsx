import { CardProps } from '../interfaces/general';

export const countObjects = (array: Array<CardProps>, name: string): number => {
    const count = array.reduce(
        (counter, obj) => (obj.name === name ? (counter += 1) : counter),
        0
    );
    return count;
};
