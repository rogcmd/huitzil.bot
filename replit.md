# replit.md

## Overview

This is a Discord bot project built with discord.js v14 and the @constatic/base framework. The bot provides fighting game frame data information (currently for Vampire Savior) through slash commands, along with utility commands like ping and a counter demo. The architecture uses a modular command/event/responder pattern with TypeScript and modern ESM imports.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Framework & Runtime
- **@constatic/base**: Discord bot framework that provides bootstrapping, command creation, event handling, and responder systems
- **discord.js v14**: Core Discord API library
- **TypeScript with ESM**: Uses ES modules (`"type": "module"`) with path aliases for clean imports
- **tsx**: Development runtime for TypeScript execution without compilation

### Project Structure Pattern
```
src/
├── discord/           # All Discord-related code
│   ├── commands/      # Slash commands organized by category
│   ├── events/        # Event listeners
│   └── responders/    # Button/component interaction handlers
├── functions/         # Utility functions
└── env.ts            # Environment validation with Zod
```

### Command System
- Commands are created using `createCommand()` from the base framework
- Supports subcommands (see framedata commands)
- Responders handle button interactions with URL-like custom IDs (e.g., `counter/:current`)
- Parameters are parsed from custom IDs using schemas or parse functions

### Path Aliases
The project uses TypeScript path aliases mapped in both `tsconfig.json` and `package.json`:
- `#base` → Discord setup (command/event creators)
- `#functions` → Utility functions
- `#env` → Environment configuration
- `#database`, `#server`, `#menus`, `#tools` → Reserved for future use

### Response Utility System
The `res` utility in `src/functions/utils/res.ts` creates Discord Components V2 containers with predefined colors from `constants.json`. Usage: `res.primary("message")` or `res.success("message").with({ flags: [...] })`.

### Data Architecture
Frame data is organized hierarchically:
- `GameData` → contains game info and character list
- `CharacterInfo` → contains character name, icon, and moves
- `MoveData` → contains frame data (startup, active, recovery, etc.)

Currently only Vampire Savior (vsav) data exists with Felicia and Morrigan characters.

## External Dependencies

### Discord API
- **discord.js v14.25.1**: Core Discord bot functionality
- **@magicyan/discord**: Helper utilities for creating Discord UI components (containers, sections, rows, etc.)

### Framework
- **@constatic/base**: Bot bootstrapping, command/event/responder creation, environment validation

### Validation
- **zod v4**: Schema validation for environment variables and responder parameters

### Build Tools
- **tsx**: TypeScript execution for development
- **typescript v5.9**: Type checking and compilation

### Environment Variables Required
- `BOT_TOKEN` (required): Discord bot token
- `WEBHOOK_LOGS_URL` (optional): Webhook URL for logging
- `GUILD_ID` (optional): Guild ID for development/testing