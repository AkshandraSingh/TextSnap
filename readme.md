# TextSnap 📸📝

TextSnap is a Node.js project that allows you to effortlessly convert image text into editable text format. Say goodbye to manual typing and hello to convenient text extraction!

## Features

- Extract text from images with ease
- Three convenient APIs:
  1. **extractText**: Convert image text and display it
  2. **extractTextSave**: Save converted text in MongoDB
  3. **extractTextSaveTxt**: Save converted text in a .txt file
- Sleek and intuitive UI designed with HTML and CSS

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install`.
3. Start the server with `npm start`.
4. Access the UI at `http://localhost:9000`.
5. Upload an image containing text and choose your preferred API option.

## APIs

### 1. extractText

This API converts image text into text and displays it directly on the UI.

Endpoint: `/textSnap/extractText`
Method: POST
Request Body: { image: [image file] }

### 2. extractTextSave

Converts image text and saves it in MongoDB for future reference.

Endpoint: `/textSnap/extractTextSave`
Method: POST
Request Body: { image: [image file] }

### 3. extractTextSaveTxt

Converts image text and saves it in a .txt file for easy access.

Endpoint: `/textSnap/extractTextSaveTxt`
Method: POST
Request Body: { image: [image file] , fileName: [Name for file] }

## Technologies Used

- Node.js
- MongoDB
- HTML
- CSS

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.
