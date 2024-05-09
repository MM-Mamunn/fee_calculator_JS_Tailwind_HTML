// file - script.js

// Clearing the display section
function clearResult() {
    document.getElementById("result").
    value = "";
    var button = document.getElementById("add3");
    button.style.backgroundColor = 'gray';
    button = document.getElementById("drop3");
    button.style.backgroundColor = 'red';
    button = document.getElementById("add");
    button.style.backgroundColor = 'gray';
    button = document.getElementById("drop");
    button.style.backgroundColor = 'red';
    var button = document.getElementById("add4");
    button.style.backgroundColor = 'gray';
    button = document.getElementById("drop4");
    button.style.backgroundColor = 'red';
}

// The user input
function appendCharacter(char) {
    document.getElementById("result").
    value += char;
}

// Performing the calculations
function calculateResult() 
{

    let result = 

        document.getElementById("result").value;
    try {
        result = eval(result);
        document.getElementById("result").
        value = result;
    } catch (error) {
        document.getElementById("result").
        value = "Error";
    }

}
function calculateResult2() 
{
    var button = document.getElementById('add');
    if (button.style.backgroundColor === 'red')
        { 
          
        }
    else {
    let result = 

        document.getElementById("result").value;
    try {
        result = eval(result);
        document.getElementById("result").
        value = result;
    } catch (error) {
        document.getElementById("result").
        value = "Error";
    }
}
}

function append_course(string) {

    var button = document.getElementById('add');
    if (button.style.backgroundColor === 'red')
        { 
            document.getElementById("result2").
            value = 'Already selected';
        }
    else {
   document.getElementById("result").
    value += string;
    }
}

function changeColor() {
    // Get the button element
    var button = document.getElementById('add');
    
    // Change the background color to red
    button.style.backgroundColor = 'red';
    button = document.getElementById('drop');
    
    // Change the background color to red
    button.style.backgroundColor = 'gray';
}


function calculateResult2_drop() 
{
    var button = document.getElementById('drop');
    if (button.style.backgroundColor === 'gray')
        { 
        
    let result = 

    document.getElementById("result").value;
try {
    result = eval(result);
    document.getElementById("result").
    value = result;
} catch (error) {
    document.getElementById("result").
    value = "Error";
}
        }
    else {
}
}

function append_course_drop(string) {

    var button = document.getElementById('drop');
    if (button.style.backgroundColor === 'red')
        { 
            document.getElementById("result2").
            value = 'Already selected';
        }
    else {
   document.getElementById("result").
    value += string;
    }
}

function changeColor_drop() {
    // Get the button element
    var button = document.getElementById('drop');
    
    // Change the background color to red
    button.style.backgroundColor = 'red';
    button = document.getElementById('add');
    
    // Change the background color to red
    button.style.backgroundColor = 'gray';
}



function calculateResult3() 
{
    var button = document.getElementById('add3');
    if (button.style.backgroundColor === 'red')
        { 
        
        }
    else {
        let result = 

        document.getElementById("result").value;
    try {
        result = eval(result);
        document.getElementById("result").
        value = result;
    } catch (error) {
        document.getElementById("result").
        value = "Error";
    }
}
}

function append_course3(string) {

    var button = document.getElementById('add3');
    if (button.style.backgroundColor === 'red')
        { 
            document.getElementById("result2").
            value = 'Already selected';
        }
    else {
   document.getElementById("result").
    value += string;
    }
}

function changeColor3() {
    // Get the button element
    var button = document.getElementById('add3');
    
    // Change the background color to red
    button.style.backgroundColor = 'red';
    button = document.getElementById('drop3');
    
    // Change the background color to red
    button.style.backgroundColor = 'gray';
}




function calculateResult2_drop3() 
{
    var button = document.getElementById('drop3');
    if (button.style.backgroundColor === 'gray')
        { 
        
    let result = 

    document.getElementById("result").value;
try {
    result = eval(result);
    document.getElementById("result").
    value = result;
} catch (error) {
    document.getElementById("result").
    value = "Error";
}
        }
    else {
}
}

function append_course_drop3(string) {

    var button = document.getElementById('drop3');
    if (button.style.backgroundColor === 'red')
        { 
            document.getElementById("result2").
            value = 'Already selected';
        }
    else {
   document.getElementById("result").
    value += string;
    }
}

function changeColor_drop3() {
    // Get the button element
    var button = document.getElementById('drop3');
    
    // Change the background color to red
    button.style.backgroundColor = 'red';
    button = document.getElementById('add3');
    
    // Change the background color to red
    button.style.backgroundColor = 'gray';
}


///3rd course

function calculateResult4() 
{
    var button = document.getElementById('add4');
    if (button.style.backgroundColor === 'red')
        { 
        
        }
    else {
        let result = 

        document.getElementById("result").value;
    try {
        result = eval(result);
        document.getElementById("result").
        value = result;
    } catch (error) {
        document.getElementById("result").
        value = "Error";
    }
}
}

function append_course4(string) {

    var button = document.getElementById('add4');
    if (button.style.backgroundColor === 'red')
        { 
            document.getElementById("result2").
            value = 'Already selected';
        }
    else {
   document.getElementById("result").
    value += string;
    }
}

function changeColor4() {
    // Get the button element
    var button = document.getElementById('add4');
    
    // Change the background color to red
    button.style.backgroundColor = 'red';
    button = document.getElementById('drop4');
    
    // Change the background color to red
    button.style.backgroundColor = 'gray';
}




function calculateResult2_drop4() 
{
    var button = document.getElementById('drop4');
    if (button.style.backgroundColor === 'gray')
        { 
        
    let result = 

    document.getElementById("result").value;
try {
    result = eval(result);
    document.getElementById("result").
    value = result;
} catch (error) {
    document.getElementById("result").
    value = "Error";
}
        }
    else {
}
}

function append_course_drop4(string) {

    var button = document.getElementById('drop4');
    if (button.style.backgroundColor === 'red')
        { 
            document.getElementById("result2").
            value = 'Already selected';
        }
    else {
   document.getElementById("result").
    value += string;
    }
}

function changeColor_drop4() {
    // Get the button element
    var button = document.getElementById('drop4');
    
    // Change the background color to red
    button.style.backgroundColor = 'red';
    button = document.getElementById('add4');
    
    // Change the background color to red
    button.style.backgroundColor = 'gray';
}
