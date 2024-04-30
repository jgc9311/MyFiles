function createMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const mealPlan = {
        breakfast: document.getElementById('breakfast').value,
        snackOne: document.getElementById('snackOne').value,
        lunch: document.getElementById('lunch').value,
        snackTwo: document.getElementById('snackTwo').value,
        dinner: document.getElementById('dinner').value,
    };

if (!validateEmail(email)) {
    alert('Please enter your email address.');
    return;
}

const userPage = window.open('about:blank','myPop','width=600,height=600,left=350,top=350');
userPage.document.write(`
    <html>
    <head>
        <title>${name}'s Meal Plan</title>
        <style>
            body {
                font-family: Arial, Helvetica, sans-serif;
                margin: 0;
                padding: 20px;
            }
            h1 {
                text-align: center;
            }
            p {
                margin-bottom: 10px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                text-align: center;
                background-color: #f2f2f2;
            }
            .print-button,
            .download-button {
                text-align: center;
                margin-top: 25px;
            }
            .print-button button, 
            .download-button button {
                padding: 10px 20px;
            }
        </style>
    </head>
    <body>
        <h1>Weekly Meal Plan for ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Goal:</strong> ${goal}</p>
        <table>
            <tr>
                <th colspan="5">Daily Meals</th>
            </tr>
            <tr>
                <td>Breakfast</td>
                <td>${mealPlan.breakfast}</td>
            </tr>
            <tr>
                <td>Snack One</td>
                <td>${mealPlan.snackOne}</td>
            </tr>
            <tr>
                <td>Lunch</td>
                <td>${mealPlan.lunch}</td>
            </tr>
            <tr>
                <td>Snack Two</td>
                <td>${mealPlan.snackTwo}</td>
            </tr>
            <tr>
                <td>Dinner</td>
                <td>${mealPlan.dinner}</td>
            </tr>
            
        </table>
        <div class="print-button">
            <button onclick="window.print()">Print your plan</button>
        </div>
        <div class="download-button">
            <button onclick="downloadPage()">Download your plan</button>
        </div>
        <script>
            function downloadPage() {
                const filename = "${name}_meal_plan.html";
                const data = document.documentElement.outerHTML;
                const blob = new Blob([data], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }
            </script>
    </body>
    </html>
`);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}