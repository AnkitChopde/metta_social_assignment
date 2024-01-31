
# World By Currency App

## Overview
The World By Currency app allows users to search for countries based on their currency. Users can enter a currency code or name, and the app will fetch and display information about countries using that currency. The app includes debouncing for a smoother search experience and simple pagination to navigate through the search results.

## Features

### Currency Search
- Users can enter a currency code or name in the search bar.
- The app fetches and displays information about countries using the entered currency.
- Debouncing is implemented to delay the search execution until a certain period has elapsed after the last input, improving performance.

### Pagination
- If the search results contain more than 10 countries, pagination controls are displayed.
- Users can navigate through the pages to view additional search results.

## Implementation

### Debouncing
- The app uses a custom debounce function to delay the execution of the search function after user input.
- The debounce function ensures that the search is only triggered after a certain delay, preventing unnecessary API calls for each keystroke.

### Pagination
- Simple pagination controls (Previous and Next buttons) are displayed if there are more than 10 search results.
- The app calculates the total number of pages based on the number of countries and the items per page.

## Styling
- Basic styling is applied to the search input, country cards, and pagination buttons for a clean and user-friendly interface.
- Disabled buttons have a distinct style to indicate their disabled state.

## Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the app using `npm start`.
4. Open the app in your browser at `http://localhost:3000`.

## Dependencies
- React
- Axios

