// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-Devour").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("newEat");

    var newEat = {
      Devoured: false
    };

    // Send the PUT request.
    $.ajax("/api/Burgers/" + id, {
      type: "PUT",
      data: newEat
    }).then(
      function() {
        console.log("Devoured!! Burger at id"+id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/Burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-Burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/Burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted Burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
