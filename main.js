/* Function to slide section boxes up or down,
which will reveal (or hide) a section box's content. */

function showContent (event) {
  var target = event.target;
  var content1 = $("#content1");
  var content2 = $("#content2");
  var content3 = $("#content3");

  if (target.id === "s1") {
    content1.addClass("height-change");
    content2.removeClass("height-change");
    content3.removeClass("height-change");
  }
  else if (target.id === "s2") {
    var content = $("#content2");
    content2.addClass("height-change");
    content1.removeClass("height-change");
    content3.removeClass("height-change");
  }
  else if (target.id === "s3") {
    var content = $("#content3");
    content3.addClass("height-change");
    content1.removeClass("height-change");
    content2.removeClass("height-change");
  }
};

var viewContent = $(".titlebar");
viewContent.mouseenter(showContent);
