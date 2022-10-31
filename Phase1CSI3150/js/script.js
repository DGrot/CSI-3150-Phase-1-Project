function sortYear() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("inventorytable");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;
      /*Dont sort 1st row*/
      for (i = 1; i < (rows.length - 1); i++) {

        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];

        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function sortYearN() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("inventorytable");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;
      /*Dont sort 1st row*/
      for (i = 1; i < (rows.length - 1); i++) {

        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];

        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function sortManufacturer() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("inventorytable");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;
      /*Dont sort 1st row*/
      for (i = 1; i < (rows.length - 1); i++) {

        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];

        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }


function sortModel() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("inventorytable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    /*Dont sort 1st row*/
    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortPrice() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("inventorytable");
    switching = true;
  
    while (switching) {
      switching = false;
      rows = table.rows;
      /*Dont sort 1st row*/
      for (i = 1; i < (rows.length - 1); i++) {
  
        shouldSwitch = false;
  
        x = rows[i].getElementsByTagName("TD")[4];
        y = rows[i + 1].getElementsByTagName("TD")[4];
  
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
  
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
  
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  function sortPriceH() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("inventorytable");
    switching = true;
  
    while (switching) {
      switching = false;
      rows = table.rows;
      /*Dont sort 1st row*/
      for (i = 1; i < (rows.length - 1); i++) {
  
        shouldSwitch = false;
  
        x = rows[i].getElementsByTagName("TD")[4];
        y = rows[i + 1].getElementsByTagName("TD")[4];
  
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
  
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
  
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }