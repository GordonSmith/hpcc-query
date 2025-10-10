# hpcc-query

A Node.js application for querying HPCC Systems workunits using the `@hpcc-js/comms` library.

## Description

This project demonstrates how to interact with HPCC Systems ESP services to fetch and display workunit information. It connects to the HPCC Systems playground server and retrieves workunit data.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Configuration

The application uses environment variables for configuration. Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Then edit `.env` to set your HPCC Systems credentials:

```env
HPCC_BASE_URL=https://play.hpccsystems.com:18010
HPCC_USER_ID=your-username
HPCC_PASSWORD=your-password
```

**Environment Variables:**

- `HPCC_BASE_URL` - HPCC Systems server URL (default: `https://play.hpccsystems.com:18010`)
- `HPCC_USER_ID` - Username for authentication (default: `gordon`)
- `HPCC_PASSWORD` - Password for authentication (default: empty string)

**Note:** The `.env` file is gitignored to keep your credentials secure. Never commit credentials to the repository.

## Usage

Run the application:

```bash
npm run launch
```

This will:

1. Connect to the HPCC Systems playground server
2. Fetch a list of workunits
3. Display workunit information
4. Fetch detailed information about the first workunit

## Debugging in VS Code

To debug this TypeScript application in VS Code:

1. **Set breakpoints**: Click in the left margin of `src/index.ts` to add breakpoints

2. **Start debugging**: Press `F5` or go to **Run → Start Debugging**

3. **Debug controls**:
   - `F5` - Continue
   - `F10` - Step Over
   - `F11` - Step Into
   - `Shift+F11` - Step Out
   - `Shift+F5` - Stop

The debugger will pause at your breakpoints, allowing you to inspect variables, evaluate expressions in the Debug Console, and step through the code.

## Project Structure

```
hpcc-query/
├── .env.example       # Environment variables template
├── src/
│   └── index.ts       # Main application entry point
├── package.json       # Project dependencies and scripts
├── LICENSE           # MIT License
└── README.md         # This file
```

## Dependencies

- **@hpcc-js/comms**: Library for communicating with HPCC Systems ESP services (v3)
- **tsx**: TypeScript execution environment for Node.js
- **dotenv**: Loads environment variables from .env file

## License

MIT
