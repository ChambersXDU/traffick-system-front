<template >
    <div>

        <div style="padding: 10px 0">
            <el-input v-model="input.lineid" placeholder="按线路查询" style="width: 150px"></el-input>
            <el-button type="primary" icon="el-icon-search" style="margin-left: 5px" @click="searchByLine"></el-button>
        </div>

        <div>
            <el-button @click="dialogFormVisible = true">新增汽车 <i class="el-icon-circle-plus-outline"></i></el-button>
            <el-dialog title="新增汽车" :visible.sync="dialogFormVisible" width="30%">
                <el-form :model="form">
                    <el-form-item label="车牌号" :label-width="formLabelWidth">
                        <el-input v-model.number="form.busLicense" autocomplete="off" style="width: 200px"></el-input>
                    </el-form-item>
                    <el-form-item label="座位数" :label-width="formLabelWidth">
                        <el-input v-model="form.seat" autocomplete="off" style="width: 200px"></el-input>
                    </el-form-item>
                    <el-form-item label="线路号" :label-width="formLabelWidth">
                        <el-input v-model="form.lineId" autocomplete="off" style="width: 200px"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addBus">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        <el-table :data="tableData_in_page" style="width: 100%">
            <el-table-column prop="busLicense" label="车牌号">
            </el-table-column>
            <el-table-column prop="seat" label="座位数">
            </el-table-column>
            <el-table-column prop="lineId" label="线路号">
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info"
                        icon-color="red" title="确定要删除吗？此操作不可撤销" @confirm="deleteBus(scope.row.busLicense)">
                        <el-button slot="reference" icon="el-icon-delete" circle></el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>

        <div style="padding: 13px 0">
            <el-pagination small layout="prev, next" :total="tableData.length" @prev-click="prevPage"
                @next-click="nextPage">
            </el-pagination>
        </div>

    </div>
</template>
  
  
<script>

import axios from 'axios'

export default {
    name: 'Bus',
    data() {
        return {
            tableData: [],
            input: {
                lineid: '',
            },
            add: {
                memberName: '666',
                memberId: '',
            },
            dialogFormVisible: false,
            form: {
                busLicense: '',
                seat: '',
                lineId: ''
            },
            formLabelWidth: '120px',
            cur_page: 1
        }
    }, components: {
        axios
    }, methods: {
        searchByLine() {
            axios.request('/bus/line', {
                params: {
                    "lineid": this.input.lineid
                }
            }).then((response) => {
                this.tableData = response.data
            })
        }, addBus() {
            axios(
                {
                    url: "/bus/insert",
                    method: "POST",
                    data: {
                        busLicense: this.form.busLicense,
                        seat: this.form.seat,
                        lineId: this.form.lineId,
                    }
                }
            ).then((res) => {
                console.log(res);
                axios.get("/bus/all").then((response) => {
                    this.tableData = response.data
                    this.dialogFormVisible = false
                    this.$message.success('添加成功');
                });
            })
        }, deleteBus(id) {
            axios(
                {
                    url: "/bus/delete",
                    method: "POST",
                    data: {
                        busLicense: id
                    }
                }
            ).then((res) => {
                console.log(res)
                axios.get('/bus/all')
                    .then((response) => {
                        this.tableData = response.data
                    })
            })
        }, prevPage() {
            this.cur_page--
        }, nextPage() {
            this.cur_page++
        }
    }, created() {
        axios.get('/bus/all')
            .then((response) => {
                this.tableData = response.data
            })
    }, computed: {
        tableData_in_page() {
            return this.tableData.slice((this.cur_page - 1) * 10, this.cur_page * 10)
        }
    }
}

</script>