<template>
      <header class="header header--main js-header headroom headroom--not-bottom headroom--pinned headroom--top">
        <div class="wrapper wrapper--gutter">
          <div class="grid">
            <div class="grid__item">
            <!-- <router-link to="/" class="logo-main" style="padding-top: 5px; padding-bottom: 10px;"> -->
              <a href="/" class="logo-main" style="padding-top: 5px; padding-bottom: 10px;">
                <img src="/imagenes/LOGO-COLOR-LARGE.png" alt="">
              </a>
            <!-- </router-link> -->
              <nav class="header__nav">
                <button type="button" class="reset-button js-search-layer-button hide-landscape" aria-label="toggle search" id="btn-toggle-search" aria-expanded="false" style="display: none;">
                  <svg class="icon icon--search icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 1q1.828 0 3.496.715t2.871 1.918 1.918 2.871T19 10q0 1.57-.512 3.008t-1.457 2.609l5.68 5.672Q23 21.578 23 22q0 .43-.285.715T22 23q-.422 0-.711-.289l-5.672-5.68q-1.172.945-2.609 1.457T10 19q-1.828 0-3.496-.715t-2.871-1.918-1.918-2.871T1 10t.715-3.496 1.918-2.871 2.871-1.918T10 1zm0 2q-1.422 0-2.719.555T5.047 5.047 3.555 7.281 3 10t.555 2.719 1.492 2.234 2.234 1.492T10 17t2.719-.555 2.234-1.492 1.492-2.234T17 10t-.555-2.719-1.492-2.234-2.234-1.492T10 3z"></path>
                  </svg>
                  <span class="visuallyhidden">search button</span>
                </button>
                <button type="button" class="reset-button hide-landscape js-menu-button" aria-label="toggle menu" id="btn-toggle-menu" aria-expanded="false" aria-controls="main-menu">
                  <svg class="icon icon--icon_menu icon--svg js-icon_menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" stroke="currentColor" stroke-width="1">
                  <rect id="icon_menu-rect" x="1" y="1" width="18" height="3.2" rx="0.05" fill="none"></rect>
                  <use y="7.4" xlink:href="#icon_menu-rect"></use>
                  <use y="14.8" xlink:href="#icon_menu-rect"></use>
                  </svg>
                  <svg class="icon icon--icon_close icon--svg hide js-icon_close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke-linecap="round" stroke="currentColor" stroke-width="2">
                  <line x1="2" y1="2" x2="18" y2="18"></line>
                  <line x1="18" y1="2" x2="2" y2="18"></line>
                  </svg>
                  <span class="visuallyhidden">toggle menu</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
        <hr class="hr">
        <div class="wrapper wrapper--gutter">
          <div class="grid wrapper-nav js-search-layer hide-landscape" id="search-layer" aria-labelledby="btn-toggle-search">
            <div class="grid__item one-whole">
              <form role="search" class="form form--search" action="#" method="get" >
              <label for="query1" class="visuallyhidden ">
              </label>
              <div class="form__text__wrapper">
              <input type="text" class="form__text" id="query1" name="query1" placeholder="Search..." value="">
              </div>
              <button href="#" class="btn btn--solid btn--default btn--full " tabindex="" type="submit">
              <span>Buscar</span>
              </button>
              </form> 
            </div>
          </div>
          <div class="header-nav wrapper-nav js-menu" id="main-menu" aria-labelledby="btn-toggle-menu">
              <div class="header-nav__page-nav">
                <nav class="nav nav--main nav--inline-on-landscape js-main-nav-container" data-activated-level-class="nav-submenu__level--show" data-current-level-class="nav-submenu__level--scrollable">
                  <ul>

                    <li class="js-main-nav-menu-item">
                        <button class="nav__item has-submenu js-submenu-link--mobile hide-landscape">
                            <span>Links</span>
                            <svg class="icon icon--arrow-right icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 42.1">
                                <path d="M22.1 20L2.1 0 0 2.1 18.9 21 0 40l2.1 2.1 20-20c.6-.6.6-1.5 0-2.1z"></path>
                            </svg>
                        </button>
                        <a href="#" class="nav__item has-submenu hide show-landscape--flex " tabindex="" data-analytics="navigationLevel1">
                            <span>Links</span>
                        </a>
                        <div class="nav nav__submenu-level nav__submenu-level-2 js-nav__submenu js-main-nav-menu">
                            <div class="nav__submenu-wrapper js-main-nav-menu">
                                <ul>
                                    <li class="nav__submenu-item__back js-nav__back-one-level hide-landscape">
                                        <button class="nav__submenu-item hide-landscape">
                                            <svg class="icon icon--arrow-left icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 43">
                                                <path d="M.45 20l20-20 2.1 2.1L3.65 21l18.9 19-2.1 2.1-20-20c-.6-.6-.6-1.5 0-2.1z"></path>
                                            </svg>
                                            <span>Back</span>
                                        </button>
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="/employees" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>Equipo de trabajo</span>
                                        </a>
                                        <!-- <router-link to="/employees" class="nav__submenu-item" tabindex="" data-analytics="navigationLevel2"><span>Equipo de trabajo</span></router-link> -->
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="/job" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>Trabaja con nosotros</span>
                                        </a>
                                        <!-- <router-link to="/job" class="nav__submenu-item" tabindex="" data-analytics="navigationLevel2"><span>Trabaja con nosotros</span></router-link> -->
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="/descargas" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>Descargas</span>
                                        </a>
                                        <!-- <router-link to="/descargas" class="nav__submenu-item" tabindex="" data-analytics="navigationLevel2"><span>Descargas</span></router-link> -->
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="/contactenos" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>Contáctenos</span>
                                        </a>
                                        <!-- <router-link to="/contactenos" class="nav__submenu-item" tabindex="" data-analytics="navigationLevel2"><span>Contáctenos</span></router-link> -->
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="js-main-nav-menu-item">
                        <button class="nav__item has-submenu js-submenu-link--mobile hide-landscape">
                            <span>Productos</span>
                            <svg class="icon icon--arrow-right icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 42.1">
                                <path d="M22.1 20L2.1 0 0 2.1 18.9 21 0 40l2.1 2.1 20-20c.6-.6.6-1.5 0-2.1z"></path>
                            </svg>
                        </button>
                        <a href="#" class="nav__item has-submenu hide show-landscape--flex " tabindex="" data-analytics="navigationLevel1">
                            <span>Productos</span>
                        </a>
                        <div class="nav nav__submenu-level nav__submenu-level-2 js-nav__submenu js-main-nav-menu">
                            <div class="nav__submenu-wrapper js-main-nav-menu">
                                <ul>
                                    <li class="nav__submenu-item__back js-nav__back-one-level hide-landscape">
                                        <button class="nav__submenu-item hide-landscape">
                                            <svg class="icon icon--arrow-left icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 43">
                                                <path d="M.45 20l20-20 2.1 2.1L3.65 21l18.9 19-2.1 2.1-20-20c-.6-.6-.6-1.5 0-2.1z"></path>
                                            </svg>
                                            <span>Back</span>
                                        </button>
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="#" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>SubMenu 1</span>
                                        </a>
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="#" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>SubMenu 2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>                      

                    <li class="js-main-nav-menu-item">
                        <button class="nav__item has-submenu js-submenu-link--mobile hide-landscape">
                            <span>Sobre Nosotros</span>
                            <svg class="icon icon--arrow-right icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 42.1">
                                <path d="M22.1 20L2.1 0 0 2.1 18.9 21 0 40l2.1 2.1 20-20c.6-.6.6-1.5 0-2.1z"></path>
                            </svg>
                        </button>
                        <a href="#" class="nav__item has-submenu hide show-landscape--flex " tabindex="" data-analytics="navigationLevel1">
                            <span>Sobre Nosotros</span>
                        </a>
                        <div class="nav nav__submenu-level nav__submenu-level-2 js-nav__submenu js-main-nav-menu">
                            <div class="nav__submenu-wrapper js-main-nav-menu">
                                <ul>
                                    <li class="nav__submenu-item__back js-nav__back-one-level hide-landscape">
                                        <button class="nav__submenu-item hide-landscape">
                                            <svg class="icon icon--arrow-left icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 43">
                                                <path d="M.45 20l20-20 2.1 2.1L3.65 21l18.9 19-2.1 2.1-20-20c-.6-.6-.6-1.5 0-2.1z"></path>
                                            </svg>
                                            <span>Back</span>
                                        </button>
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="#" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>SubMenu 1</span>
                                        </a>
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="#" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>SubMenu 2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li> 

                    <li class="js-main-nav-menu-item">
                        <button class="nav__item has-submenu js-submenu-link--mobile hide-landscape">
                            <span>Servicio al cliente</span>
                            <svg class="icon icon--arrow-right icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 42.1">
                                <path d="M22.1 20L2.1 0 0 2.1 18.9 21 0 40l2.1 2.1 20-20c.6-.6.6-1.5 0-2.1z"></path>
                            </svg>
                        </button>
                        <a href="#" class="nav__item has-submenu hide show-landscape--flex " tabindex="" data-analytics="navigationLevel1">
                            <span>Servicio al cliente</span>
                        </a>
                        <div class="nav nav__submenu-level nav__submenu-level-2 js-nav__submenu js-main-nav-menu">
                            <div class="nav__submenu-wrapper js-main-nav-menu">
                                <ul>
                                    <li class="nav__submenu-item__back js-nav__back-one-level hide-landscape">
                                        <button class="nav__submenu-item hide-landscape">
                                            <svg class="icon icon--arrow-left icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 43">
                                                <path d="M.45 20l20-20 2.1 2.1L3.65 21l18.9 19-2.1 2.1-20-20c-.6-.6-.6-1.5 0-2.1z"></path>
                                            </svg>
                                            <span>Back</span>
                                        </button>
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="#" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>SubMenu 1</span>
                                        </a>
                                    </li>
                                    <li class="js-main-nav-menu-item">
                                        <a href="#" class="nav__submenu-item " tabindex="" data-analytics="navigationLevel2">
                                            <span>SubMenu 2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li> 

                    <li class="js-main-nav-menu-item">
                        <a href="https://noticias.sunrisecargo.com/" target="blank" class="nav__item " tabindex="" data-analytics="navigationLevel1">
                            <span>Noti Sunrise</span>
                        </a>
                    </li>

                  </ul>
                </nav>
              </div>

            <div class="header-nav__meta-nav wrapper-aux-nav" style="display: none;">
                  <form role="search" class="form form--search " action="#" method="get" >
                    <label for="query" class="visuallyhidden ">
                    </label>
                    <div class="form__text__wrapper">
                        <input type="text" class="form__text " id="query" name="query" placeholder="Search..." value="">
                    </div>
                    <button title="Search" class="form__submit btn btn--icon" type="submit">
                        <svg class="icon icon--search icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M10 1q1.828 0 3.496.715t2.871 1.918 1.918 2.871T19 10q0 1.57-.512 3.008t-1.457 2.609l5.68 5.672Q23 21.578 23 22q0 .43-.285.715T22 23q-.422 0-.711-.289l-5.672-5.68q-1.172.945-2.609 1.457T10 19q-1.828 0-3.496-.715t-2.871-1.918-1.918-2.871T1 10t.715-3.496 1.918-2.871 2.871-1.918T10 1zm0 2q-1.422 0-2.719.555T5.047 5.047 3.555 7.281 3 10t.555 2.719 1.492 2.234 2.234 1.492T10 17t2.719-.555 2.234-1.492 1.492-2.234T17 10t-.555-2.719-1.492-2.234-2.234-1.492T10 3z"></path>
                        </svg>
                        <span class="visuallyhidden">Search</span>
                    </button>
                  </form>


                  <div class="js-menu__container header-nav__panel hide-landscape nav--aux">
                    <div aria-hidden="true" aria-label="login" id="navigation-country-selector-2">
                      <div class="nav__submenu-item__back">
                        <button aria-haspopup="true" class="lk btn--full nav__submenu-item" data-target="#navigation-country-selector">
                            <svg class="icon icon--arrow-left icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 43">
                                <path d="M.45 20l20-20 2.1 2.1L3.65 21l18.9 19-2.1 2.1-20-20c-.6-.6-.6-1.5 0-2.1z"></path>
                            </svg>
                            <span>Back</span>
                        </button>
                      </div>

                    </div>
                  </div>
                        
                <div class="nav nav--aux hide show-landscape">
                  <ul>
                  <li class="country-selector" data-country-selector="">
                    <div class="country-selector__item country-selector__country-container country-selector--short" style="display: none;">
                      <button aria-haspopup="true" class="nav__item nav-language js-language-selector-button " data-target="#box-language">
                        <span>Global</span>
                        <svg class="icon icon--arrow-down icon--svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.406 7.828L12 12.422l4.594-4.594L18 9.234l-6 6-6-6z"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="country-selector__item country-selector__country-container country-selector--long" style="display: none;">
                      <button aria-haspopup="true" class="nav__item nav-language js-language-selector-button " data-target="#box-language">
                        <span>Global</span>
                        <svg class="icon icon--arrow-down icon--svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.406 7.828L12 12.422l4.594-4.594L18 9.234l-6 6-6-6z"></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                  </ul>
                </div> 
            </div>
          </div>
        </div>
      </header>
</template>

<script>
export default {


}
</script>

<style>
.grecaptcha-badge { visibility: hidden; }

.nav__item, .nav__submenu-item {
    color: #2E318A;
}


@media only screen and (min-width: 1024px){
    .header--sticky .logo-main img {
        max-width: 230%;
        }
    .header--sticky .nav--main {
        padding-left: 20.9375rem;
        }

    .logo-main {
        padding-top: 5px;
        padding-bottom: 10px;
    }

.nav__submenu-item__back {
    background-color: transparent;
}


}


</style>