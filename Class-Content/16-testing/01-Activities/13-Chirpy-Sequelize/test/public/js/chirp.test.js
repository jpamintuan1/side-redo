var should = require("chai").should();

describe("chirp", function() {
  it("should create UI for chirps", function() {
    var chirps = [{author:"test",body:'test body',created_at:"1/1/2017"}];
    $(document.body).append($("<div id='chirp-area'/>"))
    displayChirps(chirps);
    var numberOfRows = $("#chirp-area div.chirp").length;
    numberOfRows.should.equal(1);
    /*
     var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);
    */
  });
});