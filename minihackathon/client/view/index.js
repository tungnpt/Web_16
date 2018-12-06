var gameId = null;

$.ajax({
  url: "http://localhost:8080/newestGame",
  type: "GET",
  success: function(data) {
    console.log("data");
    // $("#question").text(data.question.content);
    // questionId = data.question._id;
    // $("#question").attr("data-question", data.question._id);
  },
  error: function(err) {
    console.log(err)
  }
});

$("createNewGame").on("click", function() {
  $.ajax({
    url: "http://localhost:6969/answer",
    type: "post",
    data: {
      questionId: $("#question").attr("data-question"),
      vote: $(this).attr("id") //"yes" || "no"
    },
    success: function(data) {
      console.log(data);
      // window.location.href = "/question/" + data.question._id;
      window.location.href = "/questiondetail/" + data.question._id;
    },
    error: function(err) {

    }
  })
})
