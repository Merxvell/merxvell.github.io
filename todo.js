var todoList = {
	todos: [],

	addTodos: function(todoText){ //add todo pass in hi todoText = hi addTodos('hi')
	this.todos.push({
		todoText: todoText,
		completed: false
	});

},
changeTodos: function(position, todoText){
		//this.todos[position] = todoText;
		this.todos[position].todoText = todoText;
	},
	removeTodos: function(position){
		this.todos.splice(position, 1);
	},
	toggleCompleted: function(position){
		var todo = this.todos[position];
		todo.completed = !todo.completed;

	},

	toggleAll: function(){
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		//get number of completed todos
		/*for(var i = 0; i < totalTodos; i++){
			if(this.todos[i].completed === true){
				completedTodos++;
			}
		}*/

		this.todos.forEach(function(todo){
			if(todo.completed === true){
				completedTodos++;
			}
		});
		//if true make everything false and vice versa
		this.todos.forEach(function(todo){
			if(completedTodos == totalTodos){
				todo.completed = false;
			}else{
				todo.completed = true;
			}
		});
	}
};

//new code THIS IS EXACTLY THE SAME AS THE CODE ABOV BUT IT'S MORE EFFICIENT AND EASIER TO READ
var handlers = {
	displayTodos: function(){
		todoList.displayTodos();
		view.displayTodos();
	},
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();
	},
	addTodo: function(){
		if(todoList.todos.length > 9){
			return;
		}else{
		var addTodoText = document.getElementById('todo-text');
		todoList.addTodos(addTodoText.value);
		addTodoText.value = '';
		view.displayTodos();
		}
	},
	changeTodo: function(){
		var todoPosition = document.getElementById('position');
		var newTodoText = document.getElementById('new-todo-text');
		todoList.changeTodos(todoPosition.valueAsNumber, newTodoText.value);
		todoPosition.value = '0';
		newTodoText.value = '';
		view.displayTodos();
	},
	deleteTodo: function(position){
		todoList.removeTodos(position);
		view.displayTodos();
	},
	toggleTodo: function(position){
		var todoChangePosition = document.getElementById('toggle-position');
		todoList.toggleCompleted(todoChangePosition.valueAsNumber);
		todoChangePosition.value = '0';		
		view.displayTodos();
	}
};

var view = {
	displayTodos: function(){
		var todosUL = document.querySelector('ul');
		todosUL.innerHTML='';
		todoList.todos.forEach(function(todo, position){
			var todosLI = document.createElement('li');
			var todoComplete = '';

			if(todo.completed === true){
				todoComplete = '(O) ' + todo.todoText;
			}else{
				todoComplete = '(X) ' + todo.todoText;
			}
			todosLI.id = position;
		todosLI.textContent = todoComplete; //take todo li element, get content property and set it
		todosLI.appendChild(this.createDeleteButton());
		todosUL.appendChild(todosLI);
	}, this);
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delet this';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	createToggleButton: function(){
		var toggleButton = document.createElement('button');
		toggleButton.textContent = 'toggle';
		toggleButton.className = 'toggleButton';
		return toggleButton;
	},

	setupDeleteListener: function(){
		var todosUL = document.querySelector('ul');
		todosUL.addEventListener('click', function(event){
			console.log(event.target.parentNode.id);
			var elementClicked = event.target;
			if(elementClicked.className === 'deleteButton'){
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	},
}
view.setupDeleteListener();

