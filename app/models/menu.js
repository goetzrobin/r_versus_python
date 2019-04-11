module.exports.getMenu = function getMenu() {
    var menu = [{
            name: "Home",
            url: "",
            children: []
        },
        {
            name: "Comparison",
            url: "comparison",
            children: []
        },
        {
            name: "Techniques",
            url: "technique",
            children: [
                {
                    name: "Reinforcement Learning",
                    url: "reinforcement_learning"
                },
                {
                    name: "Artificial Neural Network",
                    url: "ann"
                },
                {
                    name: "Random Forest Classification",
                    url: "random_forest"
                },
                {
                    name: "Association Rule",
                    url: "assoc_rule"
                },
                {
                    name: "K-Means Clustering",
                    url: "k_means"
                },
                {
                    name: "Natural Language Processing",
                    url: "nlp"
                },
            ]

        },
        {
            name: "Team",
            url: "team",
            children: []
        },
    ];
    return menu;
}