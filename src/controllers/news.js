const News = require('../models/news');

const createNews = async (body) => {
    const { title, description, matchId, tourId } = body;

    if (!title || !description) {
        throw new Error('Title and description are required');
    }

    if (!matchId && !tourId) {
        throw new Error('Either matchId or tourId is required');
    }

    const newsId =  await News.createNews(body);

    if (matchId) {
        await News.addNewsToMatch(matchId, newsId);
    }

    if (tourId) {
        await News.addNewsToTour(tourId, newsId);
    }

    return newsId;
}

const fetchNewsByMatchId = async (id) => {
    return await News.fetchNewsByMatchId(id);
}

const fetchNewsByTourId = async (id) => {
    return await News.fetchNewsByTourId(id);
}

const fetchNewsBySportId = async (id) => {
    return await News.fetchNewsBySportId(id);
}

module.exports = {
    createNews: createNews,
    fetchNewsByMatchId: fetchNewsByMatchId,
    fetchNewsByTourId: fetchNewsByTourId,
    fetchNewsBySportId: fetchNewsBySportId,
}