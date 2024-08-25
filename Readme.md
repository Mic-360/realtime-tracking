# Realtime Tracking

Realtime Tracking is a web application that allows users to share their geolocation in real-time. The application uses WebSockets to provide instant updates of users' locations on a map.

## Features

- Real-time location tracking using WebSockets
- Interactive map with user markers
- Automatic updates of user positions
- Removal of user markers upon disconnection

## Technologies Used

- Node.js
- Express.js
- Socket.io
- Leaflet.js
- EJS (Embedded JavaScript templates)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mic-360/realtime-tracking.git
   ```
2. Navigate to the project directory:
   ```sh
   cd realtime-tracking
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

- [`app.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FFlow%2FDesktop%2FProjects%2FServers%2Frealtime-tracking%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '.\\Servers\realtime-tracking\app.js'): Main server file that sets up the Express server and Socket.io.
- [`public/script.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FFlow%2FDesktop%2FProjects%2FServers%2Frealtime-tracking%2Fpublic%2Fscript.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '.\\Servers\realtime-tracking\public\script.js'): Client-side JavaScript for handling geolocation and WebSocket communication.
- [`public/style.css`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FFlow%2FDesktop%2FProjects%2FServers%2Frealtime-tracking%2Fpublic%2Fstyle.css%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '.\\Servers\realtime-tracking\public\style.css'): CSS for styling the map.
- [`views/index.ejs`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FFlow%2FDesktop%2FProjects%2FServers%2Frealtime-tracking%2Fviews%2Findex.ejs%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '.\\Servers\realtime-tracking\views\index.ejs'): EJS template for rendering the main page.
- [`package.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FFlow%2FDesktop%2FProjects%2FServers%2Frealtime-tracking%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '.\\Servers\realtime-tracking\package.json'): Project metadata and dependencies.

## How It Works

1. The server is set up using Express and Socket.io in [`app.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FFlow%2FDesktop%2FProjects%2FServers%2Frealtime-tracking%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D 'c:\\Users\Flow\Desktop\Projects\Servers\realtime-tracking\app.js').
2. When a user connects, their geolocation is tracked using the Geolocation API in [`public/script.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FFlow%2FDesktop%2FProjects%2FServers%2Frealtime-tracking%2Fpublic%2Fscript.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D 'c:\\Users\Flow\Desktop\Projects\Servers\realtime-tracking\public\script.js').
3. The user's location is sent to the server via WebSocket and broadcasted to all connected clients.
4. The map is updated in real-time to reflect the user's location using Leaflet.js.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is unlicensed.
