<template>
  <div class="mv-message">
    <div class="mv-message-main">
      <div
        class="mv-message-item"
        :class="getClass(item)"
        v-for="item in notices"
        :key="item.name"
      >{{item.content}}</div>
    </div>
  </div>
</template>
<script>
let seed = 0;
function getUuid() {
  return "message_" + seed++;
}
export default {
  name: "mvMessage",
  data() {
    return {
      notices: []
    };
  },
  methods: {
    getClass(item) {
      console.log(item.type)
      return {
        "mv-message-item__warn": item.type === "warn"
      };
    },
    add(notice) {
      const name = getUuid();
      let _notice = Object.assign(
        {
          name: name
        },
        notice
      );
      this.notices.push(_notice);
      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration);
    },
    remove(name) {
      const notices = this.notices;
      for (let index = 0; index < notices.length; index++) {
        const element = notices[index];
        if (element.name === name) {
          this.notices.splice(index, 1);
          break;
        }
      }
    }
  }
};
</script>

