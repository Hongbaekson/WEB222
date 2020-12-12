var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

// Take data from "petData"
// Render in #main-table-body

window.onload = () => {
    loadTableWithFilters();
};

// create the table based on the passed element
const createTable = (element) => {
    document.getElementById('main-table-body').innerHTML = "";
    element.forEach(el => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let span = document.createElement("span");
    
        img.setAttribute("src", el.image.src);
        img.setAttribute("alt", el.image.alt);
        img.setAttribute("height", el.image.height);
        img.setAttribute("width", el.image.width);
    
        h4.innerHTML = el.name;
        p.innerHTML = el.description;
        span.innerHTML = "Age: " + el.age + " years old.";
    
        td.appendChild(img);
        td2.appendChild(h4);
        td2.appendChild(p);
        td2.appendChild(span);
    
        tr.appendChild(td);
        tr.appendChild(td2);
        document.getElementById('main-table-body').appendChild(tr);
    });
}

const loadTableWithFilters = () => {
    
    // Filter data into arrays
    const all = petData.filter(el => el.age > 0);
    const dogs = petData.filter(el => el.type == 'dog');
    const cats = petData.filter(el => el.type == 'cat');
    const birds = petData.filter(el => el.type == 'bird');

    const older = petData.filter(el => (el.age >= 4 && el.age <= Number.MAX_VALUE));
    const young = petData.filter(el => (el.age >= 0 && el.age <= 1));
    const mid = petData.filter(el => (el.age >= 1 && el.age <= 3));

    // Conditional calls
    if (filterType == 'dog' && filterAgeMax == Number.MAX_VALUE && filterAgeMin == 0) {
        createTable(dogs);
    }
    if (filterType == 'cat' && filterAgeMax == Number.MAX_VALUE && filterAgeMin == 0) {
        createTable(cats);
    }
    if (filterType == 'bird' && filterAgeMax == Number.MAX_VALUE && filterAgeMin == 0) 
        createTable(birds);
    if (filterAgeMax == Number.MAX_VALUE && filterAgeMin == 0 && filterType == '') {
        createTable(petData);
    }
    if (filterType == '' && filterAgeMin == 4 && filterAgeMax == Number.MAX_VALUE) {
        createTable(older);
    }
    if (filterType == '' && filterAgeMin == 0 && filterAgeMax == 1) {
        createTable(young);
    }
    if (filterType == '' && filterAgeMin == 1 && filterAgeMax == 3) {
        createTable(mid);
    }
};

// must be invoked when the user clicks "Dogs"
const filterDog = () => {
    filterType = 'dog';
    loadTableWithFilters();
}

// must be invoked when the user clicks "Cats
const filterCat = () => {
    filterType = 'cat';
    loadTableWithFilters();
}

// must be invoked when the user clicks "Birds" 
const filterBird = () => {
    filterType = 'bird';
    loadTableWithFilters();
}

//  must be invoked when the user clicks "< 1 year" 
const filter_zero_1  = () => {
    filterType = '';
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

// must be invoked when the user clicks "1 - 3 years" 
const filter_1_3  = () => {
    filterType = '';
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

// must be invoked when the user clicks "4+ years"
const filter_4_plus  = () => {
    filterType = '';
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

// must be invoked when the user clicks "All Pets
const filterAllPets  = () => {
    filterType = '';
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
