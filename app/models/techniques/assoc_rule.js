var data = {
    name: "Assiociation Rule",
    intro: "Association rules are if-then statements that help to show the probability of relationships between data items within large data sets in various types of databases. Association rule mining has a number of applications and is widely used to help discover sales correlations in transactional data or in medical data sets.",
    rationale: "assoc_rule",
    real_world_apps: [{
            id: 0,
            name: "Customer Purchase",
            icon_name: "shopping-basket",
            icon_style: "fas"
        }, {
            id: 1,
            name: "Online Recommendations",
            icon_name: "amazon",
            icon_style: "fab"
        },
        {
            id: 2,
            name: "Medical Diagnosis",
            icon_name: "user-md",
            icon_style: "fas"
        },
    ],
    code: {
        py: "/AssociationRule/Python.ipynb",
        r: "/AssociationRule/R.ipynb"
    },
    scores_explanation: "Because I said so",
    scores: [{
            name: "Code Volume and Ease of Use ",
            total_rationale: "",
            weight: 0.20,
            total_r: "5",
            total_python: "4",
            subcategories: [{
                    name: "Code Volume",
                    r: 1,
                    py: 1,
                    rationale: "."
                },
                {
                    name: "Code Aesthetic",
                    r: 1,
                    py: 2,
                    rationale: "."
                },
                {
                    name: "Code Clarity",
                    r: 2,
                    py: 2,
                    rationale: "."
                }
            ]
        },
        {
            name: "Popularity & Library",
            total_rationale: "",
            weight: 0.10,
            total_r: "5",
            total_python: "4",
            subcategories: [{
                    name: "Popularity",
                    r: 1,
                    py: 1,
                    rationale: "."
                },
                {
                    name: "Libraries",
                    r: 1,
                    py: 2,
                    rationale: "."
                },
            ]
        },
        {
            name: "Execution Performance & Output",
            total_rationale: "",
            weight: 0.30,
            total_r: "5",
            total_python: "4",
            subcategories: [{
                    name: "Average Execution Time",
                    r: 1,
                    py: 1,
                    rationale: "."
                },
                {
                    name: "Graphical Output Clarity",
                    r: 1,
                    py: 2,
                    rationale: "."
                }, {
                    name: "Console Output Clarity",
                    r: 1,
                    py: 2,
                    rationale: "."
                },
            ]
        },
        {
            name: "Scalability & Transferability",
            total_rationale: "",
            weight: 0.25,
            total_r: "5",
            total_python: "4",
            subcategories: [{
                    name: "Scalability",
                    r: 1,
                    py: 1,
                    rationale: "."
                },
                {
                    name: "Function Customization",
                    r: 1,
                    py: 2,
                    rationale: "."
                },
            ]
        },
        {
            name: "Training & Support",
            total_rationale: "",
            weight: 0.15,
            total_r: "5",
            total_python: "4",
            subcategories: [{
                    name: "Community Support",
                    r: 1,
                    py: 1,
                    rationale: "."
                },
                {
                    name: "Ease of Learning",
                    r: 1,
                    py: 2,
                    rationale: "."
                },
                {
                    name: "Time to Proficiency",
                    r: 1,
                    py: 2,
                    rationale: "."
                },
            ]
        },
    ],
    verdict: {
        stars: {
            r: 5,
            py: 4

        },
        text: {
            r: "Put your conclusion here.",
            py: "Put your conclusion here."
        }
    }
}

module.exports = data;