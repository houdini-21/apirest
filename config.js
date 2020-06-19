module.exports = {
    PORT: process.env.PORT || 5000,
    DB: process.env.MONGODB_URI || 'mongodb://localhost:27017/API_DB',
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'thisismygalaxyletsgoexplore',
    DAYS_TOKEN_EXP: process.env.DAYS_TOKEN_EXP || 1
}