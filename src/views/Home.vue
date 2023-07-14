<template>
  <v-main class="home">
    <v-carousel hide-delimiter-background>
      <v-carousel-item><img src="@/assets/images/banner.png" /></v-carousel-item>
      <v-carousel-item><img src="@/assets/images/banner.png" /></v-carousel-item>
      <v-carousel-item><img src="@/assets/images/banner.png" /></v-carousel-item>
      <v-carousel-item><img src="@/assets/images/banner.png" /></v-carousel-item>
    </v-carousel>
    <v-container>
      <v-card elevation="0" color="transparent">
        <v-card-title>國際新知</v-card-title>
        <v-card-subtitle>News</v-card-subtitle>
        <v-card-item>
          <v-tabs height="auto" stacked grow v-model="tab">
            <v-tab class="pa-2" value="1">
              <img src="@/assets/images/home-tab-1.png" />
              <h3 class="pa-2 pb-1">電子報</h3>
            </v-tab>
            <v-tab class="pa-2" value="2">
              <img src="@/assets/images/home-tab-2.png" />
              <h3 class="pa-2 pb-1">議題報告</h3>
            </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="1">
              <v-table>
                <tbody>
                  <tr v-for="i in 3">
                    <td>2023/03/09</td>
                    <td>世界銀行提議加強對氣候行動的策略關注</td>
                    <td class="text-right">第二十期</td>
                  </tr>
                </tbody>
              </v-table>
            </v-window-item>
            <v-window-item value="2">
              <v-table>
                <tbody>
                  <tr v-for="i in 3">
                    <td>2023/03/02</td>
                    <td>氣候變遷災害風險圖資新增全球暖化情境</td>
                    <td class="text-right">第十九期</td>
                  </tr>
                </tbody>
              </v-table>
            </v-window-item>
          </v-window>
        </v-card-item>
        <v-card-actions class="px-4">
          <v-spacer />
          <v-btn rounded="pill" variant="outlined" color="success" class="px-6">閱讀新聞</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <div class="area-case">
      <v-container>
        <v-row>
          <v-col class="d-flex">
            <v-card elevation="0" color="transparent" class="flex-fill d-flex flex-column">
              <v-card-title>影音專區</v-card-title>
              <v-card-subtitle>Video Area</v-card-subtitle>
              <v-card-item>
                <div class="video"><iframe src="https://www.youtube.com/embed/HFPvbP4JDuY" title="112年能源產業氣候變遷調適行動班課程1-氣候變遷風險評估能力建構(一)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
              </v-card-item>
              <v-card-actions class="px-4 mt-auto">
                <v-spacer />
                <v-btn rounded="pill" variant="outlined" color="success" class="px-6">更多影音</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="d-flex">
            <v-card elevation="0" color="transparent" class="flex-fill d-flex flex-column">
              <v-card-title>國際調適作法</v-card-title>
              <v-card-subtitle>International Adaptation Case</v-card-subtitle>
              <v-card-item>
                <v-row>
                  <v-col><router-link to="/"><img src="@/assets/images/home-case-1.png" /></router-link></v-col>
                  <v-col><router-link to="/"><img src="@/assets/images/home-case-2.png" /></router-link></v-col>
                  <v-col><router-link to="/"><img src="@/assets/images/home-case-3.png" /></router-link></v-col>
                  <v-col><router-link to="/"><img src="@/assets/images/home-case-4.png" /></router-link></v-col>
                </v-row>
              </v-card-item>
              <v-card-actions class="px-4 mt-auto">
                <v-spacer />
                <v-btn rounded="pill" variant="outlined" color="success" class="px-6">更多國際調適作法</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-card elevation="0" color="transparent">
        <v-card-title>教材專區</v-card-title>
        <v-card-subtitle>Teaching Material Area</v-card-subtitle>
        <v-card-item>
          <v-row>
            <v-col>
              <div class="video"><iframe src="https://www.youtube.com/embed/HFPvbP4JDuY" title="112年能源產業氣候變遷調適行動班課程1-氣候變遷風險評估能力建構(一)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </v-col>
            <v-col>
              <div class="video"><iframe src="https://www.youtube.com/embed/HFPvbP4JDuY" title="112年能源產業氣候變遷調適行動班課程1-氣候變遷風險評估能力建構(一)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </v-col>
            <v-col>
              <div class="video"><iframe src="https://www.youtube.com/embed/HFPvbP4JDuY" title="112年能源產業氣候變遷調適行動班課程1-氣候變遷風險評估能力建構(一)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </v-col>
          </v-row>
        </v-card-item>
        <v-card-actions class="px-4">
          <v-spacer />
          <v-btn rounded="pill" variant="outlined" color="success" class="px-6">更多教材</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <div class="links">
      <v-container>
        <v-card elevation="0" color="transparent">
          <v-card-title>友善連結</v-card-title>
          <v-card-subtitle>Friendly Link</v-card-subtitle>
          <v-card-item class="d-flex justify-center">
            <a href="" target="_blank"><img src="@/assets/images/home-link-1.png" /></a>
            <a href="" target="_blank"><img src="@/assets/images/home-link-2.png" /></a>
            <a href="" target="_blank"><img src="@/assets/images/home-link-3.png" /></a>
            <a href="" target="_blank"><img src="@/assets/images/home-link-4.png" /></a>
          </v-card-item>
        </v-card>
      </v-container>
    </div>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
const tab = ref();
</script>
