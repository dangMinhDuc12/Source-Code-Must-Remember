module.exports = {
    mutipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map((mongooseValue) => mongooseValue.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
