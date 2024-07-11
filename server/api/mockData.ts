// server/api/mockData.ts
import { defineEventHandler } from 'h3';

const mockData = {
    monthlySales: [
        { name: "user1", month: "January", sales: 50000 },
        { name: "user2", month: "February", sales: 45000 },
        { name: "user3", month: "March", sales: 60000 },
        { name: "user4", month: "April", sales: 70000 },
        { name: "user5", month: "May", sales: 65000 },
        { name: "user6", month: "June", sales: 75000 },
        { name: "user7", month: "July", sales: 80000 },
        { name: "user8", month: "August", sales: 72000 },
        { name: "user9", month: "September", sales: 68000 },
        { name: "user10", month: "October", sales: 74000 },
        { name: "user11", month: "November", sales: 69000 },
        { name: "user12", month: "December", sales: 85000 }
    ],
    topSellingProducts: [
        { product: "Product A", unitsSold: 1200 },
        { product: "Product B", unitsSold: 950 },
        { product: "Product C", unitsSold: 850 },
        { product: "Product D", unitsSold: 800 },
        { product: "Product E", unitsSold: 750 }
    ],
    salesTargets: [
        { id: 1, month: "January", target: 48000, actual: 50000 },
        { id: 2, month: "February", target: 46000, actual: 45000 },
        { id: 3, month: "March", target: 62000, actual: 60000 },
        { id: 4, month: "April", target: 68000, actual: 70000 },
        { id: 5, month: "May", target: 67000, actual: 65000 },
        { id: 6, month: "June", target: 73000, actual: 75000 },
        { id: 7, month: "July", target: 79000, actual: 80000 },
        { id: 8, month: "August", target: 71000, actual: 72000 },
        { id: 9, month: "September", target: 69000, actual: 68000 },
        { id: 10, month: "October", target: 75000, actual: 74000 },
        { id: 11, month: "November", target: 70000, actual: 69000 },
        { id: 12, month: "December", target: 82000, actual: 85000 }
    ],
    salesPerformanceByPeriod: {
        daily: [
            { date: "2024-07-01", sales: 2500 },
            { date: "2024-07-02", sales: 2700 },
            { date: "2024-07-03", sales: 2600 },
            { date: "2024-07-04", sales: 2800 },
            { date: "2024-07-05", sales: 3000 },
            { date: "2024-07-06", sales: 1500 },
            { date: "2024-07-07", sales: 6000 }
        ],
        weekly: [
            { week: "2024-06-24 to 2024-06-30", sales: 18000 },
            { week: "2024-07-01 to 2024-07-07", sales: 19500 }
        ],
        monthly: [
            { month: "June 2024", sales: 75000 },
            { month: "July 2024", sales: 80000 }
        ]
    },
    userSalesPerformance: [
        { user: "User 1", sales: 25000 },
        { user: "User 2", sales: 30000 },
        { user: "User 3", sales: 20000 },
        { user: "User 4", sales: 15000 },
        { user: "User 5", sales: 18000 }
    ],
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    names: ["User1", "User2", "User3", "User4", "User5"],
    salesData: [
        [150, 200, 170, 220, 180, 160, 190], // User1's sales
        [180, 210, 160, 240, 170, 150, 200], // User2's sales
        [140, 230, 180, 190, 160, 210, 220], // User3's sales
        [200, 180, 190, 170, 220, 230, 160], // User4's sales
        [220, 170, 210, 160, 230, 180, 200] // User5's sales
    ]
};

export default defineEventHandler(() => {
    return mockData;
});
