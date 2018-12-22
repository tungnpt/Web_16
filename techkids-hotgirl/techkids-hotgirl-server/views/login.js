$(document).ready(function() {
  $("#login").on("click", function(event) {
    event.preventDefault();
    $.ajax({
      url: "http://localhost:6969/login",
      type: "post",
      data: {
        username: $("#username").val(),
        password: $("#password").val(),
      },
      success: function(data) {
        console.log("login success");
        //window.location.href = "/loginsuccess";
      },
      error: function(err) {
        console.log("false");
      }
    })
  });
})

// $("loginForm").on("submit")
