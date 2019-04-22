var data = {
    name: "Polynomial Regression ",
    intro: "Polynomial Regression is a part of linear regression in which the relationship between the independent variable x and dependent variable y is modeled as an nth degree polynomial. Polynomial regression fits a nonlinear relationship between the value of x and the similar conditional mean of y, denoted E(y |x). The relationship between the two variables is a determining factor in data analytics",
    rationale: "polynomial_regression",
    real_world_apps: [{
        id: 0,
        name: "Dependency Analysis",
        icon_name: "chart-line",
        icon_style: "fas"
    }, {
        id: 1,
        name: "Advanced Analytics",
        icon_name: "chart-bar",
        icon_style: "fas"
    }, ],
    code: {
        py: "/PolyReg/Python.ipynb",
        r: "/PolyReg/R.ipynb"
    },
    scores_explanation: " For Polynomial regression, Python is very adaptable and effective to give a concrete result. Whereas R's capability gets limited by the complexity of the code. ",
    scores: [{
        name: "Code Volume and Ease of Use ",
        total_rationale: " Python's code is less for its functionality but the readability is complex where as R has lengthier code, but readability is simpler ",
        total_r: "3",
        total_python: "4",
        weight: 0.20,
        subcategories: [{
            name: "Code Volume",
            r: 0,
            py: 1,
            rationale: " Python have less code compared to R."
        }, {
            name: "Code Aesthetic",
            r: 1,
            py: 2,
            rationale: " Python's code is straightforward and R requires multiple training course "
        }, {
            name: "Code Clarity",
            r: 2,
            py: 1,
            rationale: " Python's code is clustered and R 's code is defined in levels "
        }]
    }, {
        name: "Popularity & Library Availability",
        total_rationale: " Python is better for beginners whereas R has more traditional clientele. ",
        total_r: "4",
        total_python: "4",
        weight: 0.10,
        subcategories: [{
            name: "Popularity",
            r: 1,
            py: 1,
            rationale: " Python is viable option for quick adaption and R is built for traditional statisticians.          "
        }, {
            name: "Growth",
            r: 1,
            py: 1,
            rationale: " Python is growing in terms of usability and some of the libraries are native to python and applied in R          "
        }, {
            name: "Libraries Quality",
            r: 2,
            py: 2,
            rationale: " Python and R have same quality of libraries.          "
        }, ]
    }, {
        name: "Execution Performance & Output",
        total_rationale: " Python has an upper hand in the clarity and execution time. Both Python and R, are on the same level for effectiveness.          ",
        total_r: "3.5",
        total_python: "5",
        weight: 0.25,
        subcategories: [{
            name: "Average Execution Time",
            r: 0,
            py: 1,
            rationale: " Python and R have same output time however, R's library loading time slows the output time.          "
        }, {
            name: "Output Quality & Effectiveness",
            r: 2,
            py: 2,
            rationale: " Both Python and R have quality output and easy interpretation         ."
        }, {
            name: "Console Output Clarity",
            r: 1,
            py: 2,
            rationale: " Python's console is clearer to beginners and intermediate users. R can be complex for a novice.          "
        }, ]
    }, {
        name: "Scalability & Transferability",
        total_rationale: " Python and R, both offer same flexibility for transferability and scalability and customizable according to user's needs.          ",
        total_r: "4",
        total_python: "5",
        weight: 0.25,
        subcategories: [{
            name: "Transferability",
            r: 1,
            py: 1,
            rationale: " Both languages are capable of handling new datasets.          "
        }, {
            name: "Scalability",
            r: 1,
            py: 2,
            rationale: " Execution time runs linearly in both languages, but R's library load time is slower.         .          "
        }, {
            name: "Function Customization",
            r: 2,
            py: 2,
            rationale: " Both Python & R are capable of customing the output with the same library.          "
        }, ]
    }, {
        name: "Training & Testing",
        total_rationale: " Both Python and R have broad community support and user libraries with various tutorials          ",
        total_r: "5",
        total_python: "5",
        weight: 0.20,
        subcategories: [{
            name: "Ease of Learning",
            r: 1,
            py: 1,
            rationale: " Python & R are easy to learn and understand."
        }, {
            name: "Community Support",
            r: 2,
            py: 2,
            rationale: " Both Python & R have multiple libraries and community support available          "
        }, {
            name: "Time to Proficiency",
            r: 2,
            py: 2,
            rationale: " Both languages have quick execution time; once the libraries are loaded          "
        }, ]
    }, ],
    verdict: {
        stars: {
            r: 4,
            py: 5
        },
        text: {
            r: " While R is appealing for its 3D visualization, the language is requiring experience in coding to test and train the datasets",
            py: " Python is simpler to use and offers a user-friendly environment, it is a perfect language for users with no coding background "
        }
    }
}
module.exports = data;