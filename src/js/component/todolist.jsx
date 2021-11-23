import React, { useEffect, useState } from "react";

const ToDoList = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [taskExists, setTaskExists] = useState(false);

	useEffect(() => {
		let position = tasks.findIndex(task => task === newTask);
		if (position === -1) {
			setTaskExists(false);
		} else {
			setTaskExists(true);
		}
	}, [newTask]);

	const addNewTask = event => {
		if (event.key.toLowerCase() == "enter" && newTask !== "") {
			let position = tasks.findIndex(task => task === newTask);
			if (position === -1) {
				setTasks(tasks.concat(newTask));
				setNewTask("");
			}
		}
	};

	const deleteTask = index => {
		tasks.splice(index, 1);
		setTasks([...tasks]);
	};

	return (
		<div className="container">
			<h1>To Do List</h1>
			<div className="container-task">
				<input
					type="text"
					onChange={e => setNewTask(e.target.value)}
					value={newTask}
					onKeyUp={addNewTask}
					placeholder={
						tasks.length == 0
							? "No tasks, add new task"
							: "Add task"
					}
				/>
				<ul>
					{tasks.map((task, index) => (
						<li key={index}>
							<span>{task}</span>
							<span onClick={() => deleteTask(index)}>
								<i className="fas fa-times"></i>
							</span>
						</li>
					))}
				</ul>
				<p>{tasks.length + " item left"}</p>
			</div>
		</div>
	);
};

export default ToDoList;
