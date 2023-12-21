<script setup lang="ts">
import { ref } from 'vue';
import {
	BanknotesIcon,
	ClockIcon,
	CalculatorIcon,
	PlusIcon,
} from '@heroicons/vue/24/outline';
import { store } from './store/store.ts';
import Task from './components/Task.vue';

const controlsButton = 'w-4 h-4';

/* Remove Todo Item */
const removeTodo = (id: number) => {
	store.deleteTodo(id);
};

/* Add Todo Item */
const todoTitle = ref('');
const handleAddTodo = () => {
	if (todoTitle.value.trim() !== '') {
		store.addTodo(todoTitle.value.trim());
		todoTitle.value = '';
	}
};
</script>

<template>
	<div
		class="max-w-[900px] md:mx-auto my-20 px-6 py-4 mx-6 rounded-md shadow-md bg-white">
		<div
			class="flex justify-between items-center border-b border-slate-200 py-2">
			<h1>Todo List</h1>
			<div class="flex gap-3">
				<div
					class="flex flex-col sm:flex-row gap-1 items-center text-xs text-slate-500">
					<BanknotesIcon :class="controlsButton" />20 000 Kč
				</div>
				<div
					class="flex flex-col sm:flex-row gap-1 items-center text-xs text-slate-500">
					<CalculatorIcon :class="controlsButton" />158:00 h
				</div>
				<div
					class="flex flex-col sm:flex-row gap-1 items-center text-xs text-slate-500">
					<ClockIcon :class="controlsButton" />2:00 h
				</div>
			</div>
		</div>
		<ul>
			<Task
				v-for="task in store.todos"
				:key="task.id"
				:title="task.title"
				:comments="task.comments"
				:tag="task.tag"
				@on-delete="removeTodo(task.id)" />
		</ul>
		<div class="flex gap-2 mt-4">
			<form @submit.prevent="handleAddTodo" class="contents">
				<input
					v-model="todoTitle"
					type="text"
					placeholder="Nový úkol"
					class="border border-slate-200 py-2 px-3 rounded-md focus:outline-slate-200" />
				<button
					type="submit"
					class="flex justify-center items-center gap-2 px-4 py-2 rounded-md border border-slate-200 hover:bg-slate-50">
					<PlusIcon class="w-4 h-4" /> Přidat úkol
				</button>
			</form>
		</div>
	</div>
</template>
