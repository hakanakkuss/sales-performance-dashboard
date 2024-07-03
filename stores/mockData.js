import { defineStore } from 'pinia'

export const useMockDataStore = defineStore('mockData', {
    state: () => ({
        mockItems: [
            {
                "monthlySales": [
                    { "month": "January", "sales": 50000 },
                    { "month": "February", "sales": 45000 },
                    { "month": "March", "sales": 60000 },
                    { "month": "April", "sales": 70000 },
                    { "month": "May", "sales": 65000 },
                    { "month": "June", "sales": 75000 },
                    { "month": "July", "sales": 80000 },
                    { "month": "August", "sales": 72000 },
                    { "month": "September", "sales": 68000 },
                    { "month": "October", "sales": 74000 },
                    { "month": "November", "sales": 69000 },
                    { "month": "December", "sales": 85000 }
                ],
                "topSellingProducts": [
                    { "product": "Product A", "unitsSold": 1200 },
                    { "product": "Product B", "unitsSold": 950 },
                    { "product": "Product C", "unitsSold": 850 },
                    { "product": "Product D", "unitsSold": 800 },
                    { "product": "Product E", "unitsSold": 750 }
                ],
                "salesTargets": [
                    { "month": "January", "target": 48000, "actual": 50000 },
                    { "month": "February", "target": 46000, "actual": 45000 },
                    { "month": "March", "target": 62000, "actual": 60000 },
                    { "month": "April", "target": 68000, "actual": 70000 },
                    { "month": "May", "target": 67000, "actual": 65000 },
                    { "month": "June", "target": 73000, "actual": 75000 },
                    { "month": "July", "target": 79000, "actual": 80000 },
                    { "month": "August", "target": 71000, "actual": 72000 },
                    { "month": "September", "target": 69000, "actual": 68000 },
                    { "month": "October", "target": 75000, "actual": 74000 },
                    { "month": "November", "target": 70000, "actual": 69000 },
                    { "month": "December", "target": 82000, "actual": 85000 }
                ],
                "salesPerformanceByPeriod": {
                    "daily": [
                        { "date": "2024-07-01", "sales": 2500 },
                        { "date": "2024-07-02", "sales": 2700 },
                        { "date": "2024-07-03", "sales": 2600 },
                        { "date": "2024-07-04", "sales": 2800 },
                        { "date": "2024-07-05", "sales": 3000 }
                    ],
                    "weekly": [
                        { "week": "2024-06-24 to 2024-06-30", "sales": 18000 },
                        { "week": "2024-07-01 to 2024-07-07", "sales": 19500 }
                    ],
                    "monthly": [
                        { "month": "June 2024", "sales": 75000 },
                        { "month": "July 2024", "sales": 80000 }
                    ]
                },
                "userSalesPerformance": [
                    { "user": "User 1", "sales": 25000 },
                    { "user": "User 2", "sales": 30000 },
                    { "user": "User 3", "sales": 20000 },
                    { "user": "User 4", "sales": 15000 },
                    { "user": "User 5", "sales": 18000 }
                ]
            }

        ]
    }),
    actions: {
        addItem(item) {
            this.mockItems.push(item)
        },
        removeItem(itemId) {
            this.mockItems = this.mockItems.filter(item => item.id !== itemId)
        }
    },
    getters: {
        getAllItems: (state) => state.mockItems,
        getItemById: (state) => (id) => state.mockItems.find(item => item.id === id)
    }
})
