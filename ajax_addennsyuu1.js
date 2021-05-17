$(function () {
    $("#get_addresscode_btn").on("click", function () {
      $.ajax({
        url: "http://zipcoda.net/api",
        dataType: "jsonp",
        data: {
          address: $("#address").val(),
        },
        async: true,
      })
        .done(function (data) {
          console.dir(JSON.stringify(data));
          $("#addresscode").val(data.items[0].zipcode);
        })
        .fail(function (XMLHttpRequest, textStatus, errorThrown) {
          alert("正しい結果を得られませんでした。");
          console.log("XMLHttpRequest : " + XMLHttpRequest.status);
          console.log("textStatus : " + textStatus);
          console.log("errorThrown : " + errorThrown.message);
        });
    });
  });
  