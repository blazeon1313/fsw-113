// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function fetchData(){
    queryType = document.querySelector('#queryType').value;
    itemID = document.querySelector('#itemID').value;
    getFromSWAPI()
};

function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    
    .then(response => response.json())
    .then(function(data){ 
        let name = data.name;
        let birth = data.birth_year;
        updateInfo(name, birth)
    })
    .catch(err => console.warn(err))
};

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

function updateInfo(name, birth_year){
    let label1 = document.getElementById('dataLabel1');
    let data1 = document.createElement('div');
    data1.innerHTML = `Name: ${name}`;
    label1.append(data1);

    let label2 = document.getElementById('dataLabel2');
    let data2 = document.createElement('div');
    data2.innerHTML = `Birth Year: ${birth_year}`;
    label2.append(data2);
}