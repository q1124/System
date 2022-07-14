<template>
  <div class="foundList">
    <!-- TODO: 資料寫進data -->
    <el-table
      v-if="groupData.length > 0 "
      :data="groupData"
      max-height='450'
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="創建時間"
        width="250"
        align='center'
        >
        <template #default = scope>
          <el-icon><Clock /></el-icon>
          <span style="margin-left: 10px">{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="收支類型"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="describe"
        label="收支描述"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="incode"
        label="收入"
        align='center'
        >
        <template #default = scope>
          <span style="color:#00d053">{{scope.row.incode}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="expend"
        label="支出"
        align='center'
        >
        <template #default = scope>
          <span style="color:#f56767">{{scope.row.expend}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="cash"
        label="帳戶現金"
        width="170"
        align='center'
        >
        <template #default = scope>
          <span style="color:#4db3ff">{{scope.row.cash}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        label="標記"
        width="220"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop='operation'
        label="操作"
        align="center">
        <template #default="scope">
          <el-button
            size="small"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)"
            >編輯</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >刪除</el-button
          >
        </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'foundList',
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  data () {
    return {
      groupData: []
    }
  },
  methods: {
    getProfile () {
      this.$axios.get('/api/profiles')
        .then(res => {
          this.groupData = res.data
          console.log(this.groupData)
        }).catch(err => {
          console.log(err)
        })
    },
    // 編輯
    handleEdit (index, row) {
      console.log(index, row)
    },
    // 刪除
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  mounted () {
    this.getProfile()
  }
}
</script>

<style scoped>
.foundList {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
</style>
