const readline = require('readline');

const colleges = [
    { name: "College A", location: "New York", fees: 20000, ranking: 1 },
    { name: "College B", location: "California", fees: 15000, ranking: 2 },
    { name: "College C", location: "New York", fees: 25000, ranking: 3 },
    { name: "College D", location: "New York", fees: 10000, ranking: 4 }
];

function rankColleges(preferredLocation, maxFees, rankingWeight, feesWeight) {
    const eligibleColleges = colleges.filter(college => 
        college.location === preferredLocation && college.fees <= maxFees
    );

    eligibleColleges.forEach(college => {
        const rankingScore = college.ranking * rankingWeight;
        const feesScore = (college.fees / maxFees) * feesWeight;
        college.score = rankingScore + feesScore;
    });

    eligibleColleges.sort((a, b) => a.score - b.score);

    eligibleColleges.forEach(college => {
        console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score.toFixed(2)}`);
    });

    if (eligibleColleges.length === 0) {
        console.log("No colleges match your preferences.");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Preferred location: ', (preferredLocation) => {
    rl.question('Maximum fees: ', (maxFees) => {
        rl.question('Ranking weight: ', (rankingWeight) => {
            rl.question('Fees weight: ', (feesWeight) => {
                rankColleges(preferredLocation, parseInt(maxFees), parseInt(rankingWeight), parseInt(feesWeight));
                rl.close();
            });
        });
    });
});
