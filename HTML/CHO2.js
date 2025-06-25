function openModal() {
  document.getElementById('familyModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('familyModal').style.display = 'none';
}

function saveFamilyMember() {
  const relationship = document.getElementById('relationship').value;
  const occupation = document.getElementById('occupation').value;
  const employer = document.getElementById('employer').value;
  const location = document.getElementById('location').value;
  const serviceType = document.getElementById('serviceType').value;

  if (!relationship) {
    alert('Please select a relationship');
    return;
  }

  const table = document.getElementById('familyTable');
  const row = table.insertRow(-1);
  row.insertCell(0).innerText = relationship;
  row.insertCell(1).innerText = occupation;
  row.insertCell(2).innerText = employer;
  row.insertCell(3).innerText = location;
  row.insertCell(4).innerText = serviceType;
  row.insertCell(5).innerHTML = `<button onclick="deleteRow(this)">🗑️</button>`;

  document.getElementById('noFamilyMsg').style.display = 'none';
  closeModal();
}

function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  const table = document.getElementById('familyTable');
  if (table.rows.length === 1) {
    document.getElementById('noFamilyMsg').style.display = 'block';
  }
}
