import Book from '../basics/10-class';

namespace tuples {

  class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }

    public getTitle(): string {
      return this.title;
    }

    public getAuthor(): string {
      return this.author;
    }

  }

  const book1 = new Book('Typescript', 'Bill Gates');
  const book2 = new Book('Other Book', 'Other author');

  interface KeyValuePairs<K, V> extends Array<K | V> {
    0: K;
    1: V;
  }

  const catalogLocation: KeyValuePairs<string, Book> = ['A 123.456', book1];
  catalogLocation[2] = 'B 555.888';
  catalogLocation[3] = book2;

  // Using tuples:
  // const catalogLocation: [string, Book] = ['A 123.456', book1];
  // catalogLocation[2] = 'B 555.888';
  // catalogLocation[3] = book2;

  console.log(`${catalogLocation[0]} - ${catalogLocation[1].getTitle()}`);
}
