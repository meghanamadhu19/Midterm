
async function getBooks() {
  try {
    const response = await fetch("https://upadhayay.github.io/db.json");
    const data = await response.json();
    const books = data.books;

    console.log(books);
    const div = document.getElementById("books");

    books.forEach((item) => {
      const { id, title, year } = item;
      const book = document.createElement("article");

      book.innerHTML = `
        <article id="${id}">
          <div>
          <h1>${title}</h1>
          </div>
          Published Year: ${year}
        </article>
      `;

      div.appendChild(book);
    });
  } catch (error) {
    console.error(error);
  }
}


getBooks();

