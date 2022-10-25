import {faker} from '@faker-js/faker';

export const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


//INDEXES

export const SPX = {
    labels,
    datasets: [
        {
        label: 'SPX',
        data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const NDX = {
    labels,
    datasets: [
        {
        label: 'NDX',
        data: labels.map(() => faker.datatype.number({ min: 14400, max: 16700 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const DJX = {
    labels,
    datasets: [
        {
        label: 'DJX',
        data: labels.map(() => faker.datatype.number({ min: 29000, max: 36000 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const RUT = {
    labels,
    datasets: [
        {
        label: 'RUT',
        data: labels.map(() => faker.datatype.number({ min: 1600, max: 2400 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const VIX = {
    labels,
    datasets: [
        {
        label: 'VIX',
        data: labels.map(() => faker.datatype.number({ min: 14, max: 39 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const DJU = {
    labels,
    datasets: [
        {
        label: 'DJU',
        data: labels.map(() => faker.datatype.number({ min: 860, max: 1060 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const DJT = {
    labels,
    datasets: [
        {
        label: 'DJT',
        data: labels.map(() => faker.datatype.number({ min: 12600, max: 16800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

//FUTURES

export const ES = {
    labels,
    datasets: [
        {
        label: 'ES',
        data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const NQ = {
    labels,
    datasets: [
        {
        label: 'NQ',
        data: labels.map(() => faker.datatype.number({ min: 12600, max: 16800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const GC = {
    labels,
    datasets: [
        {
        label: 'GC',
        data: labels.map(() => faker.datatype.number({ min: 1600, max: 2000 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const SI = {
    labels,
    datasets: [
        {
        label: 'SI',
        data: labels.map(() => faker.datatype.number({ min: 17, max: 27 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const CL = {
    labels,
    datasets: [
        {
        label: 'CL',
        data: labels.map(() => faker.datatype.number({ min: 60, max: 110 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

//STOCKS

export const AAPL = {
    labels,
    datasets: [
        {
        label: 'AAPL',
        data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const AMZN = {
    labels,
    datasets: [
        {
        label: 'AMZN',
        data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const JNJ = {
    labels,
    datasets: [
        {
        label: 'JNJ',
        data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const T = {
    labels,
    datasets: [
        {
        label: 'T',
        data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};

export const TSLA = {
    labels,
    datasets: [
        {
        label: 'TSLA',
        data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
        borderColor: '#318b3a',
        backgroundColor: '#318b3a80',
        },
    ],
};
