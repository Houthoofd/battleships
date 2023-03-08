// fin interface //
class Grid {
    constructor(rows = 10, columns = 10) {
        this.rows = rows;
        this.columns = columns;
        this.grids = [this.createGrid(), this.createGrid()];
        this.contentGame = document.createElement('div');
        this.contentGame.setAttribute('class', 'content-game');
        for (let i = 0; i < 2; i++) {
            this.contentGame.appendChild(this.grids[i]);
        }
        document.body.appendChild(this.contentGame);
    }
    createGrid() {
        const table = document.createElement('table');
        for (let i = 1; i < this.rows + 1; i++) {
            const row = table.insertRow();
            for (let j = 1; j < this.columns + 1; j++) {
                const cell = row.insertCell();
                cell.addEventListener('click', () => {
                    console.log(`Cell clicked: row=${i}, column=${j}`);
                    if (cell.classList.contains('clicked')) {
                        cell.classList.remove('clicked');
                    }
                    else {
                        cell.classList.add('clicked');
                    }
                });
            }
        }
        return table;
    }
}
class Ship {
    constructor() {
        this.life = 50;
        this.slots = 3;
        this.type = "ship";
    }
    render() {
        const shipDiv = document.createElement('div');
        shipDiv.setAttribute('class', 'ship');
        shipDiv.style.width = `${this.size}px`;
        shipDiv.style.height = `25px`;
        return shipDiv;
    }
}
class Deck {
    constructor() {
        this.ships = [];
        const qty = {
            Porte_avion: 1,
            Croiseur: 1,
            Contre_torpilleur: 2,
            Torpilleur: 1,
        };
        for (const type of Object.keys(qty)) {
            const count = qty[type];
            for (let i = 0; i < count; i++) {
                switch (type) {
                    case "Porte_avion":
                        this.ships.push(new Porte_avion({ qty: count, slots: 5 }));
                        break;
                    case "Croiseur":
                        this.ships.push(new Croiseur({ qty: count, slots: 4 }));
                        break;
                    case "Contre_torpilleur":
                        this.ships.push(new Contre_torpilleur({ qty: count, slots: 3 }));
                        break;
                    case "Torpilleur":
                        this.ships.push(new Torpilleur({ qty: count, slots: 2 }));
                        break;
                }
            }
        }
    }
    countShips() {
        const counts = {};
        for (const ship of this.ships) {
            const type = ship.type;
            counts[type] = (counts[type] || 0) + 1;
        }
        return counts;
    }
    render() {
        const cell = document.createElement('div');
        const panel = document.createElement('div');
        cell.setAttribute('height', '25px');
        cell.setAttribute('width', '25px');
        panel.appendChild(cell);
        document.body.appendChild(panel);
    }
}
class Porte_avion extends Ship {
    constructor(options) {
        super();
        this.life = 125;
        this.slots = 5;
        this.type = "porte-avion";
        this.horizontal = generateRandomBinary();
        this.size = this.slots * 25;
        this.qty = options.qty;
    }
}
class Croiseur extends Ship {
    constructor(options) {
        super();
        this.life = 100;
        this.slots = 4;
        this.type = "croiseur";
        this.horizontal = generateRandomBinary();
        this.size = this.slots * 25;
        this.qty = options.qty;
    }
}
class Contre_torpilleur extends Ship {
    constructor(options) {
        super();
        this.life = 75;
        this.slots = 3;
        this.type = "contre-torpilleur";
        this.horizontal = generateRandomBinary();
        this.size = this.slots * 25;
        this.qty = options.qty;
    }
}
class Torpilleur extends Ship {
    constructor(options) {
        super();
        this.life = 50;
        this.slots = 2;
        this.type = "torpilleur";
        this.horizontal = generateRandomBinary();
        this.size = this.slots * 25;
        this.qty = options.qty;
    }
}
function generateRandomBinary() {
    const number = Math.floor(Math.random() * 2);
    if (number == 0) {
        return false;
    }
    if (number == 1) {
        return true;
    }
}
// Utilisation :
const grid = new Grid(10, 10);
const deck = new Deck();
console.log(deck);
deck.render();
//# sourceMappingURL=ship.js.map