const input = document.getElementById("text-box");
const btn = document.getElementById("btn");
const tasks = document.getElementById("tasks");

btn.addEventListener("click", function(e) {
    try {
        let text = input.value;

        if (text === "") {
            throw new Error("Task is empty!");
        }

        const newtask = document.createElement("p");
        newtask.classList.add("task");

        newtask.addEventListener('dblclick', () => {
            newtask.classList.add('line-through');
        });

        let addvalue = document.createElement("span");
        addvalue.innerHTML = text;
        newtask.appendChild(addvalue);

        let toEdit = document.createElement("button");
        toEdit.classList.add("editt");
        toEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        newtask.appendChild(toEdit);

        let toDelete = document.createElement("button");
        toDelete.classList.add("editt");
        toDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
        newtask.appendChild(toDelete);

        toEdit.addEventListener("click", () => {
            let val = prompt("Edit please");
            if (val !== null) {
                addvalue.innerHTML = val;
            }
        });

        toDelete.addEventListener("click", () => {
            newtask.remove();
        });

        tasks.appendChild(newtask);

        input.value = "";
    } catch (error) {
        alert(error.message);
    }
});