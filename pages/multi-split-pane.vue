<template>
  <v-row>
    <v-col>
      <MultiSplitPane
        split="horizontal"
        height="100vh - 100px"
        width="100vh"
        resizer-width="20px"
        classes="v-pane-custom"
        @onPaneCollapsed="onPaneCollapsed"
        @onPaneExpanded="onPaneExpanded"
      >
        <Pane>
          <template v-slot:resizer> </template>
          <template v-slot:content>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, excepturi in dolores accusantium praesentium
            quidem laborum neque ut ipsum veritatis ratione rem, esse totam voluptates ullam nesciunt tempora architecto
            laudantium!
          </template>
        </Pane>
        <Pane>
          <template v-slot:content>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, excepturi in dolores accusantium praesentium
            quidem laborum neque ut ipsum veritatis ratione rem, esse totam voluptates ullam nesciunt tempora architecto
            laudantium!
          </template>
        </Pane>
        <Pane>
          <template v-slot:content>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, excepturi in dolores accusantium praesentium
            quidem laborum neque ut ipsum veritatis ratione rem, esse totam voluptates ullam nesciunt tempora architecto
            laudantium!
          </template>
        </Pane>
      </MultiSplitPane>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>
