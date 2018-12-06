// $(document).ready(function() {
  $("#addRound").on("click", function() {
    // event.preventDefault();
    $("#list-round").empty();

    $("#list-round").append(`
      <tr>
        <th scope="row">1</th>
        <td><input type="number" class="form-control"></td>
        <td><input type="number" class="form-control"></td>
        <td><input type="number" class="form-control"></td>
        <td><input type="number" class="form-control"></td>
      </tr>
		`);
  })
// })
