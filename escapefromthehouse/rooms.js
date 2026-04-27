export const rooms = [
    { id: "bedroom", connections: ["livingroom"] },
    { id: "livingroom", connections: ["bedroom", "kitchen"] },
    { id: "kitchen", connections: ["livingroom", "garage"] },
    { id: "garage", connections: ["kitchen", "backyard"] },
    { id: "backyard", connections: ["garage"] }
];