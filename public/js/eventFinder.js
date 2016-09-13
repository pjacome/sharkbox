window.onload = function() {
    var filterButton = document.getElementById("filterButton");
    filterButton.onclick = function(e) {
        // prevent form from refreshing page
        e.preventDefault();

        var state = document.getElementById('stateSelect').value,
            city  = document.getElementById('citySelect').value,
            date  = document.getElementById('dateSelect').value;

        var data = {
            'state': state,
            'city' : city,
            'date' : date
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/events/search', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = function() {
            var DONE = 4;
            var OK   = 200;
            var response;
            if(xhr.readyState === DONE) {
                if(xhr.status === OK) {
                    response = JSON.parse(xhr.responseText);
                    console.log(response);
                    if(response.error !== undefined) {
                        UpdateForm();
                    }
                } else if(xhr.status === 404 || xhr.status === 400) {
                    console.log('Error: ' + xhr.status);
                } else {
                    console.log("500: Server Error");
                }
            }
        };
        // var oArgs = {
        //   app_key: "ThPMmx93M7QSk4Mq",
        //   q: "music",
        //   where: "San Diego",
        //   date: "2013061000-2015062000",
        //   page_size: "5",
        //   sort_order: "popularity"
        // };
    }

    function UpdateForm() {
        alert("heeyyyyyyy");
    }
};
