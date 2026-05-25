const seedThreads = [
    {
        title: "A grief-tech startup sells one final dream visit with the dead.",
        genre: "Sci-fi thriller",
        description: "A startup offers grieving families one engineered dream reunion, until users begin returning with memories they were never supposed to have.",
        heat: 1248,
        comments: 42,
        tags: ["Thriller", "Trending"]
    },
    {
        title: "What everyday job should be the basis of a thriller?",
        genre: "Prompt thriller",
        description: "The answers keep spinning into fresh hooks: meter readers, wedding planners, cruise ship entertainers, night cleaners, and court transcribers.",
        heat: 612,
        comments: 29,
        tags: ["Question", "Fun thread"]
    },
    {
        title: "A child discovers the lost-and-found box at school stores forgotten futures.",
        genre: "Family fantasy",
        description: "A school lost-and-found cupboard turns out to contain abandoned futures, and one child starts restoring the wrong lives to the wrong people.",
        heat: 301,
        comments: 11,
        tags: ["Fantasy", "New"]
    },
    {
        title: "A budget airline accidentally opens a route to the same city twenty years in the future.",
        genre: "Sci-fi comedy",
        description: "Passengers think they are taking a cheap domestic flight and land in an upgraded version of their own lives.",
        heat: 690,
        comments: 27,
        tags: ["Sci-fi", "Comedy"]
    },
    {
        title: "What childrens fear would make the best horror movie?",
        genre: "Prompt horror",
        description: "A thread asking for childhood fears that could support feature-level horror worlds—from the pool drain to whispers through walls.",
        heat: 566,
        comments: 31,
        tags: ["Question", "Horror"]
    }
];

function renderSeedThreads() {
    const grid = document.querySelector('.ideas-grid');
    if (!grid) return;
    
    // Clear current static content
    grid.innerHTML = '';
    
    seedThreads.forEach(thread => {
        const card = document.createElement('div');
        card.className = 'idea-card';
        card.innerHTML = `
            <div class="idea-tags">
                ${thread.tags.map(tag => `<span class="idea-tag ${tag === 'Question' ? 'alt' : ''}">${tag}</span>`).join('')}
            </div>
            <h3>${thread.title}</h3>
            <p>${thread.description}</p>
            <div class="idea-meta">
                <span>▲ ${thread.heat.toLocaleString()} · ${thread.comments} comments</span>
                <span class="share-link" onclick="copyLink(event, window.location.href)">Share</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderSeedThreads);
