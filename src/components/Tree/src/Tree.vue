<template>
  <div>
    <mv-tree-node
      v-for="(item,index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></mv-tree-node>
  </div>
</template>

<script>
import mvTreeNode from "./Node.vue";
import assisst from "@/utils/assist";
export default {
  name: "mvTree",
  components: {
    mvTreeNode
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cloneData: []
    };
  },
  created() {
    this.cloneData = assisst.deepCopy(this.data);
  },
  watch: {
    data() {
      this.cloneData = assisst.deepCopy(this.data);
    }
  },
  methods: {
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData);
    }
  }
};
</script>
