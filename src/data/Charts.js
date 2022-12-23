import {faker} from '@faker-js/faker';

export const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const tickers = [
    'SPX', 'NDX', 'DJX', 'RUT', 'VIX', 'DJU', 'DJT', //index
    'ES', 'NQ', 'GC', 'SI', 'CL', 'ZC', 'ZW', //futures
    'AAPL', 'AMZN', 'JNJ', 'T', 'TSLA', 'MSFT', 'ZM', 'SHOP' //stocks
]

export const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        display: false,
        },
        title: {
        display: false,
        text: '',
        },
    },
};


// === STYLES ===

export const gridStyle = {
    justifyContent: 'center',
    gap: '1.5rem'
}

export const chartTitleStyles = { 
    textAlign: 'center',
    // fontFamily: '',
    fontSize: {
        md: '1rem',
        xs: '.95rem'
    },
    color: 'text.primary'
}

export const chartItemStyles = {
    textAlign: 'center',
    '&:hover': {
        animationName: 'zoom',
        animationDuration: '.30s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0)'},
            '100%' : { transform: 'scale(1.014)'}
        }
    }
}

export const chartButtonStyles = {
    color: 'text.secondary',
    margin: '.35rem 0'
}

export const dialogInfoStyles = {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: {
        md: 'space-between',
        xs: 'center',
    }, 
    gap: '.5rem',
    margin: '1rem 0', 
    padding: '1rem',
}

export const dialogButtonStyles = {
    color: 'text.primary',
    margin: '.5rem 0'
}


//INDEXES

export const SPX = {
    labels,
    datasets: [
        {
            label: 'SPX - S&P500 Index',
            data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
            // fill: true
        },
    ],
};

