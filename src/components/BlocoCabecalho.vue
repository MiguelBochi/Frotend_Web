<script></script>
<template>
  <header id="header">
    <div id="menu-input"></div>
    <div id="conta-area">
      <div id="logout-input"></div>
      <div id="usuario-input"></div>
    </div>
  </header>
</template>

<style>
header {
  background-color: #666945;
  padding: 10px;
  height: 50px;
  display: flex;
  padding-left: 1.5rem;
  justify-content: space-between;
}
#menu-input {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: #81A649;
  mix-blend-mode: Screen;
}
#conta-area {
  display: flex;
}
#logout-input {
  width: 100px;
  height: 50px;
  border-radius: 15px;
  background-color: #f2f2f2;
  margin-right: 10px;
  border: 1px solid #f2eee9bf;
}
#usuario-input {
  width: 250px;
  height: 50px;
  border-radius: 15px;
  background-color: #6d8c89bf;
  border: 1px solid #f2eee9bf;
}
</style>
