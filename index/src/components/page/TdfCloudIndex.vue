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
            <div class="traitImg"><img :src="traits.traitImg" width="100%" style="margin:0 auto"></div>
            <div class="traitName">{{ traits.traitName }}</div>
            <p class="traitDetail-info">{{ traits.traitDetail }}</p>
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
           traitImg:"https://main.qcloudimg.com/raw/1378b32aabf62f4e972a28f4ed032b9d.svg",
           traitName:'拥抱开源社区',
           traitDetail:'拥抱Spring Cloud开源社区，提供高可用，可扩展、灵活的微服务社区技术支持，降低用户迁移到微服务的时间金额人力成本。'
         },{
           traitId:2,
           traitImg:"https://main.qcloudimg.com/raw/8b7dd6ac083a7bf2d9fe3b70b7d0f64b.svg",
           traitName:'应用全生命周期管理',
           traitDetail:'提供从创建应用到运行应用的全生命周期管理，支持创建、部署、回滚、扩容、下线、启动和停止应用。提供虚拟机和容器两种部署方式，满足不同客户的使用需求。'
         },{
           traitId:3,
           traitImg:"https://main.qcloudimg.com/raw/a6b1a76ea491c0dc21ab349608caa860.svg",
           traitName:'细粒度服务治理',
           traitDetail:'提供服务和 API 级别的服务治理能力，支持控制台上配置服务路由、服务限流、服务鉴权规则，支持分布式配置管理。'
         },{
           traitId:4,
           traitImg:"https://main.qcloudimg.com/raw/8857e5092b02cef8e6037797b63f0b41.svg",
           traitName:'分布式事务',
           traitDetail:'集成了分布式事务能力，支持 TCC 模式分布式事务管理功能，解决跨数据库和跨服务的事务问题。 '
         },{
           traitId:5,
           traitImg:"https://main.qcloudimg.com/raw/148b166efb6863a237123ff2e3c93c1e.svg",
           traitName:'灵活运维',
           traitDetail:'支持日志服务、调用链、服务依赖拓扑图、基于监控的弹性伸缩功能，满足不同纬度的运维需求。'
         },{
           traitId:6,
           traitImg:"https://main.qcloudimg.com/raw/5bfe15ea0247fc497989246d9af8d16b.svg",
           traitName:'跨可用区高可用',
           traitDetail:'支持同城跨可用区容灾和就近路由，规避单可用区可能存在的不可抗力风险，提高服务的高可用性和容灾能力。'
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
  width:55%;
  padding-top:1px;
  float:left;
}
.div1{
  height:60px;
  /*background-color: aliceblue;*/
  margin-top:80px;
  margin-left:100px;
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
  margin-left:100px;
  font-size:15px;
  display:block;
  /*float:left;*/
}
.button{
  height:40px;
  background-color: aliceblue;
  margin-top:5px;
  margin-left:100px;
  display:inline-block;
}
.indexPic{
  /*background-color:green;*/
  height:300px;
  width:45%;
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
  border:1px #E5E9F2;
  height: 180px;
  overflow: hidden;
  background-color:#fff;
  padding: 10px;
  float:left;
  margin: 20px 15px;
  position:relative;
}
.TraitList li span{
  display: block;
  float:left;
}
.traitImg{
  width: 60px;
  height:60px;
  text-align: center;
  margin:0 auto;
}
.traitName{
  overflow: hidden;
  text-align: center;
  font-size: 16px;
  padding-left: 10px;
  color:black;
  padding-top:10px;
}
.traitDetail-info{
  font-size: 14px;
  color:#666;
  margin-top:10px;
  line-height:1.7;
  word-wrap:break-word;
  /*padding-left: 10px;*/
  /*padding-top:10px;*/
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
