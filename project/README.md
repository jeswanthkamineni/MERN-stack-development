# AI-ENABLED SMART TEMPLE MANAGEMENT SYSTEM USING THE MERN STACK

A professional academic MERN application for managing devotees, darshan and pooja bookings, donations, events and temple administration. It includes an AI Temple Assistant with a secure server-side integration point and deterministic fallback responses.

## Features
- Public home, darshan, pooja, donations and events pages
- JWT authentication with User/Admin roles and protected booking routes
- MongoDB/Mongoose models for all core temple records
- User dashboard and admin statistics/users views
- Server-side AI assistant endpoint with fallback support
- Responsive devotional UI for desktop, tablet and mobile

## Structure
`client/` contains the Vite React application. `server/` contains Express routes, Mongoose models, authentication middleware and seed data.

## Run locally
1. Install Node.js 18+ and MongoDB.
2. From this directory run `npm install`.
3. Copy `.env.example` to `server/.env` and set `MONGODB_URI` and `JWT_SECRET`.
4. Seed development catalog data with `npm run seed`.
5. Start both packages with `npm run dev`.
6. Open `http://localhost:5173`.

The client remains navigable with demo catalog data when the API is not running. Bookings and authentication require the server and MongoDB.

## API overview
`/api/auth`, `/api/darshan`, `/api/poojas`, `/api/darshan-bookings`, `/api/pooja-bookings`, `/api/donations`, `/api/events`, `/api/event-registrations`, `/api/bookings`, `/api/admin`, `/api/ai`.

## Admin
Promote a seeded user to `Admin` in MongoDB to access `/admin`. Admin APIs require a valid JWT and the Admin role.

## Future enhancements
Payment gateway integration, live slot capacity, email/SMS notifications, audit logs, richer AI retrieval from temple records and report exports.
