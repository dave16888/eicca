<template>
  <v-app>
    <div class="d-flex pa-6 pb-2 align-stretch">
      <router-link to="/"><img src="@/assets/images/logo.png" /></router-link>
      <v-spacer />
      <div class="d-flex flex-column align-end justify-space-between">
        <v-btn prepend-icon="mdi-account" rounded="pill" variant="outlined" color="primary">會員登入</v-btn>
        <div>
          <v-btn append-icon="mdi-chevron-down" variant="plain">關於我們
            <v-menu activator="parent">
              <v-list density="compact">
                <v-list-item subtitle="計畫沿革" link></v-list-item>
                <v-divider />
                <v-list-item subtitle="網站導覽" link></v-list-item>
                <v-divider />
                <v-list-item subtitle="輔導案例" link></v-list-item>
                <v-divider />
                <v-list-item subtitle="聯絡我們" link></v-list-item>
              </v-list>
            </v-menu>
          </v-btn>
          <v-btn append-icon="mdi-chevron-down" variant="plain">資料</v-btn>
          <v-btn append-icon="mdi-chevron-down" variant="plain">調適知識</v-btn>
          <v-btn append-icon="mdi-chevron-down" variant="plain">其他服務</v-btn>
          <v-btn append-icon="mdi-chevron-down" variant="plain">註冊</v-btn>
        </div>
      </div>
    </div>
    <router-view />
    <footer class="text-body-2">
      <v-container class="d-flex">
        <div class="text-no-wrap mr-16">
          <img src="@/assets/images/accessibility.png" class="w-75" /><br/>
          網站維護：工業技術研究院<br />
          連絡電話：(03)591-8530<br />
          客服信箱：<a href="" class="text-primary">EICCA@itri.org.tw</a><br />
          瀏覽人數：771,228<br />
        </div>
        <div class="d-flex flex-column align-start">
          <div class="border-b-lg border-success border-opacity-25 mb-2">關於能源領域氣候變遷調適平台</div>
          「臺灣氣候變遷推估資訊與調適知識平台計畫」(TCCIP) 在國科會的支持下，以提供臺灣氣候變遷科學與技術研究服務為宗旨。團隊成員秉持初衷，不斷精進氣候變遷推估技術與能力、發展氣候變遷風險評估與調適工具、深入淺出轉譯氣候變遷科學數據、強化科學研究與實務應用的連結、加強與服務對象的溝通，提供符合公部門、學研單位、企業及社群機構氣候變遷資料、資訊、知識、工具一站式服務。<br />
          <a href="" class="text-primary">網站導覽</a>
        </div>
      </v-container>
      <div class="copyright text-center pa-4">Copyright &copy; 能源領域氣候變遷調適平台 2023</div>
    </footer>
  </v-app>
</template>
