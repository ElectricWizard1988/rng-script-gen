var minUserValue;
var maxUserValue;

function generateScript() {

    minUserValue = document.getElementById("minvalue").value;
    maxUserValue = document.getElementById("maxvalue").value;

    let generatedScriptString = ("Math.floor(Math.random() * (" + maxUserValue + " - " + minUserValue + " + 1)) + " + minUserValue + ";").toString();

    document.getElementById("output").value = generatedScriptString;
}


function testGeneratedScript() {
    let testScript = Math.floor(Math.random() * (parseInt(maxUserValue) - parseInt(minUserValue) + 1)) + parseInt(minUserValue);
    document.getElementById("testoutput").value = testScript;
    console.log(testScript);
}