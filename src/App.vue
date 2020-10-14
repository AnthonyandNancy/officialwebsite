<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
  html{
    width: 100%;
    overflow-x: hidden;
  }
  body {
    font-family: "Archivo", sans-serif;
    font-weight: normal;
    font-style: normal;
    overflow-x: hidden;
    font-size: 16px;
    line-height: 1.6;
    background-color: #f8f8f8;
  }
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>

