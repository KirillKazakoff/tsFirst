import IMovie from '../interfaces/IMovie';

export default class Movie implements IMovie {
    constructor(
       readonly year: number,
       readonly country: string,
       readonly slogan: string,
       readonly genre: string,
       readonly time: string,
    ) {}
}
