async function fetchNews() {
    try {
        const res = await fetch("/api/getNews");
        const data = await res.json();
        if (data.status === "ok") {
            newsContainer.innerHTML = data.articles.map(article => `
                <div class="news-item">
                    ${article.urlToImage ? `<img src="${article.urlToImage}" alt="news image">` : ""}
                    <a href="${article.url}" target="_blank">${article.title}</a>
                    <p>${article.description || ""}</p>
                </div>
            `).join("");
        } else {
            newsContainer.innerHTML = "<p>Failed to load news.</p>";
        }
    } catch (err) {
        newsContainer.innerHTML = `<p>Error: ${err.message}</p>`;
    }
}
