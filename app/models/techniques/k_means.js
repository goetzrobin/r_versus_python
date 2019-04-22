var data = {
        name: "K-Means Clustering",
        intro: "K-Means Clustering is an operation that can be performed to separate different data points in a data set into different clusters based off criteria that you specify. K-Means clustering groups the points into their most optimal clusters by measuring the euclidean distance between the points and the center of a cluster.",
        rationale: "kmeans",
        // K-Means Clustering can be used by Google and other companies in order to separate customers/users into different groups. Once separated, Google can target the different groups with different adds, provide different search results, and customize their entire online experiences based off what cluster of users they belong to.",
        real_world_apps: [{
                id: 0,
                name: "Identifying User Types",
                icon_name: "users",
                icon_style: "fas"
            }, {
                id: 1,
                name: "Search Customization",
                icon_name: "google",
                icon_style: "fab"
            },
            {
                id: 2,
                name: "Targeted Advertizing",
                icon_name: "filter",
                icon_style: "fas"
            },
        ],
        code: {
            py: "/KMeans/Python.ipynb",
            r: "/KMeans/R.ipynb"
        },
        scores_explanation: "",
        scores: [{
                name: "Code Volume and Ease of Use ",
                total_rationale: "Both languages are easy to use for K-Means Clustering as well as other clustering models. Python takes slightly more lines of code which is why it loses a point in this category.",
                weight: 0.20,
                total_r: "5",
                total_python: "4",
                subcategories: [{
                        name: "Code Volume",
                        r: 1,
                        py: 0,
                        rationale: "Both languages require minimal code to produce a clustered plot of the data. R requires slightly less code"
                    },
                    {
                        name: "Code Aesthetic",
                        r: 2,
                        py: 2,
                        rationale: "The code for both languages can be structured in a simple and easy to read manner."
                    },
                    {
                        name: "Code Clarity",
                        r: 2,
                        py: 2,
                        rationale: "Same explanation as Code Aesthetics"
                    }
                ]
            },
            {
                name: "Popularity & Libraries",
                total_rationale: "Both languages are popular with tons of community support and libraries for any task one could think of regarding clustering.",
                weight: 0.10,
                total_r: "5",
                total_python: "5",
                subcategories: [{
                        name: "Popularity",
                        r: 2,
                        py: 2,
                        rationale: ""
                    },
                    {
                        name: "Libraries Quality",
                        r: 3,
                        py: 3,
                        rationale: ""
                    },
                ]
            },
            {
                name: "Execution Performance & Output",
                total_rationale: "As shown in the JupyterNotebook examples, the default output for KMeans Clustering in Python looks immeasurably better than the output produced by R. You could take the plot you’ve created in Python and present it to an executive. You could not do this with R. The clustered scatter plot that it produces would need to be modified drastically before presenting it to anyone.",
                weight: 0.25,
                total_r: "2.5",
                total_python: "4",
                subcategories: [{
                        name: "Average Execution Time",
                        r: 1,
                        py: 1,
                        rationale: " R was slightly faster each time but the difference was miniscule."
                    },
                    {
                        name: "Output Quality & Effectiveness",
                        r: 0.5,
                        py: 2,
                        rationale: "The scatter plot created by Python is clean and easy to understand while the plot created by R is not."
                    }, {
                        name: "Console Output Clarity",
                        r: 1,
                        py: 1,
                        rationale: ""
                    },
                ]
            },
            {
                name: "Scalability & Transferability",
                total_rationale: "Both can be exported effortlessely",
                weight: 0.25,
                total_r: "5",
                total_python: "5",
                subcategories: [{
                        name: "Transferability",
                        r: 1,
                        py: 1,
                        rationale: ""
                    },
                    {
                        name: "Scalability",
                        r: 2,
                        py: 2,
                        rationale: ""
                    },
                    {
                        name: "Function Customization",
                        r: 2,
                        py: 2,
                        rationale: "Although the default output is shown, each language is customizable in an immeasurable amount of ways."
                    },
                ]
            },
            {
                name: "Training & Support",
                total_rationale: "Both libraries are well documented and easy to pick up quickly and to learn.",
                weight: 0.20,
                total_r: "5",
                total_python: "5",
                subcategories: [{
                        name: "Community Support",
                        r: 2,
                        py: 2,
                        rationale: ""
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
                r: 4,
                py: 5
            },
            text: {
                r: "R is simple and effective but loses almost all of its points in the attractiveness of its output.",
                py: "Python is easy to use and very customizable to change the parameters of your analysis or the visual representation of your cluster plot. While there are a few areas where it lags behind R, it definitely is top of the class when it comes to clustering."
            }
        }
    }
    module.exports = data;