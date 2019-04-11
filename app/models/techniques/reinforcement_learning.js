var data = {
        name: "Reinforcement Learning",
        intro: " Reinforcement learning, using the upper confidence bound (UCB) algorithm, can offer valuable insight when evaluating a company’s advertisements because it helps to determine which advertisement in a campaign will maximize returns. The algorithm tracks click through rates (CTRs) for various ads in a campaign. It will use this information to learn which ad has the highest CTR so that it will only show users on social networks the ads that will bring in the best results.",
        rationale: "reinforcement_learning",
        real_world_apps: [{
            id: 0,
            name: "Targeted Ad Selection",
            icon_name: "ad",
            icon_style: "fas"
        }, ],
        code: {
            py: "/ReinforcementLearning/Python.ipynb",
            r: "/ReinforcementLearning/R.ipynb"
        },
        scores_explanation: "For reinforcement learning using the upper confidence bound algorithm, both Python and R would suffice and will provide adequate results. The user may decide to use one over the other based on previous experience with the languages.",
        scores: [{
            name: "Code Volume and Ease of Use ",
            total_rationale: "Volume of code and readability is comparable for both languages.",
            total_r: "2",
            total_python: "3",
            weight: 0.20,
            subcategories: [{
                name: "Code Volume",
                r: 0,
                py: 1,
                rationale: "Python requires fewer lines of code."
            }, {
                name: "Code Aesthetic",
                r: 2,
                py: 2,
                rationale: "Code in both languages is aesthetically pleasing and easy to read."
            }, {
                name: "Code Clarity",
                r: 0,
                py: 0,
                rationale: "Code in both languages is simple to follow. However, it requires an understanding of how the upper confidence bound algorithm works, and may require a deeper analysis to understand what exactly the algorithm does."
            }]
        }, {
            name: "Popularity & Library",
            total_rationale: "Both languages require coding the algorithm from scratch, without the support of specific libraries created for this technique.",
            total_r: "0",
            total_python: "2",
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
                r: 0,
                py: 1,
                rationale: "Python continues to grow in popularity for analysis, while R is most commonly used in academic settings."
            }, ]
        }, {
            name: "Execution Performance & Output",
            total_rationale: "Execution time is highly comparable for Python and R, and both provide effective output for further understanding.",
            total_r: "4",
            total_python: "2",
            weight: 0.25,
            subcategories: [{
                name: "Average Execution Time",
                r: 1,
                py: 1,
                rationale: "There is no difference in execution time between the two languages."
            }, {
                name: "Output Quality & Effectiveness",
                r: 1,
                py: 0,
                rationale: "The output in both languages can be edited via code. But the graphical output in R is slightly clearer."
            }, {
                name: "Console Output Clarity",
                r: 2,
                py: 1,
                rationale: "The output in both languages should be understandable to the average person, but is slightly clearer in R."
            }, ]
        }, {
            name: "Scalability & Transferability",
            total_rationale: "It is easy to transfer new datasets in both languages and have similar abilities to scale.",
            total_r: "2",
            total_python: "2",
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
                r: 0,
                py: 0,
                rationale: "No parameters in the model can be altered."
            }, ]
        }, {
            name: "Training & Testing",
            total_rationale: "Technique is easy to understand and utilize in both languages.",
            total_r: "4",
            total_python: "4",
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
                r: 1,
                py: 1,
                rationale: "This technique takes over a day to learn in both languages."
            }, ]
        }, ],
        verdict: {
            stars: {
                r: 5,
                py: 4
            },
            text: {
                r: "R is slightly better than Python for this technique. The main reason a user might choose to use R over Python is that the graphical output produced is slightly more appealing.",
                py: "Python is almost equally as appealing as R for this technique. Python provides essentially the exact same results as R for this technique, but the graphical output could be clearer."
            }
        }
    }
    module.exports = data;