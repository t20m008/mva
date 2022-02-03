<template>
  <v-container class="chat-main-container">
    <div id="app">
      <v-row align="center">
        <v-col class="d-flex" cols="3" sm="3">
          <v-select v-model="selectedCollection" :items="collections" outlined label="テーブルを選択"></v-select>
        </v-col>
        <v-col class="d-flex" cols="8" sm="6">
          <v-select v-model="selected" :items="logUsers" outlined label="ユーザーを選択"></v-select>
        </v-col>

        <v-col class="d-flex" cols="4" sm="6">
          <VueJsonToCsv :json-data="csvData" :csv-title="csvTitle" :labels="labels"
            ><v-btn :disabled="selectedBoolean" color="green" @click="download">
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </VueJsonToCsv>
        </v-col>
      </v-row>
    </div>
    <v-simple-table v-katex:auto dense elevation="10" fixed-header height="600px" style="border: 1px solid gray">
      <template #default>
        <thead>
          <tr>
            <th class="text-left">locale</th>
            <!-- <th class="text-left">timestamp</th> -->
            <th class="text-left">id</th>
            <th class="text-left">action</th>
            <th class="text-left">tex</th>
            <th class="text-left">href</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in history" :key="item.timestamp">
            <td>{{ item.locale }}</td>
            <!-- <td>{{ item.timestamp }}</td> -->
            <td>{{ item.id }}</td>
            <td>{{ item.action }}</td>
            <td>${{ item.tex }}$</td>
            <td>{{ item.href }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-alert dense class="mt-3" border="left" colored-border color="teal accent-4" elevation="10">{{ selected }} </v-alert>
    <v-alert dense border="left" colored-border color="teal" elevation="5">{{ studentId }} </v-alert>
    <!-- <div style="border: 2px solid green">
      {{ sCSV }}
    </div> -->
  </v-container>
</template>

<script>
import VueJsonToCsv from 'vue-json-to-csv'
// import { CollectionName } from '@/plugins/katex-collapsible.js'
const CollectionName = 'log_20220118'
export default {
  components: {
    VueJsonToCsv,
  },
  data() {
    return {
      logUsers: [],
      selectedCollection: null,
      collections: ['log_all', 'log_all_2', 'log_20220113', 'log_20220118'],
      studentId: null,
      selected: null,
      selectedBoolean: true,
      history: [],
      sCSV: '',
      jsonData: [],
      csvTitle: '',
      csvData: [],
      labels: {
        locale: { title: 'locale' },
        timestamp: { title: 'timestamp' },
        id: { title: 'id' },
        action: { title: 'action' },
        href: { title: 'href' },
        tex: { title: 'tex' },
      },
      CollectionName,
    }
  },
  watch: {
    selected(nval, oval) {
      // console.log(oval, '=>', nval)
      if (nval != null) {
        this.selectedBoolean = false
        this.getHistory(nval)
        this.uidToStudentId(nval)
      }
      if (oval !== nval) {
        this.history = []
      }
    },

    studentId(nval, oval) {
      console.log(nval, oval)
    },
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login')
    }
    if (this.$fire.auth.currentUser.email !== 't20m008@mail.ryukoku.ac.jp') {
      this.$router.push('/')
      alert('アクセス権限がありません')
    }
  },
  mounted() {
    const self = this

    async function get() {
      self.logUsers = await self.loadLogUsers()
    }

    get()
  },
  methods: {
    download() {
      this.csvTitle = this.studentId + '_' + Date.now()
      // date型とか変換したいときはこのタイミングで変換
      // console.log('this.jsonData:', this.jsonData)
      this.history.forEach((data) => {
        this.csvData.push({
          locale: data.locale,
          timestamp: data.timestamp,
          id: data.id,
          action: data.action,
          href: data.href,
          tex: data.tex,
        })
      })
    },

    getUniqueStr(myStrong) {
      let strong = 1000
      if (myStrong) strong = myStrong
      return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
    },

    async loadLogUsers() {
      const Users = []
      await this.$fire.firestore
        .collection(this.CollectionName)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc.id, '=>', doc.data())
            // users.push(doc.data())
            Users.push({
              text: doc.data().displayName,
              value: doc.data().uid,
            })
          })
        })
      return Users
    },

    async uidToStudentId(uid) {
      await this.$fire.firestore
        .collection('log_20220113')
        .where('uid', '==', uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc.id, '=>', doc.data())
            this.studentId = doc.data().email.replace('@mail.ryukoku.ac.jp', '')
          })
        })
    },

    async getHistory(uid) {
      const history = []
      await this.$fire.firestore
        .collection(this.CollectionName)
        .doc(uid)
        .collection('history')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            history.push({
              text: doc.data().displayName,
              value: doc.data().uid,
            })
            this.history.push(doc.data())
          })
        })
        .catch((error) => {
          console.log(error)
        })
      return history
    },

    createCSV(history) {
      this.sCSV = 'locale,timestamp,id,action,tex,href\n'
      // console.log(history)

      const json = []
      history.forEach((data, i) => {
        json.push(data)
      })
      this.jsonData = json
      history.forEach((document, i) => {
        // console.log(i, document)
        console.table([document.locale, document.timestamp, document.id, document.action, document.tex, document.href])
        this.sCSV +=
          document.locale +
          ',' +
          document.timestamp +
          ',' +
          document.id +
          ',' +
          document.action +
          ',' +
          '"' +
          document.tex +
          '"' +
          ',' +
          document.href +
          '\n'
      })
      // console.log(this.sCSV)
    },

    createJSON(history) {
      const json = []
      history.forEach((data, i) => {
        json.push(data)
      })
      this.jsonData = json
    },
  },
}
</script>

<style scoped>
.w {
  width: 100px;
  height: 100px;
  overflow: auto;
}

td {
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
}
</style>
