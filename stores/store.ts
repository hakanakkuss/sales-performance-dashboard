import { defineStore } from 'pinia';
import { useAuthStore } from '~/stores/auth.store';

export const useStore = defineStore('chart', {
    state: () => ({
        chartsData: {},
    }),
    actions: {
        setChartData(chartId, data) {
            this.chartsData[chartId] = data;
        },
        getChartData(chartId) {
            return this.chartsData[chartId];
        },
        async initializeChartsData() {
            const { data, error } = await useFetch('/api/mockData');

            if (error.value) {
                console.error('Error fetching data:', error.value);
                return;
            }

            const mockData = data.value;

            this.setChartData('salesTargets', {
                xAxis: {
                    type: 'category',
                    data: mockData.salesTargets.map(item => item.month),
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        name: 'Target',
                        type: 'bar',
                        data: mockData.salesTargets.map(item => item.target),
                        markPoint: {
                            data: [
                                { type: 'max', name: 'Max' },
                                { type: 'min', name: 'Min' },
                            ],
                        },
                        markLine: {
                            data: [{ type: 'average', name: 'Avg' }],
                        },
                    },
                    {
                        name: 'Actual',
                        type: 'bar',
                        data: mockData.salesTargets.map(item => item.actual),
                        markPoint: {
                            data: [
                                { type: 'max', name: 'Max' },
                                { type: 'min', name: 'Min' },
                            ],
                        },
                        markLine: {
                            data: [{ type: 'average', name: 'Avg' }],
                        },
                    },
                ],
            });

            this.setChartData('userSalesPerformance', {
                title: {
                    text: 'User Sales Performance',
                    subtext: 'Mock Data',
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: 'Sales',
                        type: 'pie',
                        radius: '50%',
                        data: mockData.userSalesPerformance.map(item => ({
                            name: item.user,
                            value: item.sales,
                        })),
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    },
                ],
            });

            const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            const names = ["User1", "User2", "User3", "User4", "User5"];
            const salesData = [
                [150, 200, 170, 220, 180, 160, 190], // User1's sales
                [180, 210, 160, 240, 170, 150, 200], // User2's sales
                [140, 230, 180, 190, 160, 210, 220], // User3's sales
                [200, 180, 190, 170, 220, 230, 160], // User4's sales
                [220, 170, 210, 160, 230, 180, 200], // User5's sales
            ];

            const seriesData = names.map((name, index) => ({
                name,
                type: 'line',
                stack: 'Total',
                data: salesData[index],
            }));

            this.setChartData('userSalesPerformanceByPeriod', {
                title: {
                    text: 'Stacked Line',
                },
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    data: names,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: daysOfWeek,
                },
                yAxis: {
                    type: 'value',
                },
                series: seriesData,
            });
        },
    },
    getters: {
        isUserAuthenticated() {
            const authStore = useAuthStore();
            return authStore.isAuthenticated;
        },
    },
});
