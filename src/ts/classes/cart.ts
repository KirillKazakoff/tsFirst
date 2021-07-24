import IMovie from '../interfaces/IMovie';

export default class Cart {
    private items: IMovie[] =[];

    add(item: IMovie): void {
        this.items.push(item);
    }

    getAll(): IMovie[] {
        return [...this.items];
    }
}
