# Book Keeper

Book Keeper is a simple yet functional React application created as a practice project to demonstrate the core concepts of managing a book list. It provides basic functionality to add, view, edit, and delete books. The application uses a mock backend powered by JSON-Server and integrates the Picsum API to generate random images for newly added books.

The app is built using the React Context API for state management and incorporates a reusable custom hook to ensure cleaner and more maintainable code, making it a great starting point for exploring these technologies.

![Home Page](/public/book-keeper.png)

## Features
🔍 **CRUD Operations:** Add, view, edit, and delete books in your collection.

🌄 **Random Book Images:** Fetches random book covers using the Picsum API.

⚖️ **Centralized State Management:** Utilizes React Context API to manage global state.

⏳ **Mock Backend:** JSON-Server simulates API calls and persists data locally.

🔧 **Custom Hook:** Simplifies and centralizes reusable logic for book management.

📋 **Responsive Design:** User-friendly and optimized for all screen sizes.

## Technology Used
**Frontend:** ReactJS, React Context API

**Mock Backend:** JSON-Server

**APIs:** Picsum API for random images

**Styling:** CSS

## Set Up and Installation

1. Clone the repository and go the project folder
```bash
git clone https://github.com/yourusername/book-keeper.git
cd book-keeper
```
2. Install dependencies:
```bash
npm install
```

3. Start the JSON-Server for the mock backend:
```
npm run server
```

4. Start the React development server:
```
npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)