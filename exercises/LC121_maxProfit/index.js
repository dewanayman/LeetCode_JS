var maxProfit = function(prices) {
    let maxProfit = 0;
    let cheapest = prices[0];

    for (let i = 0; i < prices.length; i++) {
        currentProfit = prices[i] - cheapest;
        maxProfit = Math.max(currentProfit, maxProfit);

        cheapest = Math.min(prices[i], cheapest);
    }

    return maxProfit;
};

module.exports = maxProfit;
