$('#fav').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

$('#fav a[href="#fav"]').tab('show'); // Select tab by name
$('#myTab a:first').tab('show'); // Select first tab
$('#myTab a:last').tab('show'); // Select last tab
$('#myTab li:eq(2) a').tab('show'); // Select third tab (0-indexed)