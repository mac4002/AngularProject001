

export class Product {
    name: string;
    description: string;
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
export const PRODUCT_TEST = new Product('Hamac', 'Pour se reposer apres une semaine d\'Angular');

export const TAB_Products: Product[] = [
    new Product('Hamac', 'Pour se reposer apres une semaine d\'Angular'),
    new Product('Voiture', 'Vehicule avec 4 roues et un moteur'),
    new Product('Velo', '2 roues et Pas de moteur'),
    new Product('Moto', '2 roues et  de moteur'),
    new Product('Pied', 'Pas roues et pas moteur'),
    new Product('Avron', 'Beaucoup de roues et moteur')

];
