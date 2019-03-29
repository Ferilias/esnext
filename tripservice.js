
t1 = new Trip('paris', 'Paris', 'img/paris.jpg')
t2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
t3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

function init(){
const tripList = new Set();
tripList.add(t1);
tripList.add(t2);
tripList.add(t3);
}
    class TripService { 

        constructor(id, name, imageURL) {
            this.id = id;
            this.name = name;
            this.imageURL = imageURL;
            console.log(exports.init());
        }
        findByName(tripName) {
    
             return new Promise((resolve, reject) => {
    
                 setTimeout( () => {
                    if(tripName !== 'undefined'){
                        resolve(tripName.name)// TODO utiliser resolve et reject en fonction du résultat de la recherche

                    }
                    else{
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
    
                        setTimeout( () => {
                                // ici l'exécution du code est asynchrone
    
                            // TODO utiliser resolve et reject en fonction du résultat de la recherche
    
                        }, 2000)
                   });
        }
    }
