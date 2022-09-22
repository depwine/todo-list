export var taskHeader = function(){

    const content = document.getElementById("content");

    const content_body_el = document.createElement(`div`);
    content_body_el.setAttribute(`id`, `content-body`);
        //Add Task Form

    const task_form_el = document.createElement("form");
    task_form_el.setAttribute(`id`, `new-task-form`);
    task_form_el.value = "";
    
    const text_input_el = document.createElement("input");
    text_input_el.setAttribute(`type`, `text`);
    text_input_el.setAttribute(`id`, `new-task-input`);
    text_input_el.setAttribute(`placeholder`, `What are you planning?`);
    text_input_el.value = "";

    const text_submit_el = document.createElement(`input`);
    text_submit_el.setAttribute(`type`, `submit`);
    text_submit_el.setAttribute(`id`, `new-task-submit`);
    text_submit_el.setAttribute(`value`, `Add Task`);

    task_form_el.appendChild(text_input_el);
    task_form_el.appendChild(text_submit_el);

        content_body_el.appendChild(task_form_el);
        content.appendChild(content_body_el);
}

        //Task List

export var taskList = function(){

    //
    const content = document.getElementById("content");
    const content_body_el = document.getElementById("content-body");

    const task_list_el = document.createElement("section");
    task_list_el.classList.add("task-list");

        //header
    const task_header_el = document.createElement("h2");
    task_header_el.classList.add(`h2-index`);
    task_header_el.textContent = "Tasks";

    const tasks = document.createElement("div");
    tasks.setAttribute(`id`, `tasks`);

    const single_task_el = document.createElement("div");
    single_task_el.classList.add('single-task');
    
        //content
    const task_content_el = document.createElement(`div`);
    task_content_el.classList.add(`content`);

    const task_input_el = document.createElement(`input`);
    task_input_el.setAttribute(`type`, `text`);
    task_input_el.classList.add(`text`);
    task_input_el.setAttribute(`value`, `default task: delete me if you want`);
    task_input_el.setAttribute(`readonly`, `readonly`);

    content_body_el.appendChild(task_header_el);
    task_list_el.appendChild(tasks);

    task_content_el.appendChild(task_input_el);
    single_task_el.appendChild(task_content_el);
    
    content_body_el.appendChild(task_list_el);
        content.appendChild(content_body_el);

        //add buttons:

    const actions = document.createElement(`div`);
    actions.classList.add(`actions`);

    const edit_button_el = document.createElement(`button`);
    edit_button_el.classList.add("edit");
    edit_button_el.textContent = "-->";

    const delete_button_el = document.createElement(`button`);
    delete_button_el.classList.add("delete");
    delete_button_el.textContent = "Delete";

    actions.appendChild(edit_button_el);
    actions.appendChild(delete_button_el);
    
        single_task_el.appendChild(actions);
        tasks.appendChild(single_task_el);
        content.appendChild(content_body_el);

        delete_button_el.addEventListener(`click`, () => {
            tasks.removeChild(single_task_el);            
        })
}