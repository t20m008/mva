<template>
  <v-container class="chat-main-container">
    <div id="app">
      <v-row align="center">
        <v-col class="d-flex" cols="8" sm="6">
          <v-select v-model="selected" :items="logUsers" outlined label="ユーザーを選択"></v-select>
        </v-col>
        <v-col class="d-flex" cols="4" sm="6">
          <!-- <p>selected.value: {{ selected }}</p> -->
          <!-- <v-btn color="primary" @click="getHistory(selected)"
                        >ログを表示</v-btn
                    > -->
          <!-- <v-btn color="error" @click="createCSV(history)"
                        >CSV用文字列生成</v-btn
                    > -->
          <VueJsonToCsv :json-data="csvData" :csv-title="csvTitle" :labels="labels"
            ><v-btn :disabled="selectedBoolean" color="green" @click="download">
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </VueJsonToCsv>
        </v-col>
      </v-row>
    </div>
    <!--
        <ul>
            <li v-for="item in history" :key="item.timestamp">{{ item }}</li>
        </ul> -->

    <v-simple-table v-katex:auto dense elevation="10" fixed-header height="600px" style="border: 1px solid gray">
      <template #default>
        <thead>
          <tr>
            <th class="text-left">locale</th>
            <!-- <th class="text-left">timestamp</th> -->
            <th class="text-left">id</th>
            <th class="text-left">action</th>
            <th class="text-left">tex</th>
            <th class="text-left">displayName</th>
            <th class="text-left">email</th>
            <th class="text-left">uid</th>

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
            <td>{{ item.displayName }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.uid }}</td>
            <td>{{ item.href }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-alert class="mt-3" border="left" colored-border color="teal accent-4" elevation="10">{{ selected }} </v-alert>

    <!-- <div style="border: 2px solid green">
      {{ sCSV }}
    </div> -->
  </v-container>
</template>

<script>
import VueJsonToCsv from 'vue-json-to-csv'
import { CollectionAll } from '@/plugins/katex-collapsible.js'
export default {
  components: {
    VueJsonToCsv,
  },
  data() {
    return {
      logUsers: [],
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
        displayName: { title: 'displayName' },
        email: { title: 'email' },
        uid: { title: 'uid' },
      },
      CollectionAll,
    }
  },
  watch: {
    selected(nval, oval) {
      // console.log(oval, '=>', nval)
      if (nval != null) {
        this.selectedBoolean = false
        this.getHistory(nval)
      }
      if (oval !== nval) {
        this.history = []
      }
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
    async loadMessage() {
      const chatId = this.$store.state.chat.chatId
      const messages = []
      await this.chatCollection
        .doc(chatId)
        .collection('messages')
        .orderBy('timestamp')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change, index) => {
            if (change.type !== 'removed') {
              const tmpMessage = change.doc.data()
              tmpMessage.id = change.doc.id
              messages.push(tmpMessage)
            } else {
              messages.splice(change.oldIndex, 1)
            }
          })
        })
      return messages
    },

    deleteMessage(id) {
      const db = this.$fire.firestore.collection('chat').doc(this.chatId).collection('messages').doc(id)
      db.delete()
        .then(() => {
          // this.loadMessage()
          // console.log('deleted')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    download() {
      this.csvTitle = 'allg_' + Date.now()
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
          uid: data.uid,
          email: data.email,
          displayName: data.displayName,
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
        .collection(this.CollectionAll)
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

    async getHistory(uid) {
      console.log('a')
      const history = []
      await this.$fire.firestore
        .collection(this.CollectionAll)
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
      this.sCSV = 'locale,timestamp,id,action,tex,displayName,email,uid,href\n'
      // console.log(history)

      const json = []
      history.forEach((data, i) => {
        json.push(data)
      })
      this.jsonData = json
      history.forEach((document, i) => {
        // console.log(i, document)
        console.table([
          document.locale,
          document.timestamp,
          document.id,
          document.action,
          document.tex,
          document.displayName,
          document.email,
          document.uid,
          document.href,
        ])
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
          document.displayName +
          '"' +
          ',' +
          document.email +
          '"' +
          ',' +
          document.uid +
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
