const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.name = ? LIMIT ? OFFSET ?';
    let limit = parseInt(params.limit) || 100;
    const offset = parseInt(params.offset) || 0;
    const parameters = [ params.name, limit, offset];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}