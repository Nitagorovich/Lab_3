let isExist = false;

function createTable() {
    if (!isExist) {
        const table = document.createElement("table");
        table.setAttribute("id", "mytable");

        document.getElementById('container').appendChild(table);
        isExist = true;

        document.getElementById('add').disabled = false;
        document.getElementById('delete').disabled = false;
        document.getElementById('rowNumber').disabled = false;
    }
    else {
        alert('Таблица уже создана!');
    }
}

function addRowCount() {
    const rowCountInput = document.getElementById('rowCount');
    const newRowCount = parseInt(rowCountInput.value) + 1;
    rowCountInput.value = newRowCount;
    return rowCountInput.value;
}

function addRow() {
    const table = document.getElementById('mytable');
    const rowNum = addRowCount();
    const row = table.insertRow();

    row.setAttribute('id', 'num-' + rowNum);

    const tdNum = row.insertCell();
    tdNum.textContent = rowNum;

    const tdValue = row.insertCell();
    tdValue.textContent = 'value ' + Math.floor(Math.random()*100);
}

function removeRow() {
    const input = document.getElementById('rowNumber').value;
    let hiddenInput = document.getElementById('rowCount').value;
    const table = document.getElementById('mytable');

    if (parseInt(input) <= parseInt(hiddenInput)) {
        table.deleteRow(input - 1);
        hiddenInput -= 1;
    } 
    else {
        alert('Такой строки не существует!');
    }
}