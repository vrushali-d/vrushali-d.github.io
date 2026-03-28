// 1. Helper to parse Frontmatter and convert Date string to Date Object
function parsePost(text) {
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
    const match = text.match(frontmatterRegex);
    
    if (!match) return { metadata: {}, content: text };

    const metadataRaw = match[1];
    const content = match[2];
    const metadata = {};

    metadataRaw.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            let value = valueParts.join(':').trim().replace(/^"(.*)"$/, '$1');
            
            // Convert date string to actual Date Object
            if (key.trim() === 'date') {
                value = new Date(value);
            }
            metadata[key.trim()] = value;
        }
    });

    return { metadata, content };
}

// 2. Function to create the HTML for a post
function createPostElement(postData) {
     const { metadata, content } = postData;
     const htmlContent = marked.parse(content);

     // Main Card
     let card = document.createElement('div');
     card.className = "blog-card";
     
     // Meta Data Section
     let metaEl = document.createElement('div');
     metaEl.className = "post-meta";
     let metaHTML = '';
     if (metadata.topic) metaHTML += `<span class="post-topic">${metadata.topic}</span>`;
     if (metadata.date instanceof Date && !isNaN(metadata.date)) {
         const formattedDate = metadata.date.toLocaleDateString('en-US', {
             year: 'numeric',
             month: 'long',
             day: 'numeric'
         });
         metaHTML += `<span class="post-date">${formattedDate}</span>`;
     }
     metaEl.innerHTML = metaHTML;
     card.appendChild(metaEl);

     // Content Wrapper (This collapses)
     let contentWrapper = document.createElement('div');
     contentWrapper.className = "post-content-wrapper";
     contentWrapper.innerHTML = htmlContent;
     card.appendChild(contentWrapper);

     // Read More Button
     let btnEl = document.createElement('button');
     btnEl.innerText = "Read Full Post";
     btnEl.addEventListener('click', () => {
         if (contentWrapper.classList.contains("expanded")) {
             contentWrapper.classList.remove("expanded");
             btnEl.innerText = 'Read Full Post';
             card.scrollIntoView({ behavior: 'smooth' });
         } else {
             contentWrapper.classList.add("expanded");
             btnEl.innerText = 'Show Less';
         }
     });
     card.appendChild(btnEl);

     return card;
}

// 3. Main loader with Sorting (Optimized with Promise.all)
async function loadAllPosts() {
     const postContainer = document.getElementById('posts-container');

     try {
         // Start all fetch requests in parallel
         const postPromises = postFiles.map(async (fileName) => {
             const response = await fetch(`./posts/${fileName}`);
             if (!response.ok) throw new Error(`Failed to fetch ${fileName}`);
             const rawText = await response.text();
             return parsePost(rawText);
         });

         // Wait for all promises to resolve
         const allPosts = await Promise.all(postPromises);

         // Sort: Newest first
         allPosts.sort((a, b) => b.metadata.date - a.metadata.date);

         // Clear and render
         postContainer.innerHTML = '';
         allPosts.forEach(post => {
             postContainer.appendChild(createPostElement(post));
         });

     } catch (error) {
         console.error("Error loading posts:", error);
         if (postContainer) {
            postContainer.innerHTML = '<p>Error loading posts.</p>';
         }
     }
}

// 4. Initialization
loadAllPosts();
