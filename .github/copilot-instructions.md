# GitHub Copilot Instructions for hpcc-query

## Project Overview

This is a Node.js TypeScript application for querying HPCC Systems workunits via the `@hpcc-js/comms` library. The project uses ES modules (`"type": "module"` in package.json) and top-level await. Configuration is managed through environment variables using dotenv.

## Key Dependencies & Module System

### Critical: @hpcc-js/comms Version Compatibility

- **Currently using**: `@hpcc-js/comms` v2
- **v3 has breaking changes**: Uses CommonJS internals that conflict with ES modules (dynamic require errors)
- If encountering "Dynamic require is not supported" errors, downgrade to v2 or remove `"type": "module"` from package.json
- The library expects top-level await for async operations

### TypeScript Execution

- Uses `tsx` (not `ts-node`) for running TypeScript files directly
- Run command: `npm run launch` (executes `tsx src/index.ts`)
- No build step - tsx handles compilation on-the-fly

## HPCC Systems API Patterns

### Service Initialization

```typescript
import { WorkunitsServiceEx } from "@hpcc-js/comms";
import dotenv from "dotenv";

dotenv.config();

const wsWorkunits = new WorkunitsServiceEx({
  baseUrl: process.env.HPCC_BASE_URL || "https://play.hpccsystems.com:18010",
  userID: process.env.HPCC_USER_ID || "gordon",
  password: process.env.HPCC_PASSWORD || "",
});
```

### Configuration

- Credentials are stored in `.env` file (gitignored)
- Use `.env.example` as a template
- Environment variables: `HPCC_BASE_URL`, `HPCC_USER_ID`, `HPCC_PASSWORD`
- Always provide fallback values when accessing `process.env`

### API Response Structure

- `WUQuery()` returns: `response.Workunits.ECLWorkunit` (array of workunits)
- `WUInfo({ Wuid })` returns: `response.Workunit` (single workunit details)
- All API calls are async/await - use top-level await in main entry point

## Code Style

- Top-level await is used directly in `src/index.ts` (no IIFE wrapper needed)
- Async functions for reusable query operations
- Console logging for output (this is a demo/query tool, not a service)

## Common Tasks

### Adding New HPCC Queries

1. Import appropriate service from `@hpcc-js/comms` (e.g., `WorkunitsServiceEx`, `TopologyServiceEx`)
2. Create service instance with connection params
3. Define async function for the query operation
4. Access nested response properties (responses often have wrapper objects)

### Troubleshooting Module Errors

- If seeing "Dynamic require" errors: Check @hpcc-js/comms version (use v2) or switch to CommonJS
- If "top-level await not supported": Ensure `"type": "module"` is in package.json and using tsx
