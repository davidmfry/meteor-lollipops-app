Template.entryItem.helpers({
    customerName: function() {
        return CustomerEntries.findOne(this._id).customerName;
    },
    transactionType: function () {
        return CustomerEntries.findOne(this._id).transactionType;
    },
    amount: function () {
        return CustomerEntries.findOne(this._id).amount;
    },
    id: function () {
        return this._id;
    }

});



