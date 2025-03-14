# Byte & Slice

Welcome to **Byte & Slice** – a simple, free, and open-source URL shortener built with Next.js and Supabase. Whether you're using it as-is, contributing, or hosting your own instance, you're in the right place.

## Features

- **Modern Tech Stack:** Built with Next.js and Supabase for robust performance.
- **Open Source:** Fully customizable and community-driven.
- **No Tracking:** Your privacy is paramount – absolutely no tracking of any kind.

## Requirements

Before you begin, ensure you have the following installed:

> **Note:** You can migrate the project to any package manager of your choice.
- [Bun](https://bun.sh) (or your preferred package manager)  
- [Node.js](https://nodejs.org)
- A [Supabase](https://supabase.com) account

## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Jotis1/byteandslice.git
    ```
2. **Run Database Migrations:** Execute the [migration script](./app/utils/supabase/migration.sql) found in `app/utils/supabase` on your Supabase or PostgreSQL database.

3. Configure Environment Variables: Copy `.env.example` to `.env.local` and fill in the required environment variables.

4. **Install Dependencies:**
   ```sh
   bun install
   ```

5. **Run the Development Server:**
   ```sh
    bun dev
    ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Environment Variables
Set the following environment variables in a `.env.local` file:
- `SUPABASE_URL`: Your Supabase URL.
- `SUPABASE_KEY`: Your Supabase service key.
- `NEXT_PUBLIC_LOCAL_URL`: The base URL of your application (for development, typically `http://localhost:3000`; for production, the URL of your deployed application, e.g., `https://link.jotis.me`).

## Customization
You can fully customize the project to fit your needs. Don't forget to update the metadata in [`app/layout.tsx`](./app/layout.tsx) to reflect your project's details.

## License

This project is licensed under the GNU General Public License v3.0. Please refer to the full license for more details.