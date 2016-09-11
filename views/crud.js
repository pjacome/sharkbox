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
      var initContent = document.getElementById("beginHere");

      var contentContainer = document.getElementById("e1");
      contentContainer.innerHTML = oData;

      var totalItems = oData.total_items;
      for(var i = 0; i < totalItems; ++i) {
        // manipulate DOM here
        var divID = "'e" + i + "'>"
        var eventDivs = 
          "<hr>" +
          "<div class='eventContent'>" +
            "<div class='aEventContent'>" +
              "<div class='leftContent eventThumbnails'>" +
              "</div>" +
              "<div class='rightContent' id=" + divID +
                "<p>This is an example of what the text will look like</p>" +
              "</div>" +
            "</div>" +
          "</div>";

        initContent.nextSibling.innerHTML = eventDivs;
      }
    });
  }
};
