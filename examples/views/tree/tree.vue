<template>
  <mv-tree :data="treeData" :showCheckbox="showCheckbox"></mv-tree>
</template>

<script>
export default {
  name: "exTree",
  data() {
    return {
      treeData: [
        {
          title: "石家庄",
          expand: true,
          children: [
            { title: "桥西区" },
            { title: "新华区" },
            { title: "长安区" }
          ]
        },
        {
          title: "邯郸",
          expand: true,
          children: [
            { title: "丛台区" },
            { title: "邯山区" },
            {
              title: "临漳县",
              children: [
                {
                  title: "临漳镇"
                },
                {
                  title: "南东坊镇"
                }
              ]
            }
          ]
        }
      ],
      showCheckbox: true
    };
  }
};
</script>
