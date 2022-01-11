<template>
  <v-row justify="center" class="index">
    <v-col cols="12">
      <v-parallax dark height="200" src="https://beiz.jp/images_P/green/green_00010.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="10">
            <h1 class="text-h4 mb-4">多変量解析☆演習</h1>
            <h4 v-katex class="subheading"></h4>
            <h4></h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
    <v-col>
      <v-row>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content v-katex>
                <v-list-item-title class="text-h5 mb-1">L14</v-list-item-title>
                <v-list-item-subtitle>自己回帰モデル $ \mathrm{AR}(m) $, 移動平均モデル $ \mathrm{MA}(k) $</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn text color="teal accent-4" @click="$router.push('14')">Learn More </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content v-katex>
                <v-list-item-title class="text-h5 mb-1">L15</v-list-item-title>
                <v-list-item-subtitle>coming soon...</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn disabled text color="teal accent-4" @click="$router.push('15')">Learn More </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content v-katex>
                <v-list-item-title class="text-h5 mb-1">LXX</v-list-item-title>
                <v-list-item-subtitle>???</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn disabled text color="teal accent-4" @click="$router.push('??')">Learn More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
