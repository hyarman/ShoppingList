const leerzeichen = " "; // Adjust the number of spaces if needed

// Function to add item to the list and localStorage
function addItem(text) {
    // Create a new <li> element
    const li = document.createElement("li");
    li.textContent = text + leerzeichen;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        li.remove();
        saveList(); // Save the list after deletion
    });

    // Append the delete button to the <li>
    li.appendChild(deleteButton);

    // Add the new <li> to the <ul>
    document.getElementById("my-list").appendChild(li);
}

// Function to save the list to localStorage
function saveList() {
    const items = [];
    document.querySelectorAll('#my-list li').forEach(li => {
        items.push(li.textContent.replace("Delete", "").trim());
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

// Function to load the list from localStorage
function loadList() {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items.forEach(item => addItem(item));
}

// Add event listener to the button
document.getElementById('add-data').addEventListener("click", function() {
    // Get the text from the textarea
    const text = document.getElementById("input-text").value;
    if (text.trim() !== "") {
        addItem(text);
        saveList(); // Save the list after adding an item
        document.getElementById("input-text").value = ''; // Clear the textarea
    }
});

// Load the list when the page is loaded
window.addEventListener('load', loadList);
