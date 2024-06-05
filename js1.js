function solveEquation() {
    var a = parseFloat(document.getElementById('coefficientA').value);
    var b = parseFloat(document.getElementById('coefficientB').value);

    if (a === 0) {
        if (b === 0) {
            document.getElementById('equationDisplay').innerHTML = 'Phương trình: ' + a + 'x + ' + b + ' = 0';
            document.getElementById('solutionDisplay').innerHTML = 'Có vô số nghiệm';
        } else {
            document.getElementById('equationDisplay').innerHTML = 'Phương trình: ' + a + 'x + ' + b + ' = 0';
            document.getElementById('solutionDisplay').innerHTML = 'Vô nghiệm';
        }
    } else {
        var solution = -b / a;
        document.getElementById('equationDisplay').innerHTML = 'Phương trình: ' + a + 'x + ' + b + ' = 0';
        document.getElementById('solutionDisplay').innerHTML = 'Có nghiệm: ' + solution;
    }
}
