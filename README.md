Welcome to Byte & Slice, a simple URL shortener built with Next.js and Supabase. You can use this project, contribute to it, or even host it on your own server. Created by [Jotis](https://jotis.me).
# Running the project
### Requirements
- Bun (or any other package manager)
> [!NOTE]
> You can also migrate the project to the package manager of your choice.
- Node.js
- A Supabase account

### Steps
1. Clone this repository
```sh
git clone https://github.com/Jotis1/byteandslice.git
```
2. Run the [migrations](./app/utils/supabase/migration.sql) located in `app/utils/supabase` into a Supabase database or a valid PostgreSQL database.
3. Copy the `.env.example` file to `.env.local` and fill in the required environment variables.
4. Install the dependencies
```sh
bun install
```
5. Run the project
```sh
bun dev
```

### Environment variables
- `SUPABASE_URL`: The URL of your Supabase project.
- `SUPABASE_KEY`: The service key of your Supabase project.
- `NEXT_PUBLIC_LOCAL_URL`: The URL of the local server (in development should be `http://localhost:3000`) and in production should be the URL of the production server (e.g. `https://link.jotis.me`).

### Customization
- You can fully customize the project and don't forget to update the metadata locate in[ `app/layout.tsx`](./app/layout.tsx).

### License
This project is licensed under the GNU General Public License v3.0. You can read the full license [here](./LICENSE).