export interface Cocktail {
    id: string;
    name: string;
    category: string;
    instructions: string;
    alcoholic: string;
    glass: string;
    imageUrl: string;
    ingredients: Array<string>;
}
