console.log("connected");

var todos = [];

var input = prompt("What would you like to do?")


while (input != "quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        var newtodo = prompt("Enter new todo!")
        //add to new new to do 
        todos.push(newtodo);
    }
    //ask again fo rnew input 
    input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP!!!");

