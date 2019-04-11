var data = {
        name: "Natural Language Processing ",
        intro: "Natural Language Processing uses similarities between written text to analyze whether or not specific text is considered positive or negative. The process ultimately determines how often certain words appear with positive comments and enables the user to make predictions about written text being either positive or negative",
        rationale: "nlp",
        real_world_apps: [{
            id: 0,
            name: "Sentiment Analysis",
            icon_name: "quote-left",
            icon_style: "fas"
        }, {
            id: 1,
            name: "Stock Price Predictions",
            icon_name: "chart-line",
            icon_style: "fas"
        }, {
            id: 2,
            name: "Customer Management",
            icon_name: "address-card",
            icon_style: "fas"
        }, ],
        code: {
            py: "/NLP/Python.ipynb",
            r: "/NLP/R.ipynb"
        },
        scores_explanation: " Python is ultimately the superior choice for NLP because it is quicker to write code to display similar outputs and the community surrounding the technique is more plentiful ",
        scores: [{
            name: "Code Volume and Ease of Use ",
            total_rationale: " Python is overall much clearer than R for readability and clarity of code given R’s reliance on vector notation ",
            total_r: "3",
            total_python: "4",
            weight: 0.20,
            subcategories: [{
                name: "Code Volume",
                r: 1,
                py: 0,
                rationale: " Python has fewer lines of code required to implement a similar procedure "
            }, {
                name: "Code Aesthetic",
                r: 1,
                py: 2,
                rationale: " Both languages look clear, but R has some repeated code necessary to run the program "
            }, {
                name: "Code Clarity",
                r: 1,
                py: 2,
                rationale: " Given that R requires matrices and vector spaces to properly use a NLP model, Python is simpler "
            }]
        }, {
            name: "Popularity & Library Availability",
            total_rationale: " Both languages post beneficial growth prospects and have targeted libraries for NLP specifically ",
            total_r: "4",
            total_python: "5",
            weight: 0.10,
            subcategories: [{
                name: "Popularity",
                r: 0,
                py: 1,
                rationale: " Python is ultimately used more often in the field, relative to R for Natural Language Processing "
            }, {
                name: "Growth",
                r: 2,
                py: 2,
                rationale: " Both languages are growing in popularity for this technique, but Python is surpassing R "
            }, {
                name: "Libraries Quality",
                r: 2,
                py: 2,
                rationale: " Certain libraries are required and target NLP specifically, thus the libraries are high quality and reduce code volume "
            }, ]
        }, {
            name: "Execution Performance & Output",
            total_rationale: " Python and R are very similar for these criterion, but Python eeks out a win due to small performance improvements ",
            total_r: "3",
            total_python: "5",
            weight: 0.25,
            subcategories: [{
                name: "Average Execution Time",
                r: 0,
                py: 1,
                rationale: " Given the dupliacte code, R is slightly slower than Python, but Python becomes slower for large datasets with erratic data "
            }, {
                name: "Output Quality & Effectiveness",
                r: 1,
                py: 2,
                rationale: " Python and R ultimately require different strategies to analyze NLP, but Python is overall more clea."
            }, {
                name: "Console Output Clarity",
                r: 2,
                py: 2,
                rationale: " The console output for both languages is extremely similar for NLP, only a 2×2 grid is output "
            }, ]
        }, {
            name: "Scalability & Transferability",
            total_rationale: " R surpasses Python in terms of its ability to integrate new data sets and scale to larger data sets ",
            total_r: "4",
            total_python: "3",
            weight: 0.25,
            subcategories: [{
                name: "Transferability",
                r: 0,
                py: 0,
                rationale: " Neither language has an easily transferable structure in terms of new data being analyzed "
            }, {
                name: "Scalability",
                r: 2,
                py: 1,
                rationale: " Python has a very easy system to reject certain lines of code, but this causing execution errors, while R can more easily integrate new data "
            }, {
                name: "Function Customization",
                r: 2,
                py: 2,
                rationale: " A large amount of customization is possible for how the data is to be analyzed for both Python and R "
            }, ]
        }, {
            name: "Training & Testing",
            total_rationale: " Given that Python was simpler to learn, it took less time to become proficient with the language ",
            total_r: "3",
            total_python: "5",
            weight: 0.20,
            subcategories: [{
                name: "Ease of Learning",
                r: 0,
                py: 1,
                rationale: " Python was easier to learn, given R’s vector notation and reliance on Inner Product Spaces "
            }, {
                name: "Community Support",
                r: 2,
                py: 2,
                rationale: " Both languages have tremendous support online on many different forums"
            }, {
                name: "Time to Proficiency",
                r: 1,
                py: 2,
                rationale: " Given that Python was simpler to learn, it took less time to become proficient with the language "
            }, ]
        }, ],
        verdict: {
            stars: {
                r: 3,
                py: 5
            },
            text: {
                r: " While R is appealing for its vector formats, the language is clunky for the strategy and difficult to create malleable datasets ",
                py: " Python is ultimately simpler to use to remove errors in the Data, causing the programming overall to be simpler "
            }
        }
    }
    module.exports = data;