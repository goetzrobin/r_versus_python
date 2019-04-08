var data = {
    name: "Random Forest Classification",
    intro: "Random Forest classification uses a number of decision trees to vote on the best answer to a classification question. Random forest can also be used for regression models for predictions of numerical value. The machine learning technique has multiple applications due to its intuitive nature. has  Association rules are if-then statements that help to show the probability of relationships between data items within large data sets in various types of databases. Association rule mining has a number of applications and is widely used to help discover sales correlations in transactional data or in medical data sets.",
    rationale: "random_forest",
    real_world_apps: [{
        id: 0,
        name: "Fraud Detection",
        icon_name: "ghost",
        icon_style: "fas"
    }, {
        id: 1,
        name: "User Behavior",
        icon_name: "user-tag",
        icon_style: "fas"
    }, {
        id: 2,
        name: "Medical Diagnosis",
        icon_name: "diagnoses",
        icon_style: "fas"
    }, ],
    code: {
        py: "/RandomForest/Python.ipynb",
        r: "/RandomForest/R.ipynb"
    },
    scores_explanation: "Overall, Python is the preferred choice thanks to faster execution and more intuitive code, which makes it easier to learn and program",
    scores: [{
        name: " Code Volume and Ease of Use ",
        total_rationale: "R has fewer lines and looks cleaner. But Python code is more easy to understand",
        weight: 0.20,
        total_r: "3",
        total_python: "4",
        subcategories: [{
            name: "Code Volume",
            r: 1,
            py: 1,
            rationale: ""
        }, {
            name: "Code Aesthetic",
            r: 1,
            py: 2,
            rationale: ""
        }, {
            name: "Code Clarity",
            r: 2,
            py: 2,
            rationale: ""
        }]
    }, {
        name: "Popularity & Library",
        total_rationale: "Both languages have quality libraries to use for random forest classifications",
        weight: 0.10,
        total_r: "5",
        total_python: "5",
        subcategories: [{
            name: "Popularity",
            r: 1,
            py: 1,
            rationale: ""
        }, {
            name: "Libraries",
            r: 1,
            py: 2,
            rationale: ""
        }, ]
    }, {
        name: "Execution Performance & Output",
        total_rationale: "Python executes more than twice as fast (0.13 sec vs 0.28 sec) as R. However, predictions are more accurate (98.2% vs 97.6%) in R than in Python. ",
        weight: 0.30,
        total_r: "4",
        total_python: "4",
        subcategories: [{
            name: "Average Execution Time",
            r: 1,
            py: 1,
            rationale: ""
        }, {
            name: "Graphical Output Clarity",
            r: 1,
            py: 2,
            rationale: ""
        }, {
            name: "Console Output Clarity",
            r: 1,
            py: 2,
            rationale: ""
        }, ]
    }, {
        name: "Scalability & Transferability",
        total_rationale: "Easier to transfer to new dataset in Python. In R, you need to change a lot more variables",
        weight: 0.25,
        total_r: "4",
        total_python: "5",
        subcategories: [{
            name: "Scalability",
            r: 1,
            py: 1,
            rationale: ""
        }, {
            name: "Function Customization",
            r: 1,
            py: 2,
            rationale: ""
        }, ]
    }, {
        name: "Training & Support",
        total_rationale: "Python is easier to learn due to its intuitive nature of the code",
        weight: 0.15,
        total_r: "3",
        total_python: "5",
        subcategories: [{
            name: "Community Support",
            r: 1,
            py: 1,
            rationale: "."
        }, {
            name: "Ease of Learning",
            r: 1,
            py: 2,
            rationale: "."
        }, {
            name: "Time to Proficiency",
            r: 1,
            py: 2,
            rationale: "."
        }, ]
    }, ],
    verdict: {
        stars: {
            r: 4,
            py: 5
        },
        text: {
            r: "R code is a little less intuitive and harder to learn.",
            py: "Code is very intuitive and also executes a lot faster. Thus, we recommend to go with python for this analysis."
        }
    }
}

module.exports = data;