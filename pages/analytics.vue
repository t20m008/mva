<template>
  <v-container class="chat-main-container">
    <v-alert border="left" colored-border color="deep-purple accent-4" elevation="10">{{ selected }} </v-alert>

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
    <v-simple-table v-katex dense elevation="10" fixed-header height="500px" style="border: 1px solid gray">
      <template #default>
        <thead>
          <tr>
            <th class="text-left">date$x=a$</th>
            <th class="text-left">timestamp</th>
            <th class="text-left">id</th>
            <th class="text-left">action</th>
            <th class="text-left">tex</th>
            <th class="text-left">href</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in history" :key="item.timestamp">
            <td>{{ item.date }}</td>
            <td>{{ item.timestamp }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.action }}</td>
            <td>${{ item.tex }}$</td>
            <td>{{ item.href }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <div style="border: 2px solid green">
      {{ sCSV }}
    </div>
  </v-container>
</template>

<script>
import VueJsonToCsv from 'vue-json-to-csv'

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
        date: { title: 'date' },
        timestamp: { title: 'timestamp' },
        id: { title: 'id' },
        action: { title: 'action' },
        href: { title: 'href' },
        tex: { title: 'tex' },
      },
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
      this.csvTitle = 'nxlg_' + Date.now()
      // date型とか変換したいときはこのタイミングで変換
      // console.log('this.jsonData:', this.jsonData)
      this.history.forEach((data) => {
        this.csvData.push({
          date: data.date,
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
        .collection('log')
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
      const history = []
      await this.$fire.firestore
        .collection('log')
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
      this.sCSV = 'date,timestamp,id,action,tex,href\n'
      // console.log(history)

      const json = []
      history.forEach((data, i) => {
        json.push(data)
      })
      this.jsonData = json
      history.forEach((document, i) => {
        // console.log(i, document)
        console.table([document.date, document.timestamp, document.id, document.action, document.tex, document.href])
        this.sCSV +=
          document.date +
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

<style scoped></style>
