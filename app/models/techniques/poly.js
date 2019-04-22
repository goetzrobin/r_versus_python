var data = {
    name: "Polynomial Regression",
    intro: "Polynomial Regression",
    rationale: "polynomial_regression",
    real_world_apps: [{
        id: 0,
        name: "Depenedence Analysis",
        icon_name: "chart-line",
        icon_style: "fas"
    }, ],
    code: {
        py: "/PolyReg/Python.ipynb",
        r: "/PolyReg/R.ipynb"
    },
    scores_explanation: "For reinforcement learning using the upper confidence bound algorithm, both Python and R would suffice and will provide adequate results. The user may decide to use one over the other based on previous experience with the languages.",
    scores: [{
        name: "Code Volume and Ease of Use ",
        total_rationale: "Volume of code and readability is comparable for both languages.",
        total_r: "3",
        total_python: "5",
        weight: 0.20,
        subcategories: [{
            name: "Code Volume",
            r: 1,
            py: 0,
            rationale: "R requires fewer lines of code."
        }, {
            name: "Code Aesthetic",
            r: 2,
            py: 2,
            rationale: "Code in both languages is aesthetically pleasing and easy to read."
        }, {
            name: "Code Clarity",
            r: 1,
            py: 1,
            rationale: "Code in both languages is simple to follow. However, it requires an understanding of how the upper confidence bound algorithm works, and may require a deeper analysis to understand what exactly the algorithm does."
        }]
    }, {
        name: "Popularity & Library",
        total_rationale: "Both languages require coding the algorithm from scratch, without the support of specific libraries created for this technique.",
        total_r: "4",
        total_python: "3",
        weight: 0.10,
        subcategories: [{
            name: "Popularity",
            r: 0,
            py: 1,
            rationale: "Python is used more often for this technique."
        }, {
            name: "Library Quality",
            r: 0,
            py: 0,
            rationale: "Both languages do not contain libraries specifically used this technique."
        }, {
            name: "Growth",
            r: 2,
            py: 2,
            rationale: "Python continues to grow in popularity for analysis, while R is most commonly used in academic settings."
        }, ]
    }, {
        name: "Execution Performance & Output",
        total_rationale: "Execution time is highly comparable for Python and R, and both provide effective output for further understanding.",
        total_r: "5",
        total_python: "5",
        weight: 0.25,
        subcategories: [{
            name: "Average Execution Time",
            r: 1,
            py: 1,
            rationale: "There is no difference in execution time between the two languages."
        }, {
            name: "Output Quality & Effectiveness",
            r: 2,
            py: 1,
            rationale: "The output in both languages can be edited via code. But the graphical output in R is slightly clearer."
        }, {
            name: "Console Output Clarity",
            r: 2,
            py: 2,
            rationale: "The output in both languages should be understandable to the average person."
        }, ]
    }, {
        name: "Scalability & Transferability",
        total_rationale: "It is easy to transfer new datasets in both languages and have similar abilities to scale.",
        total_r: "3",
        total_python: "5",
        weight: 0.25,
        subcategories: [{
            name: "Transferability",
            r: 1,
            py: 1,
            rationale: "Both languages are capable of handling new datasets."
        }, {
            name: "Scalability",
            r: 1,
            py: 1,
            rationale: "Execution time runs linearly in both languages."
        }, {
            name: "Function Customization",
            r: 1,
            py: 1,
            rationale: " Variables in both Python and R can be customized."
        }, ]
    }, {
        name: "Training & Testing",
        total_rationale: "Technique is easy to understand and utilize in both languages.",
        total_r: "3",
        total_python: "5",
        weight: 0.20,
        subcategories: [{
            name: "Community Support",
            r: 2,
            py: 2,
            rationale: "There are multiple forums discussing this technique for both languages."
        }, {
            name: "Ease of Learning",
            r: 1,
            py: 1,
            rationale: "Both languages are equal in terms of complexity."
        }, {
            name: "Time to Proficiency",
            r: 2,
            py: 2,
            rationale: " This technique takes the same amount of time to learn in both languages."
        }, ]
    }, ],
    verdict: {
        stars: {
            r: 4,
            py: 5
        },
        text: {
            r: "R is slightly better than Python for this technique. The main reason a user might choose to use R over Python is that the graphical output produced is slightly more appealing.",
            py: "Python is almost equally as appealing as R for this technique. Python provides essentially the exact same results as R for this technique, but the graphical output could be clearer."
        }
    }
}
module.exports = data;