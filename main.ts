import inquirer from "inquirer";


//inquirer  done
// array    done
//function  done
// operations

let todos: string[] = ["umer", "farooq"];
async function createTodo(todos:string[]){
    do{} while(true)
    let ans = await inquirer.prompt({
        type: "list",
        message: "select an operation",
        name: "select",
        choices: ["Add", "update", "view", "delete"],
    })
    
    if (ans.select == "Add"){
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo",
            
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (ans.select == "update"){
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "update items in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo",
            
        });
        let newTodo = todos.filter(val => updateTodo.todo)
        todos = [...newTodo,addTodo.todo];
        console.log(todos);
    }
    if (ans.select == "view"){
    console.log("*** TO DO LIST ***");
    console.log(todos);
    console.log("****************************");
    }
    if (ans.select == "delete"){
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "update items in the list",
            name: "todo",
            choices: todos.map(item => item)
        }); 
        let newTodo = todos.filter(val => deleteTodo.todo)
        todos = [...newTodo];
        console.log(todos);
    }

}
createTodo(todos);