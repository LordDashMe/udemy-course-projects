const rankings = [
    {
        country: 'PH',
        total_medals: 50
    },
    {
        country: 'THA',
        total_medals: 23
    },
    {
        country: 'SIN',
        total_medals: 43
    },
    {
        country: 'CAM',
        total_medals: 43
    },
    {
        country: 'VIE',
        total_medals: 2
    }
];

function getSortedRankings(rankings) {
    return rankings.sort(function (a, b) {
        if (a.total_medals > b.total_medals) {
            return 1;
        }
        if (a.total_medals < b.total_medals) {
            return -1;
        }
        return 0;
    });
}

console.log(getSortedRankings(rankings));
