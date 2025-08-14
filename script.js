/*async function fetchNews() {
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
}*/

console.log("Script loaded ✅");

fetch("/api/getNews")
    .then(res => {
        console.log("API response status:", res.status);
        return res.json();
    })
    .then(data => {
        console.log("API response JSON:", data);
        if (!data.articles || data.articles.length === 0) {
            document.getElementById("news").innerHTML = "<p>No news found.</p>";
            return;
        }
        const newsDiv = document.getElementById("news");
        data.articles.forEach(article => {
            const item = document.createElement("div");
            item.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
            newsDiv.appendChild(item);
        });
    })
    .catch(err => {
        console.error("Error fetching news ❌", err);
        document.getElementById("news").innerHTML = "<p>Failed to load news.</p>";
    });
