const Match = require('../models/match');

const getAllMatches = async () => {
    return await Match.getAllMatches();
}

module.exports = {
    getAllMatches: getAllMatches
}