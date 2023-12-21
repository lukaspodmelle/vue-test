// store.js
import { reactive } from 'vue';

interface Todo {
	id: number;
	title: string;
	done: boolean;
	comments?: number;
	tag?: string;
}

const generateId = () => {
	return Math.floor(Math.random() * 1000);
};

const initialData = [
	{
		id: generateId(),
		title: 'Dokončit testovku Freela',
		done: false,
		comments: 2,
		tag: 'Důležité',
	},
	{
		id: generateId(),
		title: 'Pořádně se naučit Vue',
		done: false,
		comments: 1,
		tag: 'Na doma',
	},
	{
		id: generateId(),
		title: 'Nakoupit banány',
		done: false,
		comments: 6,
		tag: 'Nákupy',
	},
];

export const store = reactive({
	todos: initialData as Todo[],

	addTodo(title: string) {
		const newTask = {
			id: this.todos.length + generateId(),
			title,
			done: false,
			comments: 0,
		};
		this.todos.push(newTask);
	},

	deleteTodo(id: number) {
		const index = this.todos.findIndex((todo) => todo.id === id);
		if (index !== -1) {
			this.todos.splice(index, 1);
		}
	},

	completeTodo(id: number) {
		const todo = this.todos.find((todo) => todo.id === id);
		if (todo) {
			todo.done = !todo.done;
		}
	},
});
