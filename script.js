let library = [];

addBook("The Freedom of Night", "Angel Smith", 139, true);
addBook("hard pass", "Jordyn Spool", 888, false);
addBook("Grease in The Wool", "Carl Cob", 287, false);
addBook("Gyroscape", "Dani Loop", 355, true);

displayBooks();

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Adds new book to library
function addBook(title, author, pages, read = false) {
    library.push(new Book(title, author, pages, read));
}


// Generates the display of all stored books
function displayBooks() {
    const books = document.querySelector('.books');
    books.innerHTML = "";

    for (let b of library) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML =
            `<h2>${b.title}</h2>
            ${b.author}<br>
            ${b.pages} pages<br>`;

        // Adds read or not toggle
        const readBtn = document.createElement('button');
        readBtn.innerText = b.read ? 'Read' : 'Not read yet';
        readBtn.addEventListener('click', function() {
            readBtn.innerText = (readBtn.innerHTML === 'Read') ? 'Not read yet' : 'Read';
        });
        bookDiv.appendChild(readBtn);

        // Adds delete button to book
        const btn = document.createElement('button');
        btn.innerText = 'delete';
        btn.addEventListener('click', function(e) {
            e.target.parentElement.remove();
        });
        bookDiv.appendChild(btn);

        books.appendChild(bookDiv);
    }
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addFromButton);

// Adds book to library when button is clicked
function addFromButton() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    // Checks if all required fields are filled out
    if (title !== '' && author !== '' && pages !== '') {
        addBook(title, author, pages, read);
        displayBooks();
        const form = document.getElementById('add-form');
        form.reset();
    }
}