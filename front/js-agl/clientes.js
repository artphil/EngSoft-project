var myRequestClients = function() {
        var clientContainer = document.getElementById('clients');
        var clientName = document.getElementById('srch-name');
        var clientCPF = document.getElementById('srch-cpf');

        var impressor = function(jsonData) {
                for (var key of Object.keys(jsonData)) {
                        if (jsonData[key]['name'] == clientName ||
                                jsonData[key]['cpf'] == clientCPF)
                        {
                                var buttonElement = document.createElement('button');
                                buttonElement.classList.add("list-group-item");
                                buttonElement.innerHTML = ""+jsonData[key]['name']+" - "+jsonData[key]['cpf']+"";
                                buttonElement.setAttribute("onclick", "fillClients(" + key + ");");

                                clientContainer.appendChild(buttonElement);
                        }
                }
        };

        window.fetch('http://127.0.0.1:80/listClients')   // falta criar essa chamada
                .then(function(response) {
                        return response.json();
                })
                .then(impressor)
                .catch(function(err) {
                        console.log("Oops, something went wrong!", err);
                });
};

var fillClients = function(idClient) {
        var clientName = document.getElementById('clt-name');
        var clientCPF = document.getElementById('clt-cpf');
        var clientID = document.getElementById('clt-id');

        var impressor = function(jsonData) {
                clientName.innerHTML = jsonData[idRooms]['name'];
                clientCPF.innerHTML = jsonData[idRooms]['cpf'];
                clientID.innerHTML = key;

                reservsClient(idClient);   // função implementda em reservas.js
        }


        window.fetch('http://127.0.0.1:80/listClients')
                .then(function(response) {
                        return response.json();
                })
                .then(impressor)
                .catch(function(err) {
                        console.log("Oops, something went wrong!", err);
                });
};

var reservsClient = function(idClient) {
        var reservContainer = document.getElementById('reservs');

        var impressor = function(jsonData) {
                for (var key of Object.keys(jsonData)) {
                        if (jsonData[key]['clientId'] == idClient)
                        {
                                var buttonElement = document.createElement('button');
                                buttonElement.classList.add("list-group-item");
                                buttonElement.innerHTML = ""+jsonData[key]['clientName']+" - "+key+" - "+jsonData[key]['dateStart']+" "+jsonData[key]['dateEnd']+" ";
                                //buttonElement.setAttribute("onclick", "fillReservs(" + key + ");");

                                reservContainer.appendChild(buttonElement);
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

var saveClient = function() {
        var node = {};

        var clientName = document.getElementById('clt-name').value;
        var clientCPF = document.getElementById('clt-cpf').value;

        if (clientName.innerHTML == '') {
                clientName.setAttribute("style", "border-color:red");
                window.setTimeout(function(){
                        clientName.setAttribute("style", "border-color:grey");
                }, 2000);

                return;
        }
        else if (clientCPF.innerHTML == '') {
                clientCPF.setAttribute("style", "border-color:red");
                window.setTimeout(function(){
                        clientCPF.setAttribute("style", "border-color:grey");
                }, 2000);

                return;
        }
        else {
                node.name = clientName;
                node.cpf = clientCPF;
        }

        fetch('http://127.0.0.1:80/postClient', { // Definir a url correta
                method: "POST",
                body: node
        });
};



(function() {

})();
