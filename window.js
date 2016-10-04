<!DOCTYPE html>
<html>
<body>

<p>Click the button to open a new window and add some content.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var w = window.open();
    w.document.open();
    w.document.write("<h1>Hello World!</h1>");
    w.document.close();
}
</script>

</body>
</html>
