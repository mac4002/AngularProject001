

export class Product {
    name: string;
    description: string;
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
export const PRODUCT_TEST = new Product('Hamac', 'Pour se reposer apres une semaine d\'Angular');
