function addExperience() {
  const tbody = document.getElementById("experience-body");

  // Remove "no experience" row if present
  const noExpRow = document.querySelector(".no-experience");
  if (noExpRow) {
    noExpRow.remove();
  }

  // Create new row
  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td><input type="text" placeholder="Enter Organization Name"></td>
  <td><input type="date"></td>
  <td><input type="text" placeholder="DD/MM/YYYY / Text"></td>
  <td>
    <button class="edit-btn" onclick="editRow(this)">
      <i class="fas fa-pen"></i>
    </button>
    <button class="delete-btn" onclick="deleteRow(this)">
      <i class="fas fa-trash"></i>
    </button>
  </td>
  <td><input type="checkbox"></td>
`;



  tbody.appendChild(tr);
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();

  const tbody = document.getElementById("experience-body");
  if (tbody.children.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="5" class="no-experience">
      No experience details added. Click “+ Experience” to add your work history
    </td>`;
    tbody.appendChild(tr);
  }
}

function editRow(button) {
  alert("Edit functionality can be implemented here.");
}
