# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start Vite development server with hot reload
- `npm run build` - Build production-ready application  
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a React application built with Vite, featuring shadcn/ui components and Tailwind CSS v4. The project uses Redux Toolkit for state management with persistence and React Router for navigation.

### Key Technologies
- **Frontend**: React 18 with Vite build tool
- **Styling**: Tailwind CSS v4 with shadcn/ui component library (New York style)
- **State Management**: Redux Toolkit with Redux Persist for auth state
- **Routing**: React Router v6 with role-based route protection
- **UI Components**: shadcn/ui with Lucide React icons
- **Notifications**: React Toastify and SweetAlert2

### Directory Structure
- `src/components/` - Page components organized by feature (Dashboard, SignIn, etc.)
- `src/components/ui/` - Reusable shadcn/ui components (button, input, etc.)
- `src/assets/genericComponents/` - Shared UI components (Header, Sidebar, Loader)
- `src/Navigation/` - Router configuration and route protection components
- `src/redux/` - Redux store, slices, and API services
- `src/lib/` - Utility functions (includes `cn` function for class merging)
- `config.js` - Application constants (paths, error messages, pagination)

### Authentication & Routing
The app uses a three-tier route protection system:
- **PublicRoute**: Accessible without authentication (login, register)
- **PrivateRoute**: Requires authentication 
- **ModerateRoute**: Requires specific permissions/roles

Routes are configured in `src/Navigation/DataRouteConfig.jsx` and mapped in `RouterConfig.jsx`.

### State Management
Redux store combines:
- `auth` slice - User authentication state (persisted)
- `api` slice - RTK Query API endpoints

### Styling System
- Uses Tailwind CSS v4 with CSS variables for theming
- Custom utility function `cn()` in `src/lib/utils.js` merges Tailwind classes
- Dark mode support configured via CSS classes
- shadcn/ui components use consistent design tokens

### Path Aliases
Vite configured with `@` alias pointing to `src/` directory for cleaner imports.