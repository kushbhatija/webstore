/******* GLOBAL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

// An Object holds multiple variables (properties) together










const shoedetails = [
  {
    name: `Leather shoe`,
    image: `shoe4.jpg`,
    code: `DT20051`,
    instr: { firstname: `Nike`, lastname: `AIR`  },
    start: `6,8,9`,
    numWks: 15,
    cost: 950,
    category: `Leather`,

  },{
    name: `Casual shoe`,
    image: `shoe10.jpg`,
    code: `DT20052`,
    instr: { firstname: `Adidas`, lastname: `Joggers`  },
    start: `8,9,10`,
    numWks: 15,
    cost: 1200, 
    category: `Casual`,
    more:`see-more`,
  },{
    name: `Suede shoe`,
    image: `shoe1.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Leather shoe`,
    image: `shoe5.jpg`,
    code: `DT20054`,
    instr: { firstname: `Fila`, lastname: `Sketchers`  },
    start: `8,10,11,12`,
    numWks: 15,
    cost: 990, 
    category: `Leather`,
  },{
    name: `Leather shoe`,
    image: `shoe20.jpg`,
    code: `DT20055`,
    instr: { firstname: `Woodland`, lastname: `Boots`  },
    start: `8,9,11`,
    numWks: 15,
    cost: 1, 
    category: `Suede`,
  },{
    name: `Casual shoe`,
    image: `shoe15.jpg`,
    code: `DT20056`,
    instr: { firstname: `Nike`, lastname: `Studs`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 550, 
    category: `Casual`,
  },{
    name: `Suede shoe`,
    image: `shoe14.jpg`,
    code: `DT20057`,
    instr: { firstname: `Adidas`, lastname: `Running`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe12.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe11.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe6.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe4.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe22.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe20.png`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe23.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe30.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe`,
    image: `shoe25.png`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Suede shoe.jpg`,
    image: `shoe26.jpg`,
    code: `DT20053`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Suede`,
  },{
    name: `Sports shoe.jpg`,
    image: `shoe27.jpg`,
    code: `DT200577`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Sports`,
  },{
    name: `Sports shoe.jpg`,
    image: `shoe28.jpg`,
    code: `DT200653`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,10,11`,
    numWks: 15,
    cost: 1120, 
    category: `Sports`,
  },{
    name: `Leather shoe.jpg`,
    image: `shoe29.jpg`,
    code: `DT200498`,
    instr: { firstname: `Woodland`, lastname: `Sketchers`  },
    start: `8,9,11`,
    numWks: 15,
    cost: 1110, 
    category: `Sports`,
  }
]




/************* FUNCTIONS *************/
// Stored functions that will run as part of this application


function isInStock(prod) {
  if (prod.qty > 0) {
    return true;
  } else {
    return false;
  }
}

function isInThisCategory(prod) {
  // The variable "this" is filled with the 2nd filter argument
  if (this == 'all') {
    return true;
  } else if (prod.category == this) {
    return true;
  } else {
    return false;
  }
}

function isMatchingName(prod) {
  // Trim the input of white space, then uppercase it, then check if it's included
  if (prod.name.toUpperCase().includes(this.trim().toUpperCase())) {
    return true;
  } else {
    return false;
  }
}

{
function Toggle(event){
  var button=document.querySelector('.dropdown-content');
  button.classList.toggle('closed');
}


// Function: getCourseAsHtmlString
// Parameters: course:Object
// Return: String of HTML (<article>)
function getCourseAsHtmlString(shoes) {

  // If the cost of a course is less than $1000, tell the user this is a "GREAT DEAL!"

  let greatdeal;

  if (shoes.cost < 1000) {
    greatdeal = `<small class="callout urgent">Great deal!</small>`;
  } else {
    greatdeal = `😫`
  }

  return `<article class="course ${shoes.category}">
            <h3>${shoes.name} ${greatdeal}</h3>
            <ul class="listofproducts">
              <li><img class="products" src="img/${shoes.image}"></li>
              <li>Product code: <strong>${shoes.code}</strong></li>
              <li>Brand and model: <strong>${shoes.instr.lastname}, ${shoes.instr.firstname}</strong></li>
              <li>Size: <strong>${shoes.start}</strong></li>
              <li class="course-weeks">
              </ul>
              <div class="ratings">RATINGS:  <i class="material-icons"> star</i>  
                <i class="material-icons"> star</i>
                <i class="material-icons"> star</i>
                <i class="material-icons"> star</i>
              </div>
              <div class="course-cost">${shoes.cost}</div>
              <div class="see-more"><a href= "product.html">see more</a></div>

          </article>`;
}

function renderCourses(arrToRender) {
  // Connect each Object from the incoming Array to an HTML template
  const arrOfHtmlCourses = arrToRender.map(getCourseAsHtmlString);
  const strOfHtmlCourses = arrOfHtmlCourses.join(`\n`);

  document.getElementById('shoe-section').innerHTML = strOfHtmlCourses;  
}


function toggleCourseLayout(event) {
  document.getElementById('shoe-section').classList.toggle('grid-view');
}

function loadCourseCategory(event) {
  // Runs every time the dropdown changes
  const categoryImSearchingFor = event.target.value; // Get the new option from the dropdown/select
  renderCourses(shoedetails.filter(isInThisCategory, categoryImSearchingFor)); // Print only courses in a category
}

function loadCourseByName(event) {
  const nameImSearchingFor = event.target.value; // Get the value from the field
  renderCourses(shoedetails.filter(isMatchingName, nameImSearchingFor));
}


/************* EXECUTABLE *************/
// Execute functions that will access data
// document.getElementById('courses').innerHTML = getCourseAsHtmlString(courses[0])
// document.getElementById('courses').innerHTML += getCourseAsHtmlString(courses[1])


renderCourses(shoedetails); // Print the full set of courses
//renderCourses(courses.filter(isInStock));  //  Print only courses in stock





document.getElementById('store-btn').addEventListener('click' , Toggle);
document.getElementById('toggleView').addEventListener('click', toggleCourseLayout);
document.getElementById('courseCategory').addEventListener('change', loadCourseCategory);
document.getElementById('shoename').addEventListener('input', loadCourseByName);
}