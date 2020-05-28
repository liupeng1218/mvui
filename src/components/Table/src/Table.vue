<template>
  <table class="mv-table">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key">{{col.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,rowIndex) in data">
        <td v-for="col in columns">
          <template v-if="'render' in col">
            <mv-render :row="row" :columns="col" :index="rowIndex" :render="col.render"></mv-render>
          </template>
          <template v-else-if="'slot' in col">
            <mv-slot :row="row" :columns="col" :index="rowIndex"></mv-slot>
          </template>
          <template v-else>{{row[col.key]}}</template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import mvRender from "./render";
import mvSlot from "./slot";
export default {
  name: "mvTable",
  components: { mvRender, mvSlot },
  provide() {
    return {
      tableRoot: this
    };
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
