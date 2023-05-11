async function main() {
    // I don't know if this is the part I did wrong, but for some reason nothing is
    // showing up in browser. 
        fetch('https://api.twelvedata.com/stocks')
            .then((response)=> response.json())
            .then((data)=> console.log(data));
    
           
    
        const {GME, MSFT, DIS, BTNX} = result
    
        const timeChartCanvas = document.querySelector('#time-chart');
        const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
        const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    
        stocks.forEach (stock => stock.values.reverse())
    
        new Chart(timeChartCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: stocks[0].values.map( value => value.datetime),
                    datasets: stocks.map(stock => ({
                        label: stock.meta.symbol,
                        data: stocks.values.map(value => parseFloat(value.high)),
                        backgroundColor: getColor(stock.meta.symbol),
                        borderColor: getColor(stock.meta.symbol),
    
                    })),
                }
            });
        
        
        console.log(stocks[0].values.map( value => value.datetime))
    }
    
    function getColor(stock){
        if(stock === "GME"){
            return 'rgba(61, 161, 61, 0.7)'
        }
        if(stock === "MSFT"){
            return 'rgba(209, 4, 25, 0.7)'
        }
        if(stock === "DIS"){
            return 'rgba(18, 4, 209, 0.7)'
        }
        if(stock === "BNTX"){
            return 'rgba(166, 43, 158, 0.7)'
        }
    }
    
    main()