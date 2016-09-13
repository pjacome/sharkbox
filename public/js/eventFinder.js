// EVENTFUL - API KEY : ThPMmx93M7QSk4Mq
window.onload = function() {
    var filterButton = document.getElementById("FilterButton");
    filterButton.onclick = function() {
        var oArgs = {
          app_key: "ThPMmx93M7QSk4Mq",
          q: "music",
          where: "San Diego",
          date: "2013061000-2015062000",
          page_size: "5",
          sort_order: "popularity"
        };

        console.log("here 1");
        EVDB.API.call("/events/search", oArgs, function(oData) {
            console.log("here 2");
            var contentContainer = document.getElementById("e1");
            contentContainer.innerHTML = oData;
        });
    }
};
