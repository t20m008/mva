<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="exercise mx-5">
      <v-col>
        <v-card color="grey lighten-3">
          <v-card-title color="primary" class="py-0 px-0">
            <v-chip label class="mr-2" color="primary">練習問題</v-chip>
            一様分布
          </v-card-title>
          <v-card-text v-katex
            >$a &lt; b$ を満たす実数 $a,b \in R$ に対し、確率変数 $X$
            の密度関数が $$ f(x) = \left\{ \begin{array}{ll} (b-a)^{-1}, & (a
            &lt; x &lt; b)\\ 0 & (\text{その他}) \end{array} \right. $$
            で与えられるとき、$X$は区間$(a,b)$上の一様分布に従うといい、$X \sim
            U(a,b)$で表す。
          </v-card-text>
        </v-card>
      </v-col></v-row
    >
    <v-row class="mx-5">
      <p>{{ selected1 }}</p>
      <v-col cols="3">
        <v-checkbox
          v-model="selected1"
          label="John"
          value="John"
          hide-details
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
          v-model="selected1"
          label="Jacob"
          value="Jacob"
          hide-details
        ></v-checkbox>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="exercise">
      <v-col cols="4">
        <v-checkbox input-value="true" value></v-checkbox>
      </v-col>
      <v-col cols="4">
        <v-checkbox value></v-checkbox>
      </v-col>
      <v-col cols="4">
        <v-checkbox value indeterminate></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      selected1: null,
      selected2: null,
    }
  },
  methods: {},
}
</script>
