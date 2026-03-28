# Blog Project Context

This is a lightweight, frontend-focused personal blog project that dynamically renders Markdown posts using Vanilla JavaScript and `marked.js`.

## Project Overview

- **Architecture**: A static site structure served by a minimal Node.js server. 
- **Core Technologies**: 
    - **Frontend**: HTML5, CSS3, Vanilla JavaScript.
    - **Markdown Parsing**: [Marked.js](https://marked.js.org/) (loaded via CDN).
    - **Backend**: Node.js `http` module for static file serving.
- **Key Features**:
    - **Dynamic Loading**: Posts are fetched from the `/posts` directory.
    - **Frontmatter Support**: Metadata (title, date, topic) is extracted from Markdown files.
    - **Parallel Fetching**: Uses `Promise.all()` to load multiple posts concurrently for better performance.
    - **Interactive UI**: Blog posts are displayed in cards with a "Read More" toggle for expanding/collapsing content.

## Directory Structure

- `app.js`: Main application logic (fetching, parsing, and rendering).
- `blogs.js`: Data manifest containing the list of Markdown files to load.
- `index.html`: Main entry point and layout.
- `style.css`: Project styling and responsive layout.
- `posts/`: Directory containing `.md` files for blog articles.
- `images/`: Static assets for the blog.
- `PerformanceOptimization.md`: Documentation on the recent shift from sequential to parallel loading.
- `suggestions.md`: Roadmap for future improvements (Build steps, Pagination, SSG).

## Building and Running

### Development Server
To run the project locally, use:
```bash
npx serve .
# OR
npm start
```
The server will be available at the URL provided in your terminal (usually `http://localhost:3000`).

### Adding New Posts
1.  Create a new `.md` file in the `posts/` directory.
2.  Include YAML-like frontmatter at the top:
    ```markdown
    ---
    title: "Your Title"
    date: "YYYY-MM-DD"
    topic: "Your Topic"
    ---
    ```
3.  Add the filename to the `postFiles` array in `blogs.js`.

## Development Conventions

- **Parsing**: Custom `parsePost` function in `app.js` handles both metadata and content extraction.
- **Styling**: Follows a clean, minimal aesthetic with a focus on readability.
- **Performance**: Prioritize minimizing network requests. Future plans include bundling posts into a single `posts.json` file.
