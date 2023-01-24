
// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.
let system = document.querySelector('#system');
var subSystem = document.querySelector('#subSystem');

getSystems(0, system)
    // This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    // Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
   let wait;

async function getSystems(parentID, system) {
    
    const getFetch = await fetch('./data.json')
        let data = await getFetch.json()

    // After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    // those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    // this new array and the DOM element to the "populateDD" function (below).
    var filterFetch = data.systems.filter(d => d.parentID == parentID)

    populateDD(filterFetch, system)
}
    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer.

    // This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
    // appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
    // function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
    // the select element's options using the sysName and sysID from the passed in array (see week five).
function populateDD(filterFetch, system) {
    system.innerHTML = "";
    system.options = [];
    if(filterFetch.length !== 0){

        var itemSelect = document.createElement("option");
        itemSelect.textContent =  "Select an Item";
        system.appendChild(itemSelect);

        filterFetch.forEach(element => {
        document.getElementById("subSystem").value = " ";

        var option = document.createElement("option");
        option.textContent = `${element.sysName}`;
        option.value = element.sysID;
        system.appendChild(option)  
        });
    }
}

// This eventListener responds to a change to the "system" select element by passing the selected value from the "system" element 
// to the "getSystems()" function along with the "subSystem" DOM element so that the second drop-down list is populated with the 
// appropriate sub-systems from the data.json file.
document.querySelector('#system').addEventListener("change", function(){
    getSystems(this.value, document.querySelector("#subSystem"));
})

document.querySelector("#resetBtn").addEventListener("click", (e) => {
    document.querySelector("#system").removeOptions();
})