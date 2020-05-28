<template>
  <form class="mv-form">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: "mvForm",
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      fields: []
    };
  },
  methods: {
    resetFields() {
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    validate(callback) {
      return new Promise(resolve => {
        let count = 0;
        let valid = true;
        this.fields.forEach(field => {
          ++count;
          field.validate("", errors => {
            if (errors) {
              valid = false;
            }
          });
          if (count == this.fields.length) {
            resolve(valid);
            if (typeof callback == "function") callback(valid);
          }
        });
      });
    }
  },
  created() {
    this.$on("on-add-form-item", field => {
      if (field) this.fields.push(field);
    });
    this.$on("on-remove-form-item", field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  }
};
</script>

