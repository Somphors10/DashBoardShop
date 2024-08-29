export const dataLine ={
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets:[
        {
            label: 'Sales',
            data: [65, 59, 80, 56, 55, 60, 65, 70, 65, 60, 70],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
        },
    ],
};

export const dataBar = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets:[
        {
            label: 'Quantity',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
        }
    ]
};