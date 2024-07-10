function checkEndsWith() {
    let str = "Hello World";
    let endsWithWorld = str.endsWith('World');
    
    if (endsWithWorld) {
        alert("'Hello World' ends with 'World'");
    } else {
        alert("'Hello World' does not end with 'World'");
    }
}
