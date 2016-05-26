$(() => {
  const API_URL = 'https://cruddy-todo-app.firebaseio.com/task.json'

  $.get(API_URL)
    .done((data) => {
      // Object.keys(data).forEach((key) => {
      //   addItemToTable(data[key])
      // })
      for (key in data) {
        addItemToTable(data[key])
      }
    })
})

// CREATE: form submit event to POST data to firebase
// READ: GET data from firebase and display in table
// UPDATE: click event on complete to send PUT/PATCH to firebase
// DELETE: click event on delete to send DELETE to firebase.

function addItemToTable (item) {
  const row = `<tr>
    <td>${item.task}</td>
    <td>
      <button class="btn btn-success">Complete</button>
      <button class="btn btn-danger">Delete</button>
    </td>
  </tr>`

  $('tbody').append(row)
}
