var data = {
    name: "Artificial Neural Network",
    intro: "Artificial neural networks (ANN) or connectionist systems are computing systems inspired by the biological neural networks that constitute animal brains. The neural network itself is not an algorithm, but rather a framework for many different machine learning algorithms to work together and process complex data inputs. Such systems learn to perform tasks by considering examples, generally without being programmed with any task-specific rules",
    rationale: "ann",
    real_world_apps: [{
            id: 0,
            name: "Image Recognition",
            icon_name: "images",
            icon_style: "fas"
        }, {
            id: 1,
            name: "Autonomous Driving",
            icon_name: "car",
            icon_style: "fas"
        },
        {
            id: 2,
            name: "Everything - AI rocks",
            icon_name: "rocket",
            icon_style: "fas"
        },
    ],
    code: {
        py: "/ANN/Python.ipynb",
        r: "/ANN/R.ipynb"
    },
    scores_explanation: "In terms of artificical intelligence, python is the language you want to look at. It has a bigger community and is continuisly improved. R seems to lack behind and adapt the strategy of providing interfaces to the most famous libraries. It is ok for small use cases, but if you want to leverage the real power of AI, go with python",
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
                    rationale: "As R is an interface to python, both look almost identical"
                },
                {
                    name: "Code Clarity",
                    r: 2,
                    py: 2,
                    rationale: "As R is an interface to python, both look almost identical"
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
                    r: 1,
                    py: 2,
                    rationale: "Keras is built upon Tensorflow, which is a Google framework for ANNs. It's community and support is one of the best in the world. R just provides an interface."
                },
                {
                    name: "Libraries Quality",
                    r: 1,
                    py: 3,
                    rationale: "R is only an interface. Python lets you interact with Keras and the underlying Tensorflow."
                },
            ]
        },
        {
            name: "Execution Performance & Output",
            total_rationale: "Both are similar in terms of execution (they both use the same python backend.) For jupyter notebooks, the R package has a bug and does not display the output during the training of the model to the notebook",
            weight: 0.30,
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
                    rationale: ""
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
                    r: 1,
                    py: 1,
                    rationale: ""
                },
                {
                    name: "Scalability",
                    r: 0,
                    py: 2,
                    rationale: ""
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
            name: "Training & Testing",
            total_rationale: "Both libraries are well documented and easy to use. The community around the python lib is bigger as it does not only provide a cross language interface.",
            weight: 0.15,
            total_r: "4",
            total_python: "5",
            subcategories: [{
                    name: "Community Support",
                    r: 0,
                    py: 1,
                    rationale: ""
                },
                {
                    name: "Ease of Learning",
                    r: 2,
                    py: 2,
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