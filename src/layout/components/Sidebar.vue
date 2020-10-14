<template>
  <div>


    <header class="header-absolute sticky-header">
      <div class="container container-custom-one">
        <div class="nav-container d-flex align-items-center justify-content-between sticky-top">
          <!-- Main Menu -->
          <div class="nav-menu d-lg-flex align-items-center">

            <!-- Navbar Close Icon -->
            <div class="navbar-close">
              <div class="cross-wrap"><span class="top" /><span class="bottom" /></div>
            </div>

            <div class="menu-items">
              <ul>
                <template v-for="(item , index ) in routes">
                  <li :key="index"  >
                    <!--                    <a href="apartment-grid.html">Apartments</a>-->
                    <!--                                        <ul class="submenu">-->
                    <!--                                          <li><a href="apartment-details.html">Apartments Details</a></li>-->
                    <!--                                          <li><a href="trending.html">Apartments List 2</a></li>-->
                    <!--                                          <li><a href="apartment-grid.html">Apartments Grid</a></li>-->
                    <!--                                          <li><a href="apartment-list.html">Apartments List</a></li>-->
                    <!--                                        </ul>-->
                    <div @click="handelFather(item)" style="display: inline">
                      <router-link :to="item.path" >{{ item.meta.title }}</router-link>

                    </div>

                    <ul v-if="item.children" class="submenu" @click="handelChildren(item)">
                      <li>
                        <template v-for="(itemChildren , indexChildren ) in item.children">
                          <router-link :key="indexChildren" :to="itemChildren.path">{{ itemChildren.meta.title }}</router-link>
                        </template>
                      </li>
                    </ul>

                  </li>
                </template>
              </ul>

            </div>

            <!-- from pushed-item -->
            <div class="nav-pushed-item" />
          </div>

          <!-- Site Logo -->
          <div class="site-logo">
            <router-link to="/home">
              <img :src="logo" alt="Logo">
            </router-link>
            <!--            <a href="index.html"</a>-->
          </div>

          <!-- Header Info Pussed To Menu Wrap -->
          <div class="nav-push-item">
            <!-- Header Info -->
            <div class="header-info d-lg-flex align-items-center">
              <div class="item">

                <span>Phone Number</span>
                <a href="tel:+90898787709">
                  <h5 class="title">+908 987 877 09</h5>
                </a>
              </div>
              <div class="item">

                <span>Email Address</span>
                <a href="mailto:info@webmail.com">
                  <h5 class="title">info@webmail.com</h5>
                </a>
              </div>
            </div>
          </div>

          <!-- Navbar Toggler -->
          <div class="navbar-toggler">
            <span /><span /><span />
          </div>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        activeIndex: '0',
        keyPath: 0,
        routes: [],
        logo: require('src/assets/logo.png')
      }
    },
    mounted() {
      this.routes = this.$router.options.routes[0].children
      console.log(this.$router.options.routes[0].children)
    },
    methods: {
      handelFather(e) {
        // console.log('handelFather')
        if (e.children) {
          localStorage.removeItem(e.name, `${e.name}haveChildren`)
        }
      },
      handelChildren(e) {
        // console.log('handelChildren')
        if (e.children) {
          localStorage.setItem(e.name, `${e.name}haveChildren`)
        }
        // console.log(e)
      },
      handleSelect(key, keyPath) {
        this.keyPath = keyPath
        console.log(key, keyPath)
      },
      goPage(e) {
        console.log(e)
        this.$router.push({ path: e })
      },
      resolveIndex(index, indexChildren) {
        console.log(index + '-' + indexChildren)
        return String(index) + -+String(indexChildren)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~bootstrap/scss/bootstrap.scss";
  .box{
    width: 100vh;
    .head{
      width: 80vh;
      height: 40%;
      margin: 0 auto;
      display: flex;
      .head-div{
        margin-left: 5%;
        list-style: none;
        font-size: 2vh;
        a{
          text-decoration: none;
        }
        .secondItem{
          display: none;
        }
      }
      .itemHover:hover{
        border-bottom: blue solid 1px;
      }
      .firstItem:hover{
        .secondItem{
          display: block;
        }
      }
    }
  }
</style>

<style>
  header.header-absolute {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 99;
    background-color: transparent;
    top: 35px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    header .container.container-custom-one {
      max-width: 100%;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header .container.container-custom-one {
      max-width: 100%;
    }
  }
  header .nav-container .toggle {
    margin-right: 50px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header .nav-container .toggle {
      margin-right: 20px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header .nav-container .toggle {
      margin-right: 15px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header .nav-container .toggle {
      display: none;
    }
  }
  @media (max-width: 767px) {
    header .nav-container .toggle {
      display: none;
    }
  }
  header .nav-container .toggle a {
    color: #222;
    font-size: 24px;
    padding: 10px;
  }
  header .nav-container .site-logo img {
    max-width: 200px;
    max-height: 50px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header .nav-container .site-logo img {
      max-width: 200px;
    }
  }
  @media (max-width: 575px) {
    header .nav-container .site-logo img {
      max-width: 180px;
    }
  }
  header .nav-container .site-logo .sticky-logo {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header .nav-container .header-info {
      padding: 40px 20px 0;
    }
  }
  @media (max-width: 767px) {
    header .nav-container .header-info {
      padding: 40px 20px 0;
    }
  }
  header .nav-container .header-info .item {
    padding-left: 50px;
    position: relative;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header .nav-container .header-info .item {
      color: #fff;
    }
  }
  @media (max-width: 767px) {
    header .nav-container .header-info .item {
      color: #fff;
    }
  }
  header .nav-container .header-info .item i {
    position: absolute;
    left: 0;
    top: 6px;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
    background: #111;
    color: #fff;
    font-size: 14px;
  }
  header .nav-container .header-info .item span {
    font-weight: 600;
    font-size: 14px;
    padding-bottom: 4px;
  }
  header .nav-container .header-info .item a {
    display: block;
  }
  header .nav-container .header-info .item .title {
    font-size: 24px;
    font-weight: 400;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    header .nav-container .header-info .item .title {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header .nav-container .header-info .item .title {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header .nav-container .header-info .item .title {
      color: #fff;
      font-size: 22px;
    }
  }
  @media (max-width: 767px) {
    header .nav-container .header-info .item .title {
      color: #fff;
      font-size: 22px;
    }
  }
  header .nav-container .header-info .item:not(:last-child) {
    margin-right: 45px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    header .nav-container .header-info .item:not(:last-child) {
      margin-right: 15px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header .nav-container .header-info .item:not(:last-child) {
      margin-right: 15px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header .nav-container .header-info .item:not(:last-child) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    header .nav-container .header-info .item:not(:last-child) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
  header .nav-container .menu-items ul li {
    display: inline-block;
    position: relative;
  }
  header .nav-container .menu-items ul li a {
    font-size: 16px;
    font-weight: 600;
    color: #111;
    text-transform: capitalize;
    line-height: 80px;
    padding: 0px 20px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    header .nav-container .menu-items ul li a {
      font-size: 14px;
      padding: 0 10px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header .nav-container .menu-items ul li a {
      padding: 0 8px;
    }
  }
  header .nav-container .menu-items ul li .submenu {
    position: absolute;
    left: 0;
    top: 110%;
    width: 200px;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    z-index: 99;
    height: auto;
  }
  header .nav-container .menu-items ul li .submenu li {
    display: block;
  }
  header .nav-container .menu-items ul li .submenu li a {
    display: block;
    padding: 8px 14px;
    position: relative;
    -webkit-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    border-radius: 0;
    margin: 0 0;
    line-height: 30px !important;
    border-bottom: 1px solid rgba(242, 244, 248, 0.7);
    color: #777;
  }
  header .nav-container .menu-items ul li .submenu li a.active{
    background-color: #4c6275;
    color: #fff !important;
    border-color: #4c6275;
  }
  header .nav-container .menu-items ul li .submenu li a:hover{
    background-color: #4c6275;
    color: #fff !important;
    border-color: #4c6275;
  }
  header .nav-container .menu-items ul li .submenu li .submenu {
    left: 100%;
    top: 50%;
  }
  header .nav-container .menu-items ul li .submenu li:hover .submenu {
    top: 0;
  }
  header .nav-container .menu-items ul li:hover > .submenu {
    opacity: 1;
    visibility: visible;
    top: 100%;
  }
  header .nav-container .menu-items ul li .dd-trigger {
    display: none;
  }
  header .nav-container .nav-pushed-item {
    display: none;
  }
  header .nav-container .navbar-toggler {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: none;
  }
  header .nav-container .navbar-toggler span {
    position: relative;
    background-color: #222;
    border-radius: 3px;
    display: block;
    height: 3px;
    margin-top: 5px;
    padding: 0;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    width: 30px;
    cursor: pointer;
    display: block;
  }
  header .nav-container .navbar-toggler.active span:nth-of-type(1) {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    top: 8px;
  }
  header .nav-container .navbar-toggler.active span:nth-of-type(2) {
    opacity: 0;
  }
  header .nav-container .navbar-toggler.active span:nth-of-type(3) {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    top: -8px;
  }
  header .nav-container .navbar-close {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 12;
    display: none;
  }
  header .nav-container .navbar-close .cross-wrap {
    width: 26px;
    height: 26px;
    cursor: pointer;
    position: relative;
  }
  header .nav-container .navbar-close .cross-wrap span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 6px;
    background: #fff;
  }
  header .nav-container .navbar-close .cross-wrap span.top {
    top: 12px;
    left: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  header .nav-container .navbar-close .cross-wrap span.bottom {
    bottom: 12px;
    left: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  header .nav-container.breakpoint-on .nav-menu {
    background-color: #4c6275;
    position: fixed;
    top: 0;
    left: -300px;
    z-index: 9999;
    width: 300px;
    height: 100%;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    padding: 0;
    -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    display: block;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-top: 70px;
  }
  header .nav-container.breakpoint-on .nav-menu .menu-items ul li {
    display: block;
  }
  header .nav-container.breakpoint-on .nav-menu .menu-items ul li a {
    display: block;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    color: #fff !important;
    line-height: 45px !important;
  }
  header .nav-container.breakpoint-on .nav-menu .menu-items ul li .submenu {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    visibility: visible;
    opacity: 1;
    display: none;
    -webkit-transition: none;
    transition: none;
  }
  header .nav-container.breakpoint-on .nav-menu .menu-items ul li .submenu li a {
    color: #fff;
    padding: 0px 20px 0 40px;
    line-height: 45px !important;
  }
  header .nav-container.breakpoint-on .nav-menu .menu-items ul li .submenu li a:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
  header .nav-container.breakpoint-on .nav-menu .menu-items ul li .dd-trigger {
    display: block;
    position: absolute;
    right: 0;
    height: 45px;
    width: 45px;
    top: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    z-index: 2;
    background: transparent;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }
  header .nav-container.breakpoint-on .nav-menu.menu-on {
    left: 0;
  }
  header .nav-container.breakpoint-on .nav-pushed-item,
  header .nav-container.breakpoint-on .navbar-close,
  header .nav-container.breakpoint-on .navbar-toggler {
    display: block;
  }
  header.header-two .nav-container .toggle a,
  header.header-two .nav-container .menu-items ul li a {
    color: #fff;
  }
  header.header-two .nav-container .navbar-toggler span {
    background-color: #fff;
  }
  header.header-two .header-info .item i {
    background: #4c6275;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header.header-two .header-info .item i {
      background: #111;
    }
  }
  @media (max-width: 767px) {
    header.header-two .header-info .item i {
      color: #111;
    }
  }
  header.header-two .header-info .item a, header.header-two .header-info .item,
  header.header-two .header-info .item .title {
    color: #fff;
  }
  header.header-three {
    background-color: transparent;
    position: relative;
  }
  header.header-three .main-menu-area {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 99;
    height: auto;
    bottom: -60px;
  }
  @media (max-width: 399px) {
    header.header-three .main-menu-area {
      position: relative;
      bottom: 0;
      top: 0;
    }
  }
  header.header-three .main-menu-area.sticky-header.sticky-active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    z-index: 999;
    -webkit-animation: sticky 1.2s;
    animation: sticky 1.2s;
  }
  header.header-three .main-menu-area.sticky-header.sticky-active .nav-container {
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04);
  }
  header.header-three .main-menu-area.sticky-header.sticky-active .nav-container .menu-items ul li a {
    line-height: 100px;
  }
  header.header-three .header-top {
    padding-top: 15px;
    padding-bottom: 75px;
    font-family: "Roboto", sans-serif;
    background-color: #222;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header.header-three .header-top {
      padding-bottom: 60px;
    }
  }
  @media (max-width: 767px) {
    header.header-three .header-top {
      text-align: center;
      padding-bottom: 50px;
    }
  }
  @media (max-width: 399px) {
    header.header-three .header-top {
      display: none;
    }
  }
  header.header-three .header-top,
  header.header-three .header-top a {
    color: #fff;
  }
  @media (max-width: 767px) {
    header.header-three .header-top ul.header-top-info {
      margin-top: 10px;
    }
  }
  header.header-three .header-top ul.header-top-info li {
    display: inline-block;
    margin-left: 15px;
  }
  @media (max-width: 575px) {
    header.header-three .header-top ul.header-top-info li {
      margin-left: 5px;
    }
  }
  header.header-three .header-top ul.header-top-info li i {
    margin-right: 10px;
    color: #4c6275;
  }
  header.header-three .nav-container {
    background-color: #fff;
    padding: 0 40px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header.header-three .nav-container {
      padding: 0 10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header.header-three .nav-container {
      padding: 10px;
    }
  }
  @media (max-width: 767px) {
    header.header-three .nav-container {
      padding: 10px;
    }
  }
  @media (max-width: 399px) {
    header.header-three .nav-container {
      padding: 10px 5px;
      margin-left: -15px;
      margin-right: -15px;
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    header.header-three .nav-container .site-logo img {
      max-width: 200px;
    }
  }
  @media (max-width: 399px) {
    header.header-three .nav-container .site-logo img {
      max-width: 150px;
    }
  }
  header.header-three .nav-container .menu-items ul li a {
    line-height: 120px;
  }
  header.header-three .nav-container .menu-items ul li .submenu li a {
    line-height: 30px;
  }
  header.header-three .nav-container .menu-right-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  header.header-three .nav-container .menu-right-buttons .toggle {
    margin-right: 0;
  }
  header.header-three .nav-container .menu-right-buttons > div {
    margin-left: 20px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    header.header-three .nav-container .menu-right-buttons > div {
      margin-left: 5px;
    }
  }
  @media (max-width: 767px) {
    header.header-three .nav-container .menu-right-buttons > div {
      margin-left: 5px;
    }
  }
  header.header-three .nav-container .menu-right-buttons .navbar-toggler {
    border: 2px solid rgba(133, 133, 133, 0.2);
    padding: 15px;
  }
  @media (max-width: 575px) {
    header.header-three .nav-container .menu-right-buttons .navbar-toggler {
      padding: 5px 10px;
    }
    header.header-three .nav-container .menu-right-buttons .navbar-toggler span {
      width: 20px;
    }
  }
  header.header-three .nav-container .menu-right-buttons a {
    width: 65px;
    height: 65px;
    border: 2px solid rgba(133, 133, 133, 0.2);
    text-align: center;
    line-height: 65px;
    padding: 0;
    color: #111;
  }
  @media (max-width: 575px) {
    header.header-three .nav-container .menu-right-buttons a {
      height: 40px;
      width: 40px;
      line-height: 40px;
      font-size: 14px;
    }
  }
  header.header-three .nav-container .menu-right-buttons a:hover {
    background-color: #4c6275;
    color: #fff;
  }
  header.header-three .search {
    position: relative;
  }
  header.header-three .search .search-icon {
    position: relative;
    display: block;
  }
  header.header-three .search .search-icon .close-icon,
  header.header-three .search .search-icon .open-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  header.header-three .search .search-icon .close-icon {
    visibility: hidden;
    opacity: 0;
  }
  header.header-three .search .search-icon.active .close-icon {
    visibility: visible;
    opacity: 1;
  }
  header.header-three .search .search-icon.active .open-icon {
    visibility: hidden;
    opacity: 0;
  }
  header.header-three .search .search-form {
    position: absolute;
    right: 0;
    width: 350px;
    display: none;
    top: calc(100% + 27px);
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header.header-three .search .search-form {
      top: calc(100% + 17px);
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    header.header-three .search .search-form {
      top: calc(100% + 10px);
    }
  }
  @media (max-width: 575px) {
    header.header-three .search .search-form {
      top: calc(100% + 20px);
      width: 250px;
    }
  }
  @media (max-width: 399px) {
    header.header-three .search .search-form {
      right: -100%;
      top: calc(100% + 12px);
    }
  }
  header.header-three .search .search-form form {
    position: relative;
  }
  header.header-three .search .search-form form input {
    width: 100%;
    background-color: #f8f8f8;
    height: 60px;
    border: none;
    padding-left: 30px;
    padding-right: 60px;
    font-size: 14px;
  }
  @media (max-width: 575px) {
    header.header-three .search .search-form form input {
      height: 50px;
    }
  }
  header.header-three .search .search-form form button {
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 1;
    background-color: #4c6275;
    font-size: 14px;
    color: #fff;
    -webkit-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
  }
  header.header-three .search .search-form form button:hover {
    background-color: #111;
    color: #fff;
  }
  header.inner-page.header-absolute {
    background-color: #fff;
    top: 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header.inner-page.header-absolute .nav-container {
      padding: 10px 0;
    }
  }
  @media (max-width: 767px) {
    header.inner-page.header-absolute .nav-container {
      padding: 10px 0;
    }
  }
  header.inner-page.header-absolute .nav-container .menu-items ul li a {
    line-height: 130px;
  }
  header.sticky-header.sticky-active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04);
    z-index: 999;
    -webkit-animation: sticky 1.2s;
    animation: sticky 1.2s;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header.sticky-header.sticky-active .nav-container {
      padding: 10px 0;
    }
    header.sticky-header.sticky-active .nav-container .site-logo img {
      max-width: 200px;
    }
  }
  @media (max-width: 767px) {
    header.sticky-header.sticky-active .nav-container {
      padding: 10px 0;
    }
  }
  header.sticky-header.sticky-active .nav-container .menu-items ul li a {
    line-height: 100px;
  }
  header.sticky-header.sticky-active .nav-container .site-logo .main-logo {
    display: none;
  }
  header.sticky-header.sticky-active .nav-container .site-logo .sticky-logo {
    display: block;
  }
  header.sticky-header.sticky-active.header-two .nav-container .toggle a,
  header.sticky-header.sticky-active.header-two .nav-container .menu-items ul li a {
    color: #111;
  }
  header.sticky-header.sticky-active.header-two .nav-container .navbar-toggler span {
    background-color: #111;
  }
  header.sticky-header.sticky-active.header-two .header-info .item a, header.sticky-header.sticky-active.header-two .header-info .item,
  header.sticky-header.sticky-active.header-two .header-info .item .title {
    color: #111;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    header.sticky-header.sticky-active.header-two .header-info .item a, header.sticky-header.sticky-active.header-two .header-info .item,
    header.sticky-header.sticky-active.header-two .header-info .item .title {
      color: #fff;
    }
  }
  @media (max-width: 767px) {
    header.sticky-header.sticky-active.header-two .header-info .item a, header.sticky-header.sticky-active.header-two .header-info .item,
    header.sticky-header.sticky-active.header-two .header-info .item .title {
      color: #fff;
    }
  }
</style>
