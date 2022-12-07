// call the function when the page loads
const children = document.querySelector(".container").children;
const total_children = children.length;
dynamic_grid()

// If users change size of the screen, we need to re-organize the row
window.addEventListener("resize", dynamic_grid)

function define_grid_row_for_each_element() {
    const grid = window.getComputedStyle(document.querySelector(".container"));
    // The total number of columns is also the number of career in each row
    const total_columns = grid.getPropertyValue("grid-template-columns").split(" ").length;
    // console.log("total columns: " + total_columns);

    var current_row_start = 1;
    var current_row_end = 4;
    var row_num = 1;
    var career_each_row = 0;
    var element;

    for (var i = 0; i < total_children; i++) {
        element = children[i];
        element.style.gridRow = row_num + "/span 1";
        row_num++;
        if (row_num === current_row_end) {
            // console.log("reach end of row")
            career_each_row++;
            // console.log("career_each_row: " + career_each_row);
            if (career_each_row === total_columns) {
                // console.log("new row!")
                current_row_start = current_row_end;
                current_row_end += 3;
                // console.log("current_row_end is "+ current_row_end);
                career_each_row = 0;
            }
            row_num = current_row_start;
        }
        
    }
}

function dynamic_grid() {
    if (window.innerWidth >= 700) {
        define_grid_row_for_each_element();
    }
    else {
        for (var i = 0; i < total_children; i++) {
            element = children[i];
            element.style.gridRow = "auto";
        }
    }
}