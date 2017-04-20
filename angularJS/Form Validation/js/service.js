homeworkApp.factory("formService", function () {
    
    return {
        getSuccessMessage: function (email) {
            return "Your message has been delivered to "+ email;
        }
    }
});
