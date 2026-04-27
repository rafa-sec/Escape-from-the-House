import { rooms } from "./rooms.js";
import { killerRound, getKillerRoom } from "./killer.js";

let actions = 2
let currentRoom = "bedroom";

const roomElements = {};
rooms.forEach(room => {
    roomElements[room.id] = document.getElementById(room.id);
});

export function showRoom() {

    if(actions <= 0){
        alert("No actions left!");
        return;
    }

    actions--;

    killerRound(rooms);

    if(currentRoom === getKillerRoom()){
        alert("You're in the same room as the killer!");
    }

    rooms.forEach(room => {
        roomElements[room.id].style.display = "none";
    });

    roomElements[currentRoom].style.display = "block";
}

export function moveTo(room){
    currentRoom = room;
    showRoom();
}