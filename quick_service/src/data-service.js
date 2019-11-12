const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Added to get around the deprecation warning: "Mongoose: mpromise (mongoose's default promise library) is deprecated"

// Load the schemas
const addressSchema = require('./component/model/addressModel.js');
const bookingSchema = require('./component/model/bookingModel.js');
const reviewSchema = require('./component/model/reviewModel.js');
const serviceSchema = require('./component/model/serviceModel.js');
const userSchema = require('./component/model/userModel.js');

module.exports = function(mongoDBConnectionString) {
    let Address;
    let Booking;
    let Review;
    let Service;
    let User;

    return {
        connect: function() {
            return new Promise(function(resolve,reject) {
                let db = mongoose.createConnection(mongoDBConnectionString, { useNewUrlParser: true });
                
                db.on('error', (err)=>{
                    reject(err);
                });
        
                db.once('open', ()=>{
                    Address = db.model("Address", addressSchema);
                    Booking = db.model("Booking", bookingSchema);
                    Review = db.model("Review", reviewSchema);
                    Service = db.model("Service", serviceSchema);
                    User = db.model("User", userSchema);

                    resolve();
                });
            })
        },

        // ===============================================
        // ==================[ SERVICE ]==================
        // ===============================================
        getAllServices: function() {
            return new Promise(function(resolve,reject) {
                Service.find()
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("Booking", "Review") // Populate the "Booking", "Review" fields
                       .exec()
                       .then((services) => {
                           resolve(services);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        }, 
        getServiceById: function(serviceId) {
            return new Promise(function(resolve,reject) {
                Service.find({ _id: serviceId })
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("Booking", "Review") // Populate the "Booking", "Review" fields
                       .limit(1)
                       .exec()
                       .then((services) => {
                           resolve(services);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        },
        updateServiceById: function(serviceId, serviceData) {
            return new Promise(function (resolve, reject) {
                if (Object.keys(serviceData).length > 0) { // if there is data to update
                    Service.update({ _id: serviceId }, // replace the current service with data from serviceData
                        {
                            $set: serviceData
                        },
                        { multi: false })
                        .exec()
                        .then(() => {
                            resolve(serviceId);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    resolve();
                }
            });
        },
        addService: function(serviceData) {
            return new Promise(function (resolve, reject) {
                
                // Create a newService from the serviceData
                var newService = new Service(serviceData);

                newService.save((err, addedService) => {
                    if (err) {
                        reject(err);
                    } 
                    else {
                        resolve(addedService._id);
                    }
                });
            });
        },

        // ===============================================
        // ==================[ BOOKING ]==================
        // ===============================================
        getAllBookings: function() {
            return new Promise(function(resolve,reject) {
                Booking.find()
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("User", "Service") // Populate the "User", "Service" fields
                       .exec()
                       .then((bookings) => {
                           resolve(bookings);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        }, 
        getBookingById: function(bookingId) {
            return new Promise(function(resolve,reject) {
                Booking.find({ _id: bookingId })
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("User", "Service") // Populate the "User", "Service" fields
                       .limit(1)
                       .exec()
                       .then((bookings) => {
                           resolve(bookings);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        },
        updateBookingById: function(bookingId, bookingData) {
            return new Promise(function (resolve, reject) {
                if (Object.keys(bookingData).length > 0) { // if there is data to update
                    Booking.update({ _id: bookingId }, // replace the current booking with data from bookingData
                        {
                            $set: bookingData
                        },
                        { multi: false })
                        .exec()
                        .then(() => {
                            resolve(bookingId);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    resolve();
                }
            });
        },
        addBooking: function(bookingData) {
            return new Promise(function (resolve, reject) {
                
                // Create a newBooking from the bookingData
                var newBooking = new Booking(bookingData);

                newBooking.save((err, addedBooking) => {
                    if (err) {
                        reject(err);
                    } 
                    else {
                        resolve(addedBooking._id);
                    }
                });
            });
        },

        // ==============================================
        // ===================[ USER ]===================
        // ==============================================
        getAllUsers: function() {
            return new Promise(function(resolve,reject) {
                User.find()
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("Service", "Booking", "Review") // Populate the "Service", "Booking", "Review" fields
                       .exec()
                       .then((users) => {
                           resolve(users);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        }, 
        getUserById: function(userId) {
            return new Promise(function(resolve,reject) {
                User.find({ _id: userId })
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("Service", "Booking", "Review") // Populate the "Service", "Booking", "Review" fieldss
                       .limit(1)
                       .exec()
                       .then((users) => {
                           resolve(users);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        },
        updateUserById: function(userId, userData) {
            return new Promise(function (resolve, reject) {
                if (Object.keys(userData).length > 0) { // if there is data to update
                    User.update({ _id: userId }, // replace the current user with data from userData
                        {
                            $set: userData
                        },
                        { multi: false })
                        .exec()
                        .then(() => {
                            resolve(userId);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    resolve();
                }
            });
        },
        addUser: function(userData) {
            return new Promise(function (resolve, reject) {
                
                // Create a newUser from the userData
                var newUser = new User(userData);

                newUser.save((err, addedUser) => {
                    if (err) {
                        reject(err);
                    } 
                    else {
                        resolve(addedUser._id);
                    }
                });
            });
        },

        // ==============================================
        // ==================[ REVIEW ]==================
        // ==============================================
        getAllReviews: function() {
            return new Promise(function(resolve,reject) {
                Review.find()
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("User", "Service") // Populate the "User", "Service" fields
                       .exec()
                       .then((reviews) => {
                           resolve(reviews);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        }, 
        getReviewById: function(reviewId) {
            return new Promise(function(resolve,reject) {
                Review.find({ _id: reviewId })
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("User", "Service") // Populate the "User", "Service" fields
                       .limit(1)
                       .exec()
                       .then((reviews) => {
                           resolve(reviews);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        },
        updateReviewById: function(reviewId, reviewData) {
            return new Promise(function (resolve, reject) {
                if (Object.keys(reviewData).length > 0) { // if there is data to update
                    Review.update({ _id: reviewId }, // replace the current review with data from reviewData
                        {
                            $set: reviewData
                        },
                        { multi: false })
                        .exec()
                        .then(() => {
                            resolve(reviewId);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    resolve();
                }
            });
        },
        addReview: function(reviewData) {
            return new Promise(function (resolve, reject) {
                
                // Create a newReview from the reviewData
                var newReview = new Review(reviewData);

                newReview.save((err, addedReview) => {
                    if (err) {
                        reject(err);
                    } 
                    else {
                        resolve(addedReview._id);
                    }
                });
            });
        },
        
        // ===============================================
        // ==================[ ADDRESS ]==================
        // ===============================================
        getAddressById: function(addressId) {
            return new Promise(function(resolve,reject) {
                Address.find({ _id: addressId })
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       //.populate("User", "Service") // Populate the "User", "Service" fields
                       .limit(1)
                       .exec()
                       .then((address) => {
                           resolve(address);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        },
        updateAddressById: function(addressId, addressData) {
            return new Promise(function (resolve, reject) {
                if (Object.keys(addressData).length > 0) { // if there is data to update
                    Address.update({ _id: addressId }, // replace the current address with data from addressData
                        {
                            $set: addressData
                        },
                        { multi: false })
                        .exec()
                        .then(() => {
                            resolve(addressId);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    resolve();
                }
            });
        },
        addAddress: function(addressData) {
            return new Promise(function (resolve, reject) {
                
                // Create a newAddress from the addressData
                var newAddress = new Address(addressData);

                newAddress.save((err, addedAddress) => {
                    if (err) {
                        reject(err);
                    } 
                    else {
                        resolve(addedAddress._id);
                    }
                });
            });
        }
    }
}