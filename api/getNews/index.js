module.exports = async function (context, req) {
  context.log("Fetching news...");

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`);
    const data = await response.json();

    context.res = {
      status: 200,
      body: data
    };
  } catch (error) {
    context.log.error("Error fetching news:", error);
    context.res = {
      status: 500,
      body: { error: "Failed to fetch news" }
    };
  }
};