export const NDX = {
    labels,
    datasets: [
        {
            label: 'NDX - Nasdaq Index',
            data: labels.map(() => faker.datatype.number({ min: 14400, max: 16700 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const DJX = {
    labels,
    datasets: [
        {
            label: 'DJX - Dow Jones Index',
            data: labels.map(() => faker.datatype.number({ min: 29000, max: 36000 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const RUT = {
    labels,
    datasets: [
        {
            label: 'RUT - Russell 2000 Index',
            data: labels.map(() => faker.datatype.number({ min: 1600, max: 2400 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const VIX = {
    labels,
    datasets: [
        {
            label: 'VIX - S&P500 Volatility Index',
            data: labels.map(() => faker.datatype.number({ min: 14, max: 39 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const DJU = {
    labels,
    datasets: [
        {
            label: 'DJU - Dow Jones Utilities Index',
            data: labels.map(() => faker.datatype.number({ min: 860, max: 1060 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const DJT = {
    labels,
    datasets: [
        {
            label: 'DJT - Dow Jones Transports Index',
            data: labels.map(() => faker.datatype.number({ min: 12600, max: 16800 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};


//FUTURES

export const ES = {
    labels,
    datasets: [
        {
            label: 'ES - S&P500 Futures',
            data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const NQ = {
    labels,
    datasets: [
        {
            label: 'NQ - Nasdaq Futures',
            data: labels.map(() => faker.datatype.number({ min: 12600, max: 16800 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const GC = {
    labels,
    datasets: [
        {
            label: 'GC - Gold Futures',
            data: labels.map(() => faker.datatype.number({ min: 1600, max: 2000 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const SI = {
    labels,
    datasets: [
        {
            label: 'SI - Silver Futures',
            data: labels.map(() => faker.datatype.number({ min: 17, max: 27 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const CL = {
    labels,
    datasets: [
        {
            label: 'CL - Crude Oil Futures',
            data: labels.map(() => faker.datatype.number({ min: 60, max: 110 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const ZC = {
    labels,
    datasets: [
        {
            label: 'ZC - Corn Futures',
            data: labels.map(() => faker.datatype.number({ min: 531, max: 766 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};
export const ZW = {
    labels,
    datasets: [
        {
            label: 'ZW - Wheat Futures',
            data: labels.map(() => faker.datatype.number({ min: 743, max: 1282 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};


//STOCKS

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e5d585626emsh1fe0ea07c55b14cp12d361jsn8c352d5c7fe5',
// 		'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
// 	}
// };

// fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,AMZN,JNJ,T,TSLA,MSFT,ZM,SHOP', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

export const AAPL = {
    labels,
    datasets: [
        {
            label: 'AAPL - Apple',
            data: labels.map(() => faker.datatype.number({ min: 131, max: 179 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const AMZN = {
    labels,
    datasets: [
        {
            label: 'AMZN - Amazon',
            data: labels.map(() => faker.datatype.number({ min: 106, max: 183 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const JNJ = {
    labels,
    datasets: [
        {
            label: 'JNJ - Johnson & Johnson',
            data: labels.map(() => faker.datatype.number({ min: 160, max: 182 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const T = {
    labels,
    datasets: [
        {
            label: 'T - AT&T',
            data: labels.map(() => faker.datatype.number({ min: 14, max: 21 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const MSFT = {
    labels,
    datasets: [
        {
            label: 'MSFT - Microsoft',
            data: labels.map(() => faker.datatype.number({ min: 228, max: 343 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const ZM = {
    labels,
    datasets: [
        {
            label: 'ZM - Zoom',
            data: labels.map(() => faker.datatype.number({ min: 83, max: 264 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const SHOP = {
    labels,
    datasets: [
        {
            label: 'SHOP - Shopify',
            data: labels.map(() => faker.datatype.number({ min: 29, max: 166 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};

export const TSLA = {
    labels,
    datasets: [
        {
            label: 'TSLA - Tesla',
            data: labels.map(() => faker.datatype.number({ min: 224, max: 407 })),
            borderColor: '#318b3a',
            backgroundColor: '#00000000',
            pointBorderWidth: 0,
            pointBorderColor: '#00000000',
        },
    ],
};


// ====== DATA ======

//INDEX
export const IndexData = [
    {
        name: 'SPX - S&P500 Index',
        data: SPX,
        high: 4800, 
        low: 3500,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'NDX - Nasdaq Index',
        data: NDX,
        high: 16700, 
        low: 14400,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'DJX - Dow Jones Index',
        data: DJX,
        high: 36000, 
        low: 29000,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'RUT - Russell 2000 Index',
        data: RUT,
        high: 2400, 
        low: 1600,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'VIX - S&P500 Volatility Index',
        data: VIX,
        high: 39, 
        low: 14,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'DJU - Dow Jones Utilities Index',
        data: DJU,
        high: 1060, 
        low: 860,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'DJT - Dow Jones Transports Index',
        data: DJT,
        high: 16800, 
        low: 12600,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    }
]

//FUTURES
export const FuturesData = [
    {
        name: 'ES - S&P500 Futures',
        data: ES,
        high: 4800, 
        low: 3500,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'NQ - Nasdaq Futures',
        data: NQ,
        high: 16800, 
        low: 12600,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'GC - Gold Futures',
        data: GC,
        high: 2000, 
        low: 1600,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'SI - Silver Futures',
        data: SI,
        high: 27, 
        low: 17,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'CL - Crude Oil Futures',
        data: CL,
        high: 110, 
        low: 60,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'ZC - Corn Futures',
        data: ZC,
        high: 766, 
        low: 531,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'ZW - Wheat Futures',
        data: ZW,
        high: 1282, 
        low: 766,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
]

export const StocksData = [
    {
        name: 'AAPL - Apple',
        data: AAPL,
        high: 179,
        low: 131,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'AMZN - Amazon',
        data: AMZN,
        high: 183,
        low: 106,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'JNJ - Johnson & Johnson',
        data: JNJ,
        high: 182,
        low: 160,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'T - AT&T',
        data: T,
        high: 21,
        low: 14,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'ZM - Zoom',
        data: ZM,
        high: 264,
        low: 83,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'SHOP - Shopify',
        data: SHOP,
        high: 166,
        low: 29,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
    {
        name: 'TSLA - Tesla',
        data: TSLA,
        high: 407,
        low: 224,
        iv: faker.datatype.float({ min: 5, max: 45, precision: 0.01 })
    },
]