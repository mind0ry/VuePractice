<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="(vo,index) in cafe_list" :key="index">
                <div class="thumbnail">
                <img :src="vo.image" style="width:240px;height: 150px">
                <div class="caption">
                    <p>{{vo.korname}}</p>
                </div>
            </div>
            </div>
        </div>
        <div class="row text-center" style="margin-top: 10px">
            <ul class="pagination">
                <li v-if="startPage>1"><a class="a-link" @click="prev(startPage-1)">&lt;</a></li>
                <li v-for="(i,index) in range(startPage,endPage)" :class="i===curpage?'active':''" :key="index"><a class="a-link" @click="pageChange(i)">{{ i }}</a></li>
                <li v-if="endPage<totalpage"><a class="a-link" @click="next(endPage+1)">&gt;</a></li>
            </ul>
        </div>
    </div>
</template> 
<script>
    export default({
        data() {
            return {
                cafe_list:[],
                curpage:1,
                totalpage:0,
                startPage:0,
                endPage:0
            }
        },
        mounted() {
            this.dataRecv()
        },
        methods: {
            async dataRecv() {
                try {
                    const response=await fetch(
                        `http://localhost:8080/spring-start/cafe/list_vue.do?page=${this.curpage}`
                    )
                    const result=await response.json()
                    console.log(result)
                    this.cafe_list=result.list
                    this.curpage=result.curpage
                    this.totalpage=result.totalpage
                    this.startPage=result.startPage
                    this.endPage=result.endPage
                } catch(error) {
                    console.log(error)
                }
            },
            range(start,end) {
                let arr=[]
                let len=end-start
                for(let i=0;i<=len;i++) {
                    arr[i]=start
                    start++
                }
                return arr
            },
            prev(page) {
                this.curpage=page
                this.dataRecv()
            },
            next(page) {
                this.curpage=page
                this.dataRecv()
            },
            pageChange(page) {
                this.curpage=page
                this.dataRecv()
            },
            find() {
                this.curpage=1
                this.dataRecv()
            }

        }
    })
</script>