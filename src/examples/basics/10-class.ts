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

export default Book;
