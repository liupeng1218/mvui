<template>
  <mv-table :columns="columns" :data="data">
    <template v-slot:engSlot="engProps">
      <span
        :style="{color:getColor(engProps.row[engProps.columns.key])}"
      >{{engProps.row[engProps.columns.key]}}</span>
    </template>
  </mv-table>
</template>

<script>
export default {
  name: "exTable",
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "语文",
          key: "lang"
        },
        {
          title: "数学",
          key: "math"
        },

        {
          title: "英语",
          key: "eng",
          slot: "engSlot"
        },
        {
          title: "操作",
          key: "tool",
          render: (h, { row, columns, index }) => {
            return h("mv-button", "删除");
          }
        }
      ],
      data: [
        {
          name: "张三",
          lang: 80,
          math: 85,
          eng: 70
        },
        {
          name: "李四",
          lang: 88,
          math: 92,
          eng: 83
        }
      ]
    };
  },
  methods: {
    getColor(scores) {
      return scores < 80 ? "red" : "";
    }
  }
};
</script>

<!-- Add 
 attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>