<template>
  <div>
    <input type="checkbox" id="input-checkbox" class="input-checkbox" />
    <label for="input-checkbox" class="nav-button">
      <span></span>
    </label>
  </div>
</template>
<style>
.input-checkbox {
  display: none;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.nav-button span::before,
.nav-button span::after,
.nav-button span {
  background-color: #ffffff;
  width: 32px;
  height: 3px;
  border-radius: 2px;
  transition: 0.3s;
}

.nav-button span::before,
.nav-button span::after {
  content: "";
  position: relative;
  display: inline-block;
}

.nav-button span::before {
  top: -22px;
}

.nav-button span::after {
  top: -32px;
}

.input-checkbox:checked + .nav-button span {
  background-color: transparent;
}

.input-checkbox:checked + .nav-button span::before {
  top: -18px;
  transform: rotate(135deg);
}

.input-checkbox:checked + .nav-button span::after {
  top: -41px;
  transform: rotate(-135deg);
}
</style>
