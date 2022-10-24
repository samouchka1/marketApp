import {faker} from '@faker-js/faker';

export const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const SPX = {
    labels,
    datasets: [
        {
        label: 'SPX',
        data: labels.map(() => faker.datatype.number({ min: 3500, max: 4800 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export const NDX = {
    labels,
    datasets: [
        {
        label: 'NDX',
        data: labels.map(() => faker.datatype.number({ min: 14400, max: 16700 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export const VIX = {
    labels,
    datasets: [
        {
        label: 'VIX',
        data: labels.map(() => faker.datatype.number({ min: 14, max: 39 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};