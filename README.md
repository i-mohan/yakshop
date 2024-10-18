# YakShop

YakShop is a simple Node.js application to help a Yak shepherd manage their stocks of goods (milk and wool) produced by Yaks. It provides an HTTP REST API for querying the current herd and stock after a given number of days.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Endpoints](#available-endpoints)
- [Example](#example)
- [Development](#development)
- [License](#license)

## Installation

1. Clone this repository to your local machine:

   ```copy
   git clone https://github.com/i-mohan/yakshop.git
   ```

2. Navigate to the project folder:

   ```copy
   cd yakshop
   ```

3. Install the dependencies:
   ```copy
   npm install
   ```

## Usage

To start the YakShop server, you can use the following commands:

1. **Start the server:**
   ```copy
   npm start
   ```

This will start the server using `node`.

2. **Start the server in development mode:**
   ```copy
   npm run dev
   ```

This will start the server with `nodemon` to automatically restart the server on file changes.

### Running the Application

Once the server is running, you can access the YakShop APIs through the following endpoints.

The server will default to port `5000`, but you can change this by setting the `PORT` environment variable.

## Available Endpoints

### 1. Get Stock After `T` Days

**GET**`/yak-shop/stock/:days`

Returns the total amount of milk and skins produced by the herd after `T` days.

**Example Request:**

```copy
GET /yak-shop/stock/13
```

**Example Response:**

```json
{
  "milk": 1104.48,
  "skins": 3
}
```

### 2. Get Herd After `T` Days

**GET**`/yak-shop/herd/:days`

Returns the status of each Yak in the herd after `T` days, including their current age and when they were last shaved.

**Example Request:**

```copy
GET /yak-shop/herd/13
```

**Example Response:**

```json
{
  "herd": [
    {
      "name": "Betty-1",
      "age": 4.13,
      "age-last-shaved": 4.0
    },
    {
      "name": "Betty-2",
      "age": 8.13,
      "age-last-shaved": 8.0
    },
    {
      "name": "Betty-3",
      "age": 9.63,
      "age-last-shaved": 9.5
    }
  ]
}
```

## Example

You can test the application using `Postman`. For example, to get the stock data after 13 days, follow these steps:

### 1. Get Stock Data After 13 Days

- **Method**: GET
- **URL**: `http://localhost:5000/yak-shop/stock/13`

**Response Example:**

```json
{
  "milk": 1104.48,
  "skins": 3
}
```

### 2. Get Herd Status After 13 Days

- **Method**: GET
- **URL**: `http://localhost:5000/yak-shop/herd/13`

**Response Example:**

```json
{
  "herd": [
    {
      "name": "Betty-1",
      "age": 4.13,
      "age-last-shaved": 4.0
    },
    {
      "name": "Betty-2",
      "age": 8.13,
      "age-last-shaved": 8.0
    },
    {
      "name": "Betty-3",
      "age": 9.63,
      "age-last-shaved": 9.5
    }
  ]
}
```

### 3. Steps to Test in Postman

1. Open Postman and create a new request.
2. Set the method to `GET`.
3. Enter the URL as described above for the stock or herd data.
4. Press `Send` to get the response.
5. Review the response for the stock (milk and skins) or herd details.

## Development

For development, `nodemon` is set up to automatically restart the server on changes. You can start the development server with:

```copy
npm run dev
```

### Project Structure

- `src/{models,routes,utils}` - Contains the core application logic and API routes.
- `src/{data}` - Stores the input data (like `yaks.json`).
- `server.js` - Entry point of the application.
- `package.json` - Manages the project's dependencies and scripts.

## License

This project is licensed under the MIT License.
