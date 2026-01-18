# W & H View Residency - Hotel Booking Website

## Overview

This is a premium hotel booking website for "W & H View Residency," a hospitality brand focused on comfort, hygiene, trust, and calm luxury. The application is a full-stack TypeScript project with a React frontend and Express backend, using PostgreSQL for data persistence. The site features a dark luxury theme with gold accents, room listings, booking requests, and contact inquiry functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state caching and synchronization
- **Styling**: Tailwind CSS with CSS variables for theming (dark luxury theme with gold accents)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth scroll reveals and transitions
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Framework**: Express 5 (Node.js)
- **API Design**: RESTful JSON API with typed route definitions in `shared/routes.ts`
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod schemas generated from Drizzle table definitions using drizzle-zod
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Data Storage
- **Database**: PostgreSQL
- **Tables**:
  - `rooms`: Hotel room listings with details (name, description, price, features, images)
  - `booking_requests`: Customer booking inquiries with check-in/out dates, guest counts
  - `inquiries`: General contact form submissions
- **Schema Location**: `shared/schema.ts` contains all table definitions and Zod validation schemas

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # React components including shadcn/ui
│   │   ├── hooks/        # Custom React hooks for data fetching
│   │   ├── pages/        # Page components (Home, 404)
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared code between client and server
│   ├── schema.ts     # Drizzle table definitions and Zod schemas
│   └── routes.ts     # API route type definitions
└── migrations/       # Drizzle database migrations
```

### Key Design Patterns
- **Shared Types**: TypeScript types and Zod schemas are shared between frontend and backend via the `shared/` directory
- **Path Aliases**: Uses `@/` for client paths, `@shared/` for shared code
- **Component Architecture**: Modular components with UI primitives from shadcn/ui
- **Data Fetching**: Custom hooks wrapping React Query mutations and queries

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations with `npm run db:push`

### UI Libraries
- **Radix UI**: Accessible component primitives (dialogs, accordions, forms, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider component
- **class-variance-authority**: Component variant management

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **TypeScript**: Full type safety across the stack

### Fonts
- **Outfit**: Display/heading font
- **DM Sans**: Body text font
- Loaded via Google Fonts in `client/index.html`