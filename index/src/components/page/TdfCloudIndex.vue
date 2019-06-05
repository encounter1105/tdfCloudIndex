<template>
  <div class="TDFCloudIndex">
    <div class="banner">
       <el-row :gutter="10">
         <el-col :span="12"><div class="banner-font">太极微服务开发框架TDF Cloud</div></el-col>
       </el-row>
       <!--<span class="span-font">太极微服务开发框架TDF Cloud</span>-->
       <!--<div class="span-font2">简要的概括产品的定位、特性。</div>-->
       <!--<div class="button">-->
         <!--<el-button>开始使用</el-button>-->
       <!--</div>-->
      <!--<div class="img">-->
        <!--<span><img src="http://tech.taiji.com.cn/community/openSourceProjDetail?linkid=0bbc52dbc151419d866e0c89b5baa253" alt="TDF cloud"></span>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "TdfCloudIndex"
    }
</script>

<style scoped>
.TDFCloudIndex{
  margin:0;
  padding:0;
}
.banner{
  background-color: black;
  height:300px;
  weight:100%;
}
.banner-font{
  color:#fff;
  font-family: 'Microsoft YaHei';
  font-size:30px;
}
/*.span-font{*/
  /*color: red;*/
  /*font-family: 'Microsoft YaHei';*/
  /*font-size:30px;*/
  /*top:65px; right:190px; bottom:20px; left:70px;*/
  /*position: absolute;*/
/*}*/
/*.span-font2{*/
  /*color: #fff;*/
  /*font-size:15px;*/
  /*top:130px; right:190px; bottom:40px; left:70px;*/
  /*position: absolute;*/
/*}*/
/*.button{*/
  /*top:190px; right:190px; bottom:40px; left:70px;*/
  /*position: absolute;*/
/*}*/
/*.img{*/
  /*position: absolute;*/
  /*top:20px; right:50px; bottom:40px; left:800px;*/
  /*}*/
</style>
