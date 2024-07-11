<script setup lang="ts">
import Navigation from "~/pages/Navigation.vue";
import PieChart from "~/pages/charts/PieChart.vue";
import LineChart from "~/pages/charts/LineChart.vue";
import BarChart from "~/pages/charts/BarChart.vue";
import StackedLineChart from "~/pages/charts/StackedLineChart.vue";
import { ref, onMounted } from "vue";
import { GridLayout, GridItem } from 'vue3-grid-layout';

const draggable = ref(true);
const resizable = ref(true);

const layout = ref([
  { x: 0, y: 0, w: 6, h: 4, i: "StackedLineChart", static: false },
  { x: 6, y: 0, w: 6, h: 4, i: "BarChart", static: false },
  { x: 0, y: 6, w: 6, h: 4, i: "PieChart", static: false },
  // { x: 6, y: 4, w: 6, h: 4, i: "LineChart", static: false },
]);

const getComponent = (name: string) => {
  switch (name) {
    case "StackedLineChart":
      return StackedLineChart;
    case "BarChart":
      return BarChart;
    case "PieChart":
      return PieChart;
    case "LineChart":
      return LineChart;
    default:
      return null;
  }
};

onMounted(() => {
  getComponent();
});


</script>

<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="min-h-screen">
      <GridLayout
          :layout.sync="layout"
          :col-num="12"
          :row-height="90"
          :is-draggable="draggable"
          :is-resizable="resizable"
          :vertical-compact="false"
          :use-css-transforms="true"
      >
        <GridItem
            v-for="item in layout"
            :key="item.i"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
        >
          <div class="shadow-md p-6 rounded-lg h-full">
            <component :is="getComponent(item.i)" />
          </div>
        </GridItem>
      </GridLayout>
    </div>
  </div>
</template>



