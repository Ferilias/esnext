let favoriteCityId = 'rome';
console.log(favoriteCityId)

favoriteCityId = 'kqzjdfg';
console.log(favoriteCityId)

const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];

var affiche = function afficheCities() {
    citiesId.forEach(function (citie) {
        console.log(citie);
    })
}
affiche();

//citiesId = [];
//TypeError: Assignment to constant variable.

citiesId.push('tokyo');

affiche();

function getWeather(ville) {
    if (ville) {
        let city = ville;
        let temperature = 20;
        return { city, temperature };
    } else {
        let city = citiesId[0];
        let temperature = 20;
        return { city, temperature };
    }

}

console.log(getWeather());

const weather = getWeather(favoriteCityId);



let {
    city: ville,
    temperature: temp,

} = weather;

console.log(ville);
console.log(temp);


let [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {
    constructor(id, name, imageURL) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
    }
    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageURL + ', ' + this._price + ']';
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de janeiro', 'img/rio-de-janeiro')

    }
}
let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageURL, price) {
        super(id, name, imageURL);
        this.price = 0;
    }
    toString() {
        return 'free' + super.toString();
    }
}
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg', 0);
console.log(freeTrip.toString());


t1 = new Trip('paris', 'Paris', 'img/paris.jpg')
t2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
t3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

class TripService {

    constructor(id, name, imageURL) {
        this.tripList = new Set();
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
        this.tripList.add(t1);
        this.tripList.add(t2);
        this.tripList.add(t3);
    }
    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (tripName !== 'undefined') {
                    for (let [k, v] of tripList) {
                        if (v === tripName) {
                            resolve(tripName.name)// TODO utiliser resolve et reject en fonction du résultat de la recherche
                        }
                    }
                }
                else {
                    reject('Aucun voyage trouvé');
                }
            }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}
