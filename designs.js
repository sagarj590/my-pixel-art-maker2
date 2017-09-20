const tbl = document.getElementById("pixel_canvas");

//for constructing new grid on given inputs .
document.getElementById("sub").addEventListener("click", function() {
    tbl.innerHTML = "";
    const width = document.getElementById("input_width").value;
    const height = document.getElementById("input_height").value;

    // size of the grid and setting height and width variables.
    for (let i = 0; i < height; i++) {
        const rows = document.createElement("tr");

        let j = 0;

        while (j < width) {
            const cells = document.createElement("td");

            j++;

            rows.appendChild(cells);
        }

        tbl.appendChild(rows);
    }
    associateCellEvents();
});

//go across the entire grid(table) and call 'changeColour'function on the grid cell or box. Choose the colour from "colorPicker" accordingly and fill the cell.
const associateCellEvents = () => {
    for (let i = 0; i < tbl.rows.length; i++) {
        for (let j = 0; j < tbl.rows[i].cells.length; j++)
            tbl.rows[i].cells[j].onclick = function() {
                changeColour(this);
            };
    }
};

//choose the colour from Colour Picker accordingly and fill the cell.
const changeColour = cell => {
    const colour = document.getElementById("colorPicker").value;

    cell.style.backgroundColor = colour;
};

//as "return false" avoids the child element  to propogate to the parent elemnet it is fine to use "return false". 
const validateForm = () => {
    return false;
};