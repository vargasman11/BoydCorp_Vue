<template>
  <!-- ----------------------------------------------------------------------- -->
  <!--                                  menu                                   -->
  <!-- ----------------------------------------------------------------------- -->
  <div class="container-fluid bg-gray-200" id="nav-container">
    <nav>
      <RouterLink :to="{ name: 'home' }">
        <img src="@/assets/Boyd-images/boyd-logo-1.png" id="nav-logo"></RouterLink>
      <button id="menu-btn" class="hamburger hamburger--spin" type="button" @click="showMenu">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
      </button>
    </nav>
    <div class="daseke"> A <img src="@/assets/Boyd-images/daseke-logo.png" alt=""> Company</div>

    <div class="dropDownSection" id="dropDownSection" style="display:none">
      <div class="" id="leftSection">
        <!-- Left Half -->
        <div id="left-half">
          <ul>
            <li>
              <button type="button" class="btn">
                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
              </button>
            </li>
            <li>
              <button type="button" class="btn" data-toggle="collapse" data-target="#AboutUs" @click="iconToggler">About
                Us <i class="fa fa-plus"></i></button>
              <div id="AboutUs" class="collapse">
                <ul class="sub-menu">
                  <li>
                    <RouterLink :to="{ name: 'mission-statement'}">Mission</RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'about-us'}">About</RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'newsletter'}">Newsletter</RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'million-milers'}">Million Milers</RouterLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button type="button" class="btn" data-toggle="collapse"
                      data-target="#CustomerService" @click="iconToggler">Customer Service <i class="fa fa-plus"></i></button>
              <div id="CustomerService" class="collapse">
                <ul class="sub-menu">
                  <li>
                    <RouterLink :to="{ name: 'request-quote'}">Request a Quote</RouterLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button type="button" class="btn" data-toggle="collapse" data-target="#DriverService" @click="iconToggler">Driver
                Service  <i class="fa fa-plus"></i></button>
              <div id="DriverService" class="collapse">
                <ul class="sub-menu">
                  <li>
                    <RouterLink :to="{ name: 'faq'}">FAQs</RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'safety'}">Safety</RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'mcleod-mobile-app'}">McLeod Mobile App</RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'driver-programs'}">Driver Programs</RouterLink>
                  </li>
                  <li><a href="https://bodb.loadtracking.com:4443/im/home" target="_blank">Load Board</a></li>
                </ul>
              </div>
            </li>
            <li>
              <button type="button" class="btn" data-toggle="collapse"
                      data-target="#EmployeeServices" @click="iconToggler">Employee Services <i class="fa fa-plus"></i></button>
              <div id="EmployeeServices" class="collapse">
                <ul class="sub-menu">
                  <li>
                    <RouterLink :to="{ name: 'employee-benefits'}">Employee Benefits</RouterLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <!-- RIGHT HALF -->
        <div id="right-half">
          <ul>
            <li>
              <button type="button" class="btn" data-toggle="collapse"
                      data-target="#Employment" @click="iconToggler">Employment <i class="fa fa-plus"></i></button>
              <div id="Employment" class="collapse">
                <ul class="sub-menu">
                  <li><a href="http://www.drive4boyd.com/" target="_blank">Driver Opportunities</a></li>
                  <li>
                    <RouterLink :to="{ name: 'non-driver-opportunities'}">Non Driver Opportunities</RouterLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button type="button" class="btn">
                <RouterLink :to="{ name: 'contact-us'}">Contact Us</RouterLink>
              </button>
            </li>
            <li>
              <button type="button" class="btn" data-toggle="collapse"
                      data-target="#Chaplain" @click="iconToggler">Support <i class="fa fa-plus"></i></button>
              <div id="Chaplain" class="collapse">
                <ul class="sub-menu">
                  <li>
                    <RouterLink :to="{ name: 'support'}">Corporate Chaplain</RouterLink>
                  </li>
                  <li><a href="https://www2.boydbros.com/boo/menu.pgm" target="_blank">Owner Operator</a></li>
                </ul>
              </div>
            </li>
            <li>
              <button type="button" class="btn"><a href="http://www.boydlogisticsllc.com/" target="_blank">Logistics
                Services</a></button>
            </li>
            <li>
              <button type="button" class="btn"><a target="_blank" href="https://www.rewardbooth.com/boydbros/login">Boyd
                Bucks</a></button>
            </li>
          </ul>
        </div>

      </div>
      <!-- Right Section with search and icons -->
      <div id="rightSection">
        <div class="search-section">
          <h4 style="color: #545454; margin-left: 50%; transform:translateX(-50%);">SOCIAL</h4>
        </div>
        <div class="social-links">
          <ul>
            <li><a href="https://www.facebook.com/BoydBrosInc/" target="_blank"><i class="fa fa-facebook-f"></i></a>
            </li>
            <li><a href="https://twitter.com/boydbrosdrivers" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/company/boyd-bros.-transportaton-inc" target="_blank"><i
                class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {RouterLink, RouterView} from 'vue-router';
export default {
  name: "Nav",
  methods: {
    showMenu: function () {
      // select the menu
      var x = document.getElementById("dropDownSection");
      // select the hamburger btn
      var y = document.getElementById("menu-btn");

      if (x.style.display === "none") {
        // show the dropdown menu
        x.style.display = "block";
        //transition hamburger to x
        y.classList.add("is-active");
      } else {
        x.style.display = "none";
        y.classList.remove("is-active");
      }
    },
    iconToggler: function (e){
      let icon = e.target;
      icon.classList.toggle("fa-minus")
      icon.parentElement.classList.toggle("red")
    }
  }
}

</script>

<style scoped>

</style>