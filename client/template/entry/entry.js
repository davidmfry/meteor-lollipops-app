Template.entry.helpers({
    entryItems: function () {
        return CustomerEntries.find();
    }
});

Template.entry.events({
   'submit .entry-form': function (event, templ) {
       event.preventDefault();

       var entryObj = {
           customerName: event.target.name.value,
           transactionType: event.target.transactionType.value,
           amount: "$" + event.target.amount.value
       };

       Meteor.call("insertEntry", entryObj);

       templ.find("form").reset();

   }
});