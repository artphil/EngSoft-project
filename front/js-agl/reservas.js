var myRequestReservs = function() {
        var reservContainer = document.getElementById('reserv-srch');
        var clientNameId = document.getElementById('srch-name');
        var reservDate = document.getElementById('srch-date');

        var impressor = function(jsonData) {
                for (var key of Object.keys(jsonData)) {
                        if (jsonData[key]['clientName'] == clientNameId || jsonData[key]['clientId'] == clientNameId ||
                                jsonData[key]['dateStart'] == reservDate || jsonData[key]['dateEnd'] == reservDate)
                        {
                                var buttonElement = document.createElement('button');
                                buttonElement.classList.add("list-group-item");
                                buttonElement.innerHTML = ""+jsonData[key]['clientName']+" - "+key+" - "+jsonData[key]['dateStart']+" "+jsonData[key]['dateEnd']+" ";
                                buttonElement.setAttribute("onclick", "fillReservs(" + key + ");");

                                clientContainer.appendChild(buttonElement);
                        }
                }
        };

        window.fetch('http://127.0.0.1:80/listReservs')
                .then(function(response) {
                        return response.json();
                })
                .then(impressor)
                .catch(function(err) {
                        console.log("Oops, something went wrong!", err);
                });
};

var fillReservs = function(idReserv) {
        var clientName = document.getElementById('clt-name');
        var clientID = document.getElementById('clt-id');
        var reservID = document.getElementById('rsv-id');
        var reservDateIn = document.getElementById('rsv-date-in');
        var reservDateOut = document.getElementById('rsv-date-out');

        var impressor = function(jsonData) {
                clientName.value = jsonData[idReserv]['clientName'];
                clientID.value = jsonData[idReserv]['clientId'];
                reservID.value = idReserv;
                reservDateIn.value = jsonData[idReserv]['dateStart'];
                reservDateOut.value = jsonData[idReserv]['dateEnd'];

                reservServices(idReserv);   // função implementda em reservas.js
        }


        window.fetch('http://127.0.0.1:80/listReservs')
                .then(function(response) {
                        return response.json();
                })
                .then(impressor)
                .catch(function(err) {
                        console.log("Oops, something went wrong!", err);
                });


};

var reservServices = function(idReserv) {}

var saveReservs = function() {
        var node = {};

        fetch('http://127.0.0.1:80/postReserv', { // Definir a url correta
                method: "POST",
                body: node
        });
};



(function() {})(); // function autoexecutavel encapsulada
