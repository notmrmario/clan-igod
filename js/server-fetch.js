fetch("https://eu.mc-api.net/v3/server/ping/notmrmario.aternos.me")
.then(function (response)  {
    return response.json()
})
.then(function (json) {
    document.querySelector('#stus').innerHTML = json.online ? 'Online' : 'Offline';
        document.querySelector("#nply").innerHTML = json.online ? 'Jugadores: ' + json.players.online + '/100' :'';
        document.querySelector('#motd').innerHTML = json.description ? json.description.text.replace(/\§4/gi, ' ').replace(/\§a/gi, ' ').replace(/\§d/gi, ' ').replace(/\§l/gi, ' ').replace(/\§2/gi, ' ').replace(/\§f/gi, ' ') : '';
        document.querySelector('#server-icon').innerHTML = json.favicon ? json.favicon.url : '';
})