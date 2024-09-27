const newRowBtn = document.getElementById('newRowBtn');
const rowCountElement = document.getElementById('rowCount');
const jokerTable = document.getElementById('jokerTable');

let rowCount = 0;

newRowBtn.addEventListener('click', addNewJokerRow);

function addNewJokerRow() {
    rowCount++;
    rowCountElement.textContent = `Valmiita rivejä ${rowCount}`;

    const newRow = jokerTable.insertRow();

    for (let i = 0; i < 7; i++) {
        const cell = newRow.insertCell();
        const randomNumber = Math.floor(Math.random() * 10); 
        cell.textContent = randomNumber;
    }
}