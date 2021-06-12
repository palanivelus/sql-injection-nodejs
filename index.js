const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sqlInjectionDemo',
    multipleStatements: true
});


function sqlInjectionProblem() {

    const id = "1;DELETE FROM user_login";
    const sql = "SELECT * FROM user_login WHERE id = " + id + ""; // problem

    connection.query(sql, (error, results) => {

        if (!error) {
            console.log("results: " + JSON.stringify(results));

        } else {
            console.log("error: " + JSON.stringify(error));

        }

    });



}
function sqlInjectionSolution() {

    const id = "1;DELETE FROM user_login";
    const sql="SELECT * FROM user_login WHERE id = "+ connection.escape(id) +""; // solution

    connection.query(sql, (error, results) => {

        if (!error) {
            console.log("results: " + JSON.stringify(results));

        } else {
            console.log("error: " + JSON.stringify(error));

        }

    });


}

//sqlInjectionProblem();
//sqlInjectionSolution();


