const mysql = require('../lib/mysql');

const createNews = async (body) => {
    const statement = 'INSERT INTO news (title, description) VALUES (?, ?)';
    const parameters = [ body.title, body.description ];
    const result = await mysql.query(statement, parameters);
    return result.insertId;
}

const addNewsToMatch = async (matchId, newsId) => {
    const statement = 'INSERT INTO match_news (matchId, newsId) VALUES (?, ?)';
    const parameters = [ matchId, newsId ];
    await mysql.query(statement, parameters);
}

const addNewsToTour = async (tourId, newsId) => {
    const statement = 'INSERT INTO tour_news (tourId, newsId) VALUES (?, ?)';
    const parameters = [ tourId, newsId ];
    await mysql.query(statement, parameters);
}

const fetchNewsByMatchId = async (matchId) => {
    const statement = `
    SELECT news.* FROM news
    JOIN match_news ON news.id = match_news.newsId
    WHERE match_news.matchId = ?
    `;
    const parameters = [ matchId ];
    return await mysql.query(statement, parameters);
}

const fetchNewsByTourId = async (tourId) => {
    const statement = `
    SELECT news.* FROM news
    JOIN tour_news ON news.id = tour_news.newsId
    WHERE tour_news.tourId = ?
    `;
    const parameters = [ tourId ];
    return await mysql.query(statement, parameters);
}

const fetchNewsBySportId = async (sportId) => {
    const statement = `
    SELECT news.* FROM news
    LEFT JOIN match_news ON news.id = match_news.newsId
    LEFT JOIN matches ON match_news.matchId = matches.id
    LEFT JOIN tours AS matches_tour ON matches.tourId = matches_tour.id
    LEFT JOIN tour_news ON news.id = tour_news.newsId
    LEFT JOIN tours ON tour_news.tourId = tours.id
    WHERE matches_tour.sportId = ? OR tours.sportId = ?;
    `;
    const parameters = [ sportId ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNews: createNews,
    addNewsToMatch: addNewsToMatch,
    addNewsToTour: addNewsToTour,
    fetchNewsByMatchId: fetchNewsByMatchId,
    fetchNewsByTourId: fetchNewsByTourId,
    fetchNewsBySportId: fetchNewsBySportId,
}