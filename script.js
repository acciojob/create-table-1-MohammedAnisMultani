let btn = document.getElementsByTagName("input")[0]

// btn.addEventListener("click", insert_Row)

function insert_Row() {
    let box = document.getElementsByTagName("table")[0]
    let newrow = document.createElement("tr")
    newrow.innerHTML = `<td>New Cell1</td><td>New Cell2</td>`
    box.prepend(newrow)

}
