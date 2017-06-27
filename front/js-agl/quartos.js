var myRequestRooms = function() {
        var roomsContainer = document.getElementById('rooms');

        var impressor = function(jsonData) {
                for (var key of Object.keys(jsonData)) {
                        var buttonElement = document.createElement('button');
                        buttonElement.innerHTML = key;
                        buttonElement.classList.add("btn");
                        buttonElement.classList.add("botao");
                        buttonElement.setAttribute("onclick", "fillRooms(" + key + ");");
                        var status;
                        if (jsonData[key]['status'] == "vacant") {
                                status = "btn-default";
                        } else if (jsonData[key]['status'] == "occupied") {
                                status = "btn-warning";
                        } else if (jsonData[key]['status'] == "reserved") {
                                status = "btn-primary";
                        } else if (jsonData[key]['status'] == "unusable") {
                                status = "btn-danger";
                        }
                        buttonElement.classList.add(status);
                        roomsContainer.appendChild(buttonElement);
                }
        };

        window.fetch('http://127.0.0.1:80/listRooms')
                .then(function(response) {
                        return response.json();
                })
                .then(impressor)
                .catch(function(err) {
                        console.log("Oops, something went wrong!", err);
                });
};

var fillRooms = function(idRooms) {
        var roomsNumero = document.getElementById('qrt-num');
        var roomsName = document.getElementById('qrt-name');
        var roomsDesc = document.getElementById('qrt-desc');
        var roomsStat = document.getElementById('qrt-stat');

        var impressor = function(jsonData) {
                var numero = jsonData[idRooms]['id'];

                roomsNumero.setAttribute("value", "" + idRooms + "");
                roomsName.setAttribute("value", "" + jsonData[idRooms]['name'] + "");

                // Preciso de um campo "descricao" (irmao do nome) que contera os ]
                // motivos do quarto nao esta disponivel

                roomsDesc.innerHTML = "Ainda não implementamos a descrição do quarto";

                if (jsonData[idRooms]['status'] == "vacant") {
                        roomsStat.selectedIndex = 1;
                } else if (jsonData[idRooms]['status'] == "occupied") {
                        roomsStat.selectedIndex = 3;
                } else if (jsonData[idRooms]['status'] == "reserved") {
                        roomsStat.selectedIndex = 2;
                } else if (jsonData[idRooms]['status'] == "unusable") {
                        roomsStat.selectedIndex = 4;
                }
        }

        window.fetch('http://127.0.0.1:80/listRooms')
                .then(function(response) {
                        return response.json();
                })
                .then(impressor)
                .catch(function(err) {
                        console.log("Oops, something went wrong!", err);
                });
};

var saveRooms = function() {
        var node = {};

        node.id = document.getElementById('qrt-num').value;
        node.name = document.getElementById('qrt-name').value;
        node.desc = document.getElementById('qrt-desc').innerHTML;
        var stat = document.getElementById('qrt-stat');

        if (stat.value == '0') {
                stat.setAttribute("style", "border-color:red");
                window.setTimeout(function(){
                        stat.setAttribute("style", "border-color:grey");
                }, 2000);

                return;
        }
        node.status = stat.value;

        fetch('http://127.0.0.1:80/postRoom', { // Definir a url correta
                method: "POST",
                body: node
        });
};



(function() {

})();
