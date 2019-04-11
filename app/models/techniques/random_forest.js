var data = {
    name: "Random Forest Classification ",
    intro: " Random Forest classification uses a number of decision trees to vote on the best answer to a classification question. Random forest can also be used for regression models for predictions of numerical value. The machine learning technique has multiple applications due to its intuitive nature.",
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
        py: "/DecisionTreeClassification/Python.ipynb",
        r: "/DecisionTreeClassification/R.ipynb"
    },
    scores_explanation: "Overall, Python is the preferred choice thanks to faster execution and more intuitive code, which makes it easier to learn and program",
    scores: [{
        name: "Code Volume and Ease of Use ",
        total_rationale: " R has fewer lines and looks cleaner. But Python code is easier to understand ",
        total_r: "4",
        total_python: "3",
        weight: 0.20,
        subcategories: [{
            name: "Code Volume",
            r: 1,
            py: 0,
            rationale: "R has fewer lines and looks cleaner."
        }, {
            name: "Code Aesthetic",
            r: 2,
            py: 1,
            rationale: " R looks clearer and more aesthetically pleasing "
        }, {
            name: "Code Clarity",
            r: 1,
            py: 2,
            rationale: " Python code is easier to understand because it elaborates the steps more"
        }]
    }, {
        name: "Popularity & Library Availability",
        total_rationale: " Both languages have quality libraries to use for random forest classifications ",
        total_r: "5",
        total_python: "5",
        weight: 0.10,
        subcategories: [{
            name: "Popularity",
            r: 1,
            py: 1,
            rationale: "Both platforms are popular regarding random forest classifications"
        }, {
            name: "Growth",
            r: 2,
            py: 2,
            rationale: "Both languages are growing in adoption rate"
        }, {
            name: "Libraries Quality",
            r: 2,
            py: 2,
            rationale: "The libraries on both platforms offer quality functions for users"
        }, ]
    }, {
        name: "Execution Performance & Output",
        total_rationale: " Python executes more than twice as fast (0.13 sec vs 0.28 sec) as R. However, predictions are more accurate (98.2% vs 97.6%) in R than in Python.",
        total_r: "4",
        total_python: "4",
        weight: 0.25,
        subcategories: [{
            name: "Average Execution Time",
            r: 0,
            py: 1,
            rationale: "Python executes more than twice as fast (0.13 sec vs 0.28 sec) as R"
        }, {
            name: "Output Quality & Effectiveness",
            r: 2,
            py: 1,
            rationale: "Predictions are more accurate (98.2% vs 97.6%) in R than in Python."
        }, {
            name: "Console Output Clarity",
            r: 2,
            py: 2,
            rationale: "Both languages offer similar console output"
        }, ]
    }, {
        name: "Scalability & Transferability",
        total_rationale: "It’s easier to transfer to new dataset in Python. In R, you need to change a lot more variables for a new data sets",
        total_r: "4",
        total_python: "5",
        weight: 0.25,
        subcategories: [{
            name: "Transferability",
            r: 0,
            py: 1,
            rationale: "Python makes it easier to integrate with other services"
        }, {
            name: "Scalability",
            r: 2,
            py: 2,
            rationale: "Both Python and R have similar abilities to scale with larger data sets"
        }, {
            name: "Function Customization",
            r: 2,
            py: 2,
            rationale: "Both libraries from R and Python allow programmers to customize with different variables"
        }, ]
    }, {
        name: "Training & Testing",
        total_rationale: "Python is easier to learn due to its intuitive nature of the code",
        total_r: "4",
        total_python: "5",
        weight: 0.20,
        subcategories: [{
            name: "Ease of Learning",
            r: 0,
            py: 1,
            rationale: "The more intuitive code in Python makes it easier to learn and internalize the code"
        }, {
            name: "Community Support",
            r: 2,
            py: 2,
            rationale: "For Random Forest, a large number of programmers actively build models with R and Python. They also provide answers to questions relatively quickly"
        }, {
            name: "Time to Proficiency",
            r: 2,
            py: 2,
            rationale: "However, the actual different in time to learn both languages are not significantly different"
        }, ]
    }, ],
    verdict: {
        stars: {
            r: 4.1,
            py: 4.4
        },
        text: {
            r: "R provides similar capabilities for Random Forest Classification models with cleaner code and slightly higher accuracy. However, the code in R is not intuitive, which makes it difficult for new programmers to learn. Also, R executes much more slowly and is less transferable for a new data set",
            py: "Overall, Python is the preferred choice thanks to faster execution and more intuitive code, which makes it easier to learn and program. The sacrifice of accuracy in Python is not significant."
        }
    }
}
module.exports = data;