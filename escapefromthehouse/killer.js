let killerRoom = "garage"
let isFighting = false
let haveAGun = false

export function getKillerRoom(){
    return killerRoom;
}

export function searchForSomething(searchBtn){
    let findProbability = Math.floor(Math.random() * 3);

    if(findProbability === 2){
        haveAGun = true
        alert("You found a shotgun!")
        searchBtn.style.display = "none"
    }else{
        alert("You didn't find anything")
        searchBtn.style.display = "none"
    }
}

export function checkGun(shootBtn){
    if(haveAGun){
        shootBtn.style.display = "block"
    }
}

export function killerRound(rooms){

    let willMove = Math.floor(Math.random() * 2);

    if(willMove === 0){
        alert("The killer didn't move!")
        return;
    }

    const room = rooms.find(r => r.id === killerRoom);

    const randomIndex = Math.floor(Math.random() * room.connections.length);
    killerRoom = room.connections[randomIndex];

    alert("The killer is moving!")
}