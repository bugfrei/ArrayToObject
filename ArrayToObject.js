function toObject() {
    let index = 0;
    let length = this.length;
    let obj = {};
    while (index < length) {
        if (Array.isArray(this[index])) {
            // Key/Value sind in eigenen Array innerhalb des Arrays ([ [K,V],[K,V], ...,]) (wie bei Object.entries(...))
            let subArray = this[index];
            if (subArray.length === 1) {
                obj[subArray[0]] = null;
            } else if (subArray.length === 2) {
                obj[subArray[0]] = subArray[1];
            } else if (subArray.length > 2) {
                obj[subArray[0]] = subArray.slice(1);
            }

            index++;
        }
        else {
            // Key/Value sind in einem Array nacheinander angegeben [K,V,K,V,K,V]
            if (index < length - 1) {
                obj[this[index]] = this[index + 1];
            } else {
                obj[this[index]] = null;
            }
            index += 2;
        }
    }
    return obj;
}

Array.prototype.toObject = toObject;

var ar = ["Name", "Max", "Alter", 55, "Ort", "Stuttgart", "Aktiv", true, "XXX"];
let test = ["Bezeichnung", "Tastatur", "Sprache", "Deutsch", "Farbe", "Schwarz", "Hersteller", "Cherry", "Nummernblock", true, "Preis", 39.99]

var o = ar.toObject();
var ar2 = Object.entries(o);
var o2 = ar2.toObject();
