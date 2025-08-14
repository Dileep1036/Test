const fetch = require("node-fetch");

module.exports = async function (context, req) {
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        context.res = {
            status: 200,
            headers: { "Content-Type": "application/json" },
            body: data
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: error.message }
        };
    }
};
