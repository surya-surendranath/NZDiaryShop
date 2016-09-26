<input id="id1" type="number" min="100">
<button onclick="myFunction()">OK</button>

<p id="demo"></p>

<script>
function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeUnderflow) {
       txt = "Value too small";
    }
    document.getElementById("demo").innerHTML = txt;
}
</script>