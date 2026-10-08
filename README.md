# Next.js Warm-up

Run: `npm install`, then `npm run dev` and open http://localhost:3000.

## What I learned

1. **What does Next.js provide beyond React alone?** File-based routing, server rendering with Server Components, API route handlers and a ready build setup, so frontend and backend code can live in one project.
2. **Why does the counter need 'use client'?** It uses `useState` and `onClick`, which only run in the browser. `'use client'` makes it a Client Component whose JavaScript is sent to the browser.
3. **Where does the code in app/api/message/route.js run?** On the server (Node.js), never in the browser. The browser only receives the JSON response.
4. **How is this endpoint similar to an Express route?** Both map an HTTP method and path (GET /api/message) to a function that returns JSON. In Next.js the path comes from the folder structure instead of `app.get()`.
5. **Why must secrets remain on the server?** Everything sent to the browser can be read by anyone, so API keys and database secrets belong only in server-side code and in environment variables without the `NEXT_PUBLIC_` prefix.