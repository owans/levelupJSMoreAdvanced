
//Get data from Swapi.co api
axios.get('https://swapi.co/api/planets/3/')
.then(function(response){
    console.log(response.data.name);    //get name from planets/3
    console.log(response.status);
});

axios.get('')

//Get data from pokeapi.co
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
.then(function(response){
    console.log(response.data.abilities);   //get abilities from pokemon/ditto
    console.log(response.status);
});

axios.get('')
