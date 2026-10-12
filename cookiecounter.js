function createTableOnLoad() {
  debugger;
  let db = new restdb("6accf6400f7a29ca3b8bd09c");

  db.cookiecounter.find({}, {"$orderby": {"count": -1}}, (e, r) => {
    if(e) {
      console.log(e);
    } else {
      for (i in r) {
        let cookie_table = document.getElementById('cookie_table').getElementsByTagName('tbody')[0];
        let row = cookie_table.insertRow(-1);
        let imgCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let countCell = row.insertCell(2);
        let titleCell = row.insertCell(3);

        imgCell.innerHTML = "<img src='" + r[i].image_source + "' />"
        nameCell.innerHTML = r[i].name;
        countCell.innerHTML = r[i].count;
        titleCell.innerHTML = r[i].title;
      }
    }
  });
}

$.ready(createTableOnLoad());