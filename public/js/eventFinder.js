window.onload = function() {
    var filterButton = document.getElementById("filterButton");
    filterButton.onclick = function(e) {
        // prevent <form> from refreshing page
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
                    if(response.error !== undefined) {
                        UpdateForm();
                    }
                } else if(xhr.status === 404 || xhr.status === 400) {
                    console.log('Error: ' + xhr.status);
                } else {
                    console.log("500: Server Error");
                }
            }

            if(response !== undefined) {
                var event = response.events;
                console.log(event);
                event = {
                    event: [
                        'pablo',
                        'jacome',
                        'enrique'
                    ]
                }

                var source = document.getElementById('eventList-template').innerHTML;
                var template = Handlebars.compile(source);
                var compiledHTML = template(event);
                // var compiledHTML = template({
                //     event: [
                //         {age: '56'},{age: '789'},{age: '91011'}
                //     ]
                // });
                var entryPoint = document.getElementById('handlebarsEntryPoint');
                entryPoint.innerHTML = compiledHTML;

                console.log("compiledHTML =", compiledHTML);
            }
        };
    }

    function UpdateForm() {
        alert("heeyyyyyyy");
    }
};
