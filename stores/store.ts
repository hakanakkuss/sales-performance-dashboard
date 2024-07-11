import { defineStore } from 'pinia';
import { daysOfWeek, names, salesData } from '~/server/api/mockData';
import mockData from '~/server/api/mockData';

import { useAuthStore } from '~/stores/auth.store';

console.log(mockData)

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
        initializeChartsData() {

            this.setChartData('salesTargets', {
                xAxis: {
                    type: 'category',
                    data: mockData.salesTargets.map(item => item.month)
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Target',
                        type: 'bar',
                        data: mockData.salesTargets.map(item => item.target), //restten al
                        markPoint: {
                            data: [
                                { type: 'max', name: 'Max' },
                                { type: 'min', name: 'Min' }
                            ]
                        },
                        markLine: {
                            data: [{ type: 'average', name: 'Avg' }]
                        }
                    },
                    {
                        name: 'Actual',
                        type: 'bar',
                        data: mockData.salesTargets.map(item => item.actual),
                        markPoint: {
                            data: [
                                { type: 'max', name: 'Max' },
                                { type: 'min', name: 'Min' }
                            ]
                        },
                        markLine: {
                            data: [{ type: 'average', name: 'Avg' }]
                        }
                    }
                ]
            });
        },
        initializeUserSalesPerformanceChartsData() {
            this.setChartData('userSalesPerformance', {
                title: {
                    text: 'User Sales Performance',
                    subtext: 'Mock Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Sales',
                        type: 'pie',
                        radius: '50%',
                        data: mockData.userSalesPerformance.map(item => ({ name: item.user, value: item.sales })),
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        },
        initializeSalesPerformanceByPeriodChartsData() {
            const seriesData = names.map((name, index) => ({
                name,
                type: 'line',
                stack: 'Total',
                data: salesData[index],
            }));

            this.setChartData('userSalesPerformanceByPeriod', {
                title: {
                    text: 'Stacked Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: names
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: daysOfWeek
                },
                yAxis: {
                    type: 'value'
                },
                series: seriesData
            });
        },

    },
    getters: {
        isUserAuthenticated() {
            const authStore = useAuthStore();
            return authStore.isAuthenticated;
        },
    }
});
