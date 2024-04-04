# Movix

Movix is a React-based web application that allows users to browse popular and top-rated movies, along with their details. It also provides a search feature to find specific movies within the application.

---

## Features:

- Display popular and top-rated movies.
- View details of each movie including synopsis, release date, rating etc. .
- Search for movies by title.

## Setting it up locally

**1.** Clone the repository
```bash
git clone https://github.com/RitwikKapoor/React-Movix.git
```
**2.** Navigate to the project directory
```bash
cd React-Movix
```
**3.** Adding environment  variables
- Create a `.env.local` file and add the following environment variables 
```bash
VITE_APP_TMDB_TOKEN=
```
- Refer to ```https://developer.themoviedb.org/reference/intro/getting-started```
to get the token

**4.** Install the dependencies
```bash
npm install 
```
**5.** Run the project locally on port 5173
```bash
npm run dev
