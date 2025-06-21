# AnswersAi Frontend Engineer Take-Home Project

This is a responsive frontend web app built with React, TypeScript, TailwindCSS, and Firebase Authentication, developed as part of the AnswersAi Frontend Engineer Take-Home assignment.

## Core Features

-   **Interactive UI**: A fully responsive dashboard with collapsible sections and a slide-over panel for editing variables.
-   **Firebase Auth**: Secure login/logout.
-   **Multi-Select**: Choose multiple variables to see their combined effect.
-   **Contextual Info**: Hover over a variable to see a detailed description.
-   **Redux State Management**: Centralized state for a predictable data flow.
-   **Routing** : Route protection based on auth state

## Tech Stack

-   **Vite + React + TypeScript**: For a fast development experience and type-safe code.
-   **Redux Toolkit**: For robust and scalable state management.
-   **Tailwind CSS**: For rapid, utility-first styling to quickly build the custom UI.
-   **Firebase**: For handling user authentication.
-   **Routing** : React Router DOM

## Getting Started

### Prerequisites

-   Node.js (v18+)
-   npm

### Setup

1.  **Clone & Install**:
    ```bash
    git clone https://github.com/prudhvij15/Frontend-Engineer-Take-Home.git
    cd data-viz-platform
    npm install
    ```

2.  **Environment Variables**:
    This project needs Firebase for authentication. Create a `.env` file in the root directory and add your Firebase project credentials:
    ```
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
    VITE_FIREBASE_APP_ID="YOUR_APP_ID"
    ```

3.  **Run**:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## Technical Decisions & Trade-offs

- Redux Toolkit was chosen for state management to support scalability and maintainability.
- TailwindCSS for consistent design tokens and rapid UI styling.
- Firebase Auth (Email/Password) was used to avoid complexity of custom backend setup.
- Chart section uses a placeholder instead of real chart logic to focus on UI.


## Known Limitations

- No persistent database for variable states.
- The chart and scenario data are currently hardcoded.
- The chart doesn't currently react to variable changes. This requires connecting the Redux state to the chart component.
- Some UI buttons ("Rerun", "Autofill", etc.) are placeholders.

## Time Spent

Approximately 4-5 hours:

- Project setup + Firebase: 45 mins
- Dashboard + layout: 2 hours
- Slide-over + variable logic: 1 hour
- Styling & responsive: 1 hour
