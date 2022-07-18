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
        // Prevents unecessary re-display
        if (library.indexOf(b) < books.childElementCount - 1) return;
        
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML =
            `<h2>${b.title}</h2>
            <p>${b.author}</p>
            <p>${b.pages} pages</p>`;
        bookDiv.setAttribute('data-index', library.indexOf(b));

        const btnGroup = document.createElement('div');
        btnGroup.classList.add('button-group');

        // Adds read toggle
        const readBtn = document.createElement('button');
        readBtn.innerText = b.read ? 'READ' : 'NOT READ YET';
        readBtn.classList.add('read-btn');
        readBtn.addEventListener('click', () => {
            readBtn.innerText = (readBtn.innerHTML === 'READ') ? 'NOT READ YET' : 'READ';
            b.read = true ? false : true;
        });
        btnGroup.appendChild(readBtn);

        // Adds delete button to book
        const btn = document.createElement('button');
        btn.innerText = 'DELETE';
        btn.addEventListener('click', function(e) {
            e.target.parentElement.parentElement.remove();
        });
        btnGroup.appendChild(btn);
        
        bookDiv.appendChild(btnGroup);
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
        // Adds the book, re-displays library, and resets form
        addBook(title, author, pages, read);
        displayBooks();
        document.getElementById('add-form').reset();
    }
}