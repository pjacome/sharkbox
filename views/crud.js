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

    EVDB.API.call("/events/search", oArgs, function(oData) {
      var ex = JSON.stringify(oData);
      var ex2 = document.getElementById("e1");
      ex2.innerHTML = ex;
    });
  }
};
