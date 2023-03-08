"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const porte_avion = new ship_1.Ship(125, 5, "porte-avion");
const croiseur = new ship_1.Ship(100, 3, "croiseur");
const contre_torpilleur = new ship_1.Ship(75, 3, "contre-torpilleur");
const torpilleur = new ship_1.Ship(50, 2, "torpilleur");
porte_avion.render();
croiseur.render();
contre_torpilleur.render();
torpilleur.render();
//# sourceMappingURL=main.js.map