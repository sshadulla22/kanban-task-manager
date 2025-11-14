import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTasks, 
  faSpinner, 
  faCheckCircle, 
  faEye, 
  faUserPlus, 
  faUser 
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
const [tasks, setTasks] = useState([
  { id: 1, title: "Design Landing Page", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "todo", priority: "High" },
  { id: 2, title: "Setup Database Schema", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "todo", priority: "Medium" },
  { id: 3, title: "API Integration", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "inprogress", priority: "Low" },
  { id: 4, title: "Write Unit Tests", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "inprogress", priority: "High" },
  { id: 5, title: "UI Review", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "underreview", priority: "Medium" },
  { id: 6, title: "Fix CSS Bugs", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "underreview", priority: "Low" },
  { id: 7, title: "Deploy to Server", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "done", priority: "High" },
  { id: 8, title: "Update Documentation", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "done", priority: "Medium" },
  { id: 9, title: "Add Dark Mode", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "todo", priority: "Low" },
  { id: 10, title: "Optimize Images", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "inprogress", priority: "High" },
  { id: 11, title: "Integrate Payment Gateway", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "todo", priority: "High" },
  { id: 12, title: "Set Up CI/CD", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "inprogress", priority: "Medium" },
  { id: 13, title: "Create API Documentation", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "underreview", priority: "Low" },
  { id: 14, title: "Test User Authentication", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "done", priority: "High" },
  { id: 15, title: "Fix Responsive Layout", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "todo", priority: "Medium" },
  { id: 16, title: "Implement Notifications", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "inprogress", priority: "Low" },
  { id: 17, title: "Setup Analytics", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "underreview", priority: "High" },
  { id: 18, title: "Code Refactoring", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "done", priority: "Medium" },
  { id: 19, title: "Fix Security Issues", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "todo", priority: "High" },
  { id: 20, title: "Design Landing Animation", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "inprogress", priority: "Medium" },
  { id: 21, title: "Implement Dark Mode Toggle", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "underreview", priority: "Low" },
  { id: 22, title: "Database Backup Setup", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "done", priority: "High" },
  { id: 23, title: "Create Dashboard UI", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "todo", priority: "Medium" },
  { id: 24, title: "Integrate Chat Feature", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "inprogress", priority: "High" },
  { id: 25, title: "SEO Optimization", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "underreview", priority: "Medium" },
  { id: 26, title: "Fix Broken Links", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "done", priority: "Low" },
  { id: 27, title: "Add Multi-language Support", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "todo", priority: "Medium" },
  { id: 28, title: "Implement Search Function", person: "Shadulla", photo: "https://randomuser.me/api/portraits/men/32.jpg", status: "inprogress", priority: "High" },
  { id: 29, title: "Bug Fix Sprint", person: "Mavia", photo: "https://randomuser.me/api/portraits/women/44.jpg", status: "underreview", priority: "Medium" },
  { id: 30, title: "Final Deployment", person: "Sameer", photo: "https://randomuser.me/api/portraits/men/54.jpg", status: "done", priority: "High" }
]);

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterName, setFilterName] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");

  // Add Task using SweetAlert
  const handleAddTask = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add New Task",
      html:
        '<input id="swal-task-title" class="swal2-input" placeholder="Task Title">' +
        '<input id="swal-task-person" class="swal2-input" placeholder="Assigned To">' +
        '<select id="swal-task-priority" class="swal2-select">' +
          '<option value="High">High</option>' +
          '<option value="Medium">Medium</option>' +
          '<option value="Low">Low</option>' +
        '</select>',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Add Task',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'swal2-popup',
        input: 'swal2-input',
        select: 'swal2-select',
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-cancel'
      },
      preConfirm: () => {
        const title = document.getElementById("swal-task-title").value;
        const person = document.getElementById("swal-task-person").value;
        const priority = document.getElementById("swal-task-priority").value;
        if (!title || !person) {
          Swal.showValidationMessage("Please enter both title and person");
          return false;
        }
        return { title, person, priority };
      }
    });

    if (formValues) {
      const newTask = {
        id: Date.now(),
        title: formValues.title,
        person: formValues.person,
        photo: "https://randomuser.me/api/portraits/lego/1.jpg",
        status: "todo",
        priority: formValues.priority
      };
      setTasks([...tasks, newTask]);
      Swal.fire("Added!", "Task has been added successfully", "success");
    }
  };

  // Drag Start
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  // Drop
  const handleDrop = (e, newStatus) => {
    const taskId = Number(e.dataTransfer.getData("taskId"));
    setTasks(prev => prev.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
  };

  // Filter tasks by status, name, and priority
  const filterTasks = (list) => {
    return list.filter(task => 
      (filterStatus === "all" || task.status === filterStatus) &&
      (filterPriority === "all" || task.priority.toLowerCase() === filterPriority.toLowerCase()) &&
      (filterName.trim() === "" || task.person.toLowerCase().includes(filterName.toLowerCase()))
    );
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Kanban Task Manager</h1>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button className="add-btn" onClick={handleAddTask}>
            <FontAwesomeIcon icon={faUserPlus} /> Add Task
          </button>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All Tasks</option>
            <option value="todo">Todo</option>
            <option value="inprogress">In Progress</option>
            <option value="underreview">Under Review</option>
            <option value="done">Done</option>
          </select>
          <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
            <option value="all">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input 
            type="text" 
            placeholder="Filter by name..." 
            value={filterName} 
            onChange={(e) => setFilterName(e.target.value)} 
          />
        </div>
      </header>

      {/* Kanban Board */}
      <div className="board">
        {["todo", "inprogress", "underreview", "done"].map(col => (
          <div
            key={col}
            className="column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, col)}
          >
            <h2>
              {col === "todo" ? <><FontAwesomeIcon icon={faTasks} /> Todo</> :
               col === "inprogress" ? <><FontAwesomeIcon icon={faSpinner} spin /> In Progress</> :
               col === "underreview" ? <><FontAwesomeIcon icon={faEye} /> Under Review</> :
               <><FontAwesomeIcon icon={faCheckCircle} /> Done</>}
            </h2>

            <div className="tasks">
              {filterTasks(tasks)
                .filter(task => task.status === col)
                .map(task => (
                  <div key={task.id} className="task" draggable onDragStart={(e) => handleDragStart(e, task.id)}>
                    <div className="task-top">
                      <strong>{task.title}</strong>
                      <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                    </div>
                    <div className="person-info">
                      <img src={task.photo} alt={task.person} className="person-photo" />
                      <FontAwesomeIcon icon={faUser} style={{ color: "#555", fontSize: "12px" }} />
                      <span>{task.person}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
