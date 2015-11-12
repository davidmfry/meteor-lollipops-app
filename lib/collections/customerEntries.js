CustomerEntries = new Mongo.Collection("customerentries");


Meteor.methods({
    insertEntry: function (customerObj) {
        CustomerEntries.insert({customerName:customerObj.customerName,
            transactionType:customerObj.transactionType,
            amount:customerObj.amount })
    }
});
