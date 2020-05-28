<template>
  <ul class="mv-tree-ul">
    <li class="mv-tree-li">
      <span class="mv-tree-expand" @click="handleExpand">
        <span v-if="data.children&&data.children.length&&!data.expand">+</span>
        <span v-if="data.children&&data.children.length&&data.expand">-</span>
      </span>
      <mv-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck"></mv-checkbox>
      <span>{{data.title}}</span>
      <mv-tree-node
        v-show="data.expand"
        v-for="(item,index) in data.children"
        :key="index"
        :data="item"
        :show-checkbox="showCheckbox"
      ></mv-tree-node>
    </li>
  </ul>
</template>

<script>
import assist from "@/utils/assist";
export default {
  name: "mvTreeNode",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tree: assist.findComponentUpward(this, "mv-tree")
    };
  },
  watch: {
    "data.children": {
      handler(data) {
        if (data) {
          const isCheckAll = !data.some(item => {
            return !item.checked;
          });
          this.$set(this.data, "checked", isCheckAll);
        }
      },
      deep: true
    }
  },
  methods: {
    updateTreeDown(data, checked) {
      this.$set(data, "checked", checked);
      if (data.children && data.children.length) {
        data.children.forEach(item => {
          this.updateTreeDown(item, checked);
        });
      }
    },
    handleCheck(checked) {
      this.updateTreeDown(this.data, checked);
      if (this.tree) {
        this.tree.emitEvent("on-change-check", checked);
      }
    },
    handleExpand() {
      this.$set(this.data, "expand", !this.data.expand);
      if (this.tree) {
        this.tree.emitEvent("on-toggle-expand", this.data);
      }
    }
  }
};
</script>
