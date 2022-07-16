let library = [];

addBook("The Freedom of Night", "Angel Smith", 139, true);
addBook("hard pass", "Jordyn Spool", 888, false);
addBook("Grease in The Wool", "Carl Cob", 287, false);
addBook("Gyroscape", "Dani Loop", 355, true);

displayBooks();

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBook(title, author, pages, read = false) {
    library.push(new Book(title, author, pages, read));
}

function displayBooks() {
    const books = document.querySelector('.books');
    books.innerHTML = "";

    for (let b of library) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML =
            `<h2>${b.title}</h2>
            ${b.author}<br>
            ${b.pages} pages<br>
            ${b.read ? 'Read' : 'Not read yet'}`;

        books.appendChild(bookDiv);
    }
}

function addFromButton() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    if (title !== '' && author !== '' && pages !== '') {
        addBook(title, author, pages, read);
        resetForm();
        displayBooks();
    }
    else {
        const invalid = document.getElementById('invalid');
        invalid.classList.toggle('invalid')
    }
}


function resetForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').value = '';
}