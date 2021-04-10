const mongoose = require('mongoose');

const MONGO_HOST = process.env.MONGO_HOST || `localhost`;
const MONGO_PORT = `27017`

mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/task-manager-api`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})