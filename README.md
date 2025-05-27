# Finnish Flashcards for Vocabulary

An app to learn Finnish using flashcards, integrated with [finnfast.fi API](https://finnfast.fi/api-docs) and a Laravel backend for saving favorites.

---

## Features:
- **Flashcards**: Click to flip and view translations.
- **Save Favorites**: Store favorite words.
- **Toggle Views**: Switch between flashcards and Name-Color Manager.

---

## Tech Stack:
- **Frontend**: React, Axios
- **Backend**: Laravel (PHP)
- **API**: finnfast.fi

---

## Installation:

1. Clone the repo:

   ```bash
   git clone https://github.com/Fizzaishfaq110/Finnish-Flashcard.git
   ```
2. Backend:

    1. Install dependencies:

        ```bash
        composer install
        ```

    2. Set up .env and run migrations:

        ```bash
        php artisan migrate
        ```

    3. Start the server:

        ```bash
        php artisan serve
        ```

3. Frontend:

    1. Install dependencies:

        ```bash
        npm install
        npm run dev
        ```

