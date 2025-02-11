
# Cozy Corner Plants - Frontend

This repository contains the frontend code for the Cozy Corner Plants Chrome extension. It provides an interactive, plant-growing experience with customizable pots, and motivational phrases rendering.

## Features

- Interactive pixel plants that grow through 3 stages
- Customizable pots with a variety of colors.
- Motivational phrases generated via Google Gemini API.
- Real-time syncing of plant data using Firebase.


## Project Setup

### Prerequisites:
1. Make sure you have Node.js installed (v14 or higher).
2. Firebase setup is already handled on the backend, so you don’t need to configure Firebase yourself if you are using the deployed backend. 
- **Note**: Developers working on the project will need Firebase credentials for the backend.
## Frontend Setup (for local development):

### 1. Clone the repository:

```bash
git clone https://github.com/kstinanguyen/chrome-extension-cozy-corner-plants.git
cd chrome-extension-cozy-corner-plants
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Build the extension:
```bash
npm run build
```

### 4. Load the extension in Chrome:
- Open Chrome and go to ```chrome://extensions/```.
- Enable **Developer mode**.
- Click on **Load unpacked** and select the ```extension``` folder from your project directory.

Now you should be able to use the Cozy Corner Plants Chrome extension locally!