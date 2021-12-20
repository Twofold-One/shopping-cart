export interface CardProps {
    guitarType?: string;
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    handleAddToCartClick?: any;
}
