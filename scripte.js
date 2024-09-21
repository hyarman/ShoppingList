const leerzeichen = " "; // Adjust the number of spaces if needed

// 4&5: Add <li> element with custom text to the <ul> tag
document.getElementById('add-data').addEventListener("click", function() {
    // Get the text from the textarea
    const text = document.getElementById("input-text").value;

    // Create a new <li> element
    const li = document.createElement("li");
    li.textContent = text + leerzeichen;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    // Append the delete button to the <li>
    li.appendChild(deleteButton);

    // Add the new <li> to the <ul>
    document.getElementById("my-list").appendChild(li);

    // Clear the textarea after adding the item
    document.getElementById("input-text").value = '';
});
