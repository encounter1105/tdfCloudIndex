<template>
  <div class="TDFCloudIndex">
    <div class="banner">
       <div class="div1">
           太极微服务开发框架TDF Cloud
       </div>
       <div class="div2">
         简要的概括产品的定位、特性。
       </div>
       <div class="button">
         <el-button>开始使用</el-button>
       </div>
      <!--<div class="img">-->
        <!--<span><img src="http://tech.taiji.com.cn/community/openSourceProjDetail?linkid=0bbc52dbc151419d866e0c89b5baa253" alt="TDF cloud"></span>-->
      <!--</div>-->
    </div>
    <div class="indexPic">
      <img src="../../../src/assets/tdfCloud.png" alt="TDF cloud">
    </div>
    <div class="index">
      <div>
        <el-row>
          <el-col :span="24" class="indexNav">
            <el-tabs class="indexNav1">
              <el-tab-pane label="产品概览">
                <div class="content">
                  <h3 class="content_title">太极微服务平台 TDF Cloud简介</h3>
                  <p class="content_detail">太极微服务平台(TDF Cloud)是一个围绕应用和微服务的Paas平台，<br/>提供一站式应用全生命周期管理能力和数据化运营支持，提供多维<br/>度应用和服务的监控数据，助力服务性能优化，提供基于Spring <br/>Cloud的微服务架构的技术支持。</p>
                </div>
                <div class="indexAdver">
                  <h3 class="content_title">活动&公告</h3>
                  <a  href="http://www.taiji.tech.com.cn" class="content_detail">太极微服务平台TDF Cloud开始公测</a>
                </div>
              </el-tab-pane>
              <el-tab-pane label="产品功能">
                产品功能
              </el-tab-pane>
              <el-tab-pane label="快速入门">
                快速入门
              </el-tab-pane>
              <el-tab-pane label="开发手册">
                开发手册
              </el-tab-pane>
              <el-tab-pane label="常见问题">
                常见问题
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="TDF-trait">
      <h2 align="center">太极微服务平台的特性</h2>
      <div>
        <ul class="TraitList">
          <li v-for="traits in TdfTraits">
            <span class="traitImg"><img :src="traits.traitImg" width="100%"></span>
            <span class="traitName">{{ traits.traitName }}</span>
            <span class="traitdetail"><p>{{ traits.traitDetail }}</p></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-footer">
      <div class="slide1">COPYRIGHT @ 2018 太极计算机股份有限公司</div>
      <div class="slide2">POWERED BY INNOVATION AND RESEARCH INSTITUTE</div>
    </div>
  </div>
</template>

<script>
 export default {
   name: "TdfCloudIndex",
   data(){
     return{
       TdfTraits:[
         {
           traitId:1,
           traitImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
           traitName:'拥抱开源社区',
           traitDetail:'拥抱Spring Cloud开源社区，提供高可用，可扩展、灵活的微服务社区技术支持，降低用户迁移到微服务的时间金额人力成本。'
         },{
           traitId:2,
           traitImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
           traitName:'拥抱开源社区',
           traitDetail:'拥抱Spring Cloud开源社区，提供高可用，可扩展、灵活的微服务社区技术支持，降低用户迁移到微服务的时间金额人力成本。'
         },{
           traitId:3,
           traitImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
           traitName:'拥抱开源社区',
           traitDetail:'拥抱Spring Cloud开源社区，提供高可用，可扩展、灵活的微服务社区技术支持，降低用户迁移到微服务的时间金额人力成本。'
         },{
           traitId:4,
           traitImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
           traitName:'拥抱开源社区',
           traitDetail:'拥抱Spring Cloud开源社区，提供高可用，可扩展、灵活的微服务社区技术支持，降低用户迁移到微服务的时间金额人力成本。'
         },{
           traitId:5,
           traitImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
           traitName:'拥抱开源社区',
           traitDetail:'拥抱Spring Cloud开源社区，提供高可用，可扩展、灵活的微服务社区技术支持，降低用户迁移到微服务的时间金额人力成本。'
         },{
           traitId:6,
           traitImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
           traitName:'拥抱开源社区',
           traitDetail:'拥抱Spring Cloud开源社区，提供高可用，可扩展、灵活的微服务社区技术支持，降低用户迁移到微服务的时间金额人力成本。'
         }
       ]
     }
   }
}
</script>

<style scoped>
.TDFCloudIndex{
  background-color: black;
  height:300px;
  width:100%;
  margin:0;
  padding:0;
}
.banner{
  /*background-color: red;*/
  height:300px;
  width:50%;
  padding-top:1px;
  float:left;
}
.div1{
  height:60px;
  /*background-color: aliceblue;*/
  margin-top:80px;
  margin-left:80px;
  font-size:30px;
  color:#fff;
  font-family: 'Microsoft YaHei';
  display:inline-block;
}
.div2{
  height:40px;
  width:500px;
  color:#fff;
  /*background-color: aliceblue;*/
  margin-top:5px;
  margin-left:80px;
  font-size:15px;
  display:block;
  /*float:left;*/
}
.button{
  height:40px;
  background-color: aliceblue;
  margin-top:5px;
  margin-left:80px;
  display:inline-block;
}
.indexPic{
  /*background-color:green;*/
  height:300px;
  width:50%;
  margin-top:15px;
  /*overflow: hidden;*/
  display:inline-block;
}
.el-tabs__header{
  background-color: blueviolet;
}
.index{
  background-color: azure;
  padding-bottom:50px;
}
.content_title{
  margin-left:65px;
}
.content_detail{
  margin-left:65px;
  weight:720px;
}
.TraitList li{
  list-style: none;
  width:28%;
  border:1px solid #E5E9F2;
  height: auto;
  overflow: hidden;
  background-color:#fff;
  padding: 10px;
  float:left;
  margin: 20px 15px;
}
.TraitList li span{
  display: block;
  float:left;
}
.traitImg{
  width: 50%;
}
.traitName{
  font-size: 18px;
  padding-left: 10px;
  color:black;

}
.traitDetail{
  font-size: 16px;
  padding-left: 10px;
  padding-top:10px;
}
.index-footer{
  clear:both;
  background-color: black;
  height:168px;
  weight:100%;
  font: bold 12px/20px sans-serif;
}
.slide1{
  text-align:center;
  padding-top:80px;
  font-size:15px;
}
.slide2{
  text-align:center;
  font-size:15px;
}
</style>
