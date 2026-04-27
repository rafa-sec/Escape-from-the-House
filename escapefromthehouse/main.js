import { rooms } from "./rooms.js";
import { moveTo } from "./game.js";

const walkMenu = document.getElementById("walkMenu");

function updateWalkMenu(currentRoom){

    walkMenu.innerHTML = "";

    const room = rooms.find(r => r.id === currentRoom);

    room.connections.forEach(conn => {

        const btn = document.createElement("button");
        btn.textContent = conn;

        btn.onclick = () => moveTo(conn);

        walkMenu.appendChild(btn);
    });
}