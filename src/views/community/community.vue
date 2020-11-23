<template>
  <div class="communityPage">
    <div>
      <!-- //h2 tag -->
      <h2>社区活动</h2>
    </div>
    <div>
      <span>strom上所有游戏与软件的社区和官方内容</span>
    </div>
    <div class="searchbox"> 
      <!-- // 搜索box -->
      <div class="searchBoxLeft">  
        <!-- //left 分为：最近游玩游戏/最近看过的中心 -->
        <div class="SBL-game"> 
          <!-- //最近游玩的游戏 -->
          <div>
            <span>您最近玩过的游戏</span>
          </div>
          <div class="SBL-game-content">
            <ul> 
            <li><a href="#">CSGO</a></li>
            <li><a href="#">Terraria</a></li>
            </ul>
          </div>
        </div>
        <div class="SBL-center"> 
          <!-- //最近看过的中心 -->
          <div>
          <span>您最近看过的中心</span>
          </div>
          <div class="SBL-center-content">
            <ul>
            <li><a href="#">CSGO</a></li>
            <li><a href="#">Terraria</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="searchBoxRight"> 
        <!-- 搜索框 -->
        <div class="searchBtnbox">
          <div class="searchBtnboxTop">
            <span>查找中心</span>
            <div class="searchBtnboxInput">
              <input type="text" placeholder="搜索产品">
              <button name="search">搜索</button>
            </div>
          </div>
          <div class="searchBtnboxUnder">
            <span>寻找玩家</span>
            <div class="searchBtnboxInput">
              <input type="text" placeholder="搜索好友">
              <button name="search">搜索</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-content">
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
@import url("../../assets/css/community/community.css")
</style>