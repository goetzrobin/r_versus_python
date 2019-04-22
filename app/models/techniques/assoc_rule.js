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
        total_rationale: "While both languages are pretty straight forward and the code is clear to read, R is unbeatable when it comes to displaying graphics",
        weight: 0.20,
        total_r: "5",
        total_python: "4",
        subcategories: [{
                name: "Code Volume",
                r: 1,
                py: 0,
                rationale: "R makes it very easy to print graphics and reduces the code we need to write."
            },
            {
                name: "Code Aesthetic",
                r: 2,
                py: 2,
                rationale: ""
            },
            {
                name: "Code Clarity",
                r: 2,
                py: 2,
                rationale: ""
            }
        ]
    },
    {
        name: "Popularity & Libraries",
        total_rationale: "To build ANN, R's package provides an interface to Tensorflow running on Python. Thus, we actually run python code despite writing instructions in R.",
        weight: 0.10,
        total_r: "2",
        total_python: "5",
        subcategories: [{
                name: "Popularity",
                r: 0,
                py: 1,
                rationale: "Keras is built upon Tensorflow, which is a Google framework for ANNs. It's community and support is one of the best in the world. R just provides an interface."
            },
            {
                name: "Library Quality",
                r: 1,
                py: 2,
                rationale: "R is only an interface. Python lets you interact with Keras and the underlying Tensorflow."
            },
            {
                name: "Growth",
                r: 0,
                py: 2,
                rationale: "The Tensorflow framework and Keras are backed by Google and growing rapidly."
            },
        ]
    },
    {
        name: "Execution Performance & Output",
        total_rationale: "Both are similar in terms of execution (they both use the same python backend.) For jupyter notebooks, the R package has a bug and does not display the output during the training of the model to the notebook",
        weight: 0.25,
        total_r: "3",
        total_python: "5",
        subcategories: [{
                name: "Average Execution Time",
                r: 1,
                py: 1,
                rationale: ""
            },
            {
                name: "Output Quality & Effectiveness",
                r: 2,
                py: 2,
                rationale: ""
            }, {
                name: "Console Output Clarity",
                r: 0,
                py: 2,
                rationale: "R does not provide any output to the Jupyter notebook"
            },
        ]
    },
    {
        name: "Scalability & Transferability",
        total_rationale: "Both let you export the models to e.g. Google's ANN Cloud offerinng. However, the python process is more straight forward and you store the data as a python data object.",
        weight: 0.25,
        total_r: "3",
        total_python: "5",
        subcategories: [{
                name: "Transferability",
                r: 0,
                py: 1,
                rationale: "The model can be exported as a python array"
            },
            {
                name: "Scalability",
                r: 0,
                py: 2,
                rationale: "We use python under the hood and therefore all scalability and transferability is python based."
            },
            {
                name: "Function Customization",
                r: 2,
                py: 2,
                rationale: ""
            },
        ]
    },
    {
        name: "Training & Support",
        total_rationale: "Both libraries are well documented and easy to use. The community around the python lib is bigger as it does not only provide a cross language interface.",
        weight: 0.20,
        total_r: "4",
        total_python: "5",
        subcategories: [{
                name: "Community Support",
                r: 0,
                py: 2,
                rationale: "Since the R package only supplies a interface to Python, one relies on the Python community."
            },
            {
                name: "Ease of Learning",
                r: 1,
                py: 1,
                rationale: ""
            },
            {
                name: "Time to Proficiency",
                r: 2,
                py: 2,
                rationale: ""
            },
        ]
    },
],
verdict: {
    stars: {
        r: 2,
        py: 5

    },
    text: {
        r: "R provides interfaces to the most common libraries. However, it is lacking behind and definitely not on the front of innovation",
        py: "Many popular and powerful libraries are either supporting or written in python. It is on the front of innovation and THE language you want to use when it comes to ANN"
    }
}
}

module.exports = data;