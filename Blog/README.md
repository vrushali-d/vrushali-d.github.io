# Personal Blog

A lightweight, high-performance personal blog built with Vanilla JavaScript and [Marked.js](https://marked.js.org/).

## Features

- 🚀 **Parallel Loading**: Fetches blog posts concurrently for fast rendering.
- 📝 **Markdown Driven**: Write your posts in Markdown and they'll be rendered dynamically.
- 🎨 **Minimalist Design**: Clean, responsive layout with a "Read More" collapse/expand feature.
- 🛠️ **No Frameworks**: Built with pure JS, HTML, and CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for the local development server)

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Run the server:**
    ```bash
    npx serve .
    ```

3.  **View the blog:**
    Open the URL provided by the command (usually [http://localhost:3000](http://localhost:3000)) in your browser.

## Adding New Posts

1.  Create a new `.md` file in the `posts/` directory.
2.  Add YAML-like frontmatter at the top:
    ```markdown
    ---
    title: "Post Title"
    date: "YYYY-MM-DD"
    topic: "Topic Name"
    ---
    ```
3.  Add the filename to the `postFiles` array in `blogs.js`.

## Credits

Project made by Vrushali + Gemini CLI.
