Installation instructions:

Clone the repo:

git clone git@github.com:lvdwesthuizen/laravel-react-marketplace.git

cd react

Install the project dependencies:

npm install

Create .env in the react folder and add this line of config: 

VITE_API_BASE_URL=http://localhost:8000

Compile:

npm run dev

http://localhost:3000/

****

In another terminal: 

Install contents of Laravel vendor folder:

composer install

Copy the database at public/database/laravel_react_marketplace.sql

Import into phpmyadmin

Rename .env.example to .env and update these variables:

DB_DATABASE=laravel_react_marketplace

DB_PASSWORD=root

Then in the terminal run this command to generate an app key for the .env file:

php artisan key:generate

Start the server:

php artisan serve
