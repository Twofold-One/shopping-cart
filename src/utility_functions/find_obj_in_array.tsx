import { CardProps } from '../interfaces/general';

export const findObject = (name: string, arr: Array<CardProps>) => {
    const obj = arr.find((item) => item.name === name);
    return obj;
};
