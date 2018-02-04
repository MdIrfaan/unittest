export class Book {
    id: string;
    title: string;

    constructor(originalTitle: string, author: string) {
        this.id = originalTitle;
        this.title = author;
    }
}