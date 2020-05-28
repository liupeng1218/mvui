<template>
  <mv-form :model="model" :rules="rules" ref="form">
    <mv-form-item label="用户名" prop="name">
      <mv-input v-model="model.name"></mv-input>
    </mv-form-item>
    <mv-form-item label="邮箱" prop="email">
      <mv-input v-model="model.email"></mv-input>
    </mv-form-item>
    <mv-form-item label="地址" prop="address">
      <mv-input v-model="model.address"></mv-input>
    </mv-form-item>
    <mv-form-item label="爱好" prop="hobby">
      <mv-checkbox-group v-model="model.hobby">
        <mv-checkbox label="足球"></mv-checkbox>
        <mv-checkbox label="篮球"></mv-checkbox>
        <mv-checkbox label="乒乓球"></mv-checkbox>
      </mv-checkbox-group>
    </mv-form-item>
    <mv-form-item label="参加探险" prop="join">
      <mv-radio v-model="model.join" true-value="1">参加</mv-radio>
    </mv-form-item>
    <mv-form-item label="探险项目" prop="item">
      <mv-radio-group v-model="model.item">
        <mv-radio label="高空跳伞"></mv-radio>
        <mv-radio label="热气球"></mv-radio>
        <mv-radio label="冲沙"></mv-radio>
      </mv-radio-group>
    </mv-form-item>
    <mv-form-item label="同意" prop="consent">
      <mv-checkbox v-model="model.consent" true-value="1" false-value="0">协议书</mv-checkbox>
    </mv-form-item>
    <mv-form-item>
      <mv-button @on-click="handleSubmit">提交</mv-button>
      <mv-button @on-click="handleReset">重置</mv-button>
      <mv-button @on-click="handleSet">设置</mv-button>
    </mv-form-item>
  </mv-form>
</template>

<script>
export default {
  name: "exForm",
  data() {
    return {
      model: {
        name: "",
        email: "",
        address: "",
        hobby: [],
        join: "0",
        item: "",
        consent: "0"
      },
      rules: {
        name: [
          {
            required: true,
            message: "填写名字",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "填写邮箱",
            trigger: "blur"
          },
          {
            type: "email",
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        hobby: [
          {
            required: true,
            type: "array",
            message: "请选择爱好",
            trigger: "blur"
          }
        ],
        consent: [
          {
            required: true,
            validator: (rule, value) =>
              typeof value === "string" || typeof value === "boolean",
            message: "需要同意协议书",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.model);
      this.$refs.form.validate(valid => {
        const message = valid ? "校验成功" : "校验失败";
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleSet() {
      this.model.item = "冲沙";
    }
  }
};
</script>

