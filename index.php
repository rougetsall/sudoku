<!DOCTYPE html>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>sudoku</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <script src="script.js"></script>
</head>
<body>
    <table>
        <tbody>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case0-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case0-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case0-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case0-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case0-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case0-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case0-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case0-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case0-8"></td>
            </tr>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case1-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case1-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case1-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case1-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case1-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case1-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case1-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case1-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case1-8"></td>
            </tr>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case2-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case2-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case2-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case2-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case2-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case2-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case2-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case2-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case2-8"></td>
            </tr>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case3-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case3-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case3-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case3-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case3-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case3-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case3-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case3-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case3-8"></td>
            </tr>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case4-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case4-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case4-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case4-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case4-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case4-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case4-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case4-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case4-8"></td>
            </tr>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case5-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case5-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case5-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case5-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case5-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case5-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case5-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case5-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case5-8"></td>
            </tr>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case6-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case6-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case6-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case6-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case6-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case6-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case6-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case6-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case6-8"></td>
            </tr>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case7-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case7-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case7-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case7-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case7-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case7-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case7-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case7-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case7-8"></td>
            </tr>
            <tr>
                <td><input type="number" min="1" max="9" step="1" id="case8-0"></td>
                <td><input type="number" min="1" max="9" step="1" id="case8-1"></td>
                <td><input type="number" min="1" max="9" step="1" id="case8-2"></td>
                <td><input type="number" min="1" max="9" step="1" id="case8-3"></td>
                <td><input type="number" min="1" max="9" step="1" id="case8-4"></td>
                <td><input type="number" min="1" max="9" step="1" id="case8-5"></td>
                <td><input type="number" min="1" max="9" step="1" id="case8-6"></td>
                <td><input type="number" min="1" max="9" step="1" id="case8-7"></td>
                <td><input type="number" min="1" max="9" step="1" id="case8-8"></td>
            </tr>
        </tbody>
    </table>
    <button id="button-verifier">verifier</button>  <button id="button-solution">solution</button>
    <p id="solution"></p>
</body>
</html>