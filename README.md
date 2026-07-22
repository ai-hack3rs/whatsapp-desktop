# WhatsApp Desktop Wrapper

A native Linux desktop application wrapper for WhatsApp Web, built with Electron. This project aims to provide a seamless, integrated experience for Linux users, mimicking native application behaviors such as system tray notifications and window controls.

## Features

- **Native Linux Experience**: Wrapped in Electron to run as a standalone desktop app rather than a browser tab.
- **GNOME Integration**: Designed to look and feel at home on modern Linux desktop environments.
- **Background Performance**: Optimized to run efficiently in the background.
- **GitHub Actions Ready**: Automated CI/CD pipeline for building and releasing `.deb` and `.zip` packages on GitHub.

## Project Structure

- `whatsapp-desktop/`: Contains the Electron source code.
  - `main.js`: The main Electron process script handling window creation and system integration.
  - `preload.js`: Preload script for secure IPC communication.
  - `forge.config.js`: Configuration for Electron Forge packager and makers.
  - `assets/`: Contains application icons and branding.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- `npm` (comes with Node.js)
- A Linux environment to build and test the `.deb` package.

### Installation & Build

1. Clone the repository and navigate to the application directory:
   ```bash
   cd whatsapp-desktop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application locally for development:
   ```bash
   npm start
   ```

4. Build the `.deb` and `.zip` packages:
   ```bash
   npm run make
   ```

5. Install the generated `.deb` package (the exact filename will vary based on version and architecture):
   ```bash
   sudo dpkg -i out/make/deb/x64/whatsapp-desktop-1.0.0-amd64.deb
   ```

## Continuous Integration

This repository includes a GitHub Actions workflow (`.github/workflows/build-and-release.yml`) that automatically builds and publishes the `.deb` and `.zip` packages whenever a new version tag (e.g., `v1.0.0`) is pushed to the repository. 

You can also trigger the build manually from the GitHub Actions tab.

## License

This project is licensed under the MIT License.
