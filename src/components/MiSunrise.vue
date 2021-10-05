<template>
      <section class="section has-margin">
        <div class="wrapper wrapper--gutter">
          <section class="tracking-search tracking-search--horizontal">
            <h2 class="h3 tracking-search__title">
            <svg class="icon icon--tracking tracking-search__icon icon--svg hide show-landscape--inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <path d="M37.67 28.88a17.32 17.32 0 0 1-5.49 12.42 30.38 30.38 0 0 1-4.14-.7.78.78 0 1 0-.37 1.52c1 .24 1.93.41 2.85.55A17.24 17.24 0 0 1 20.3 46h-.08a14 14 0 0 0 1.34-.92.78.78 0 1 0-1-1.24 8.42 8.42 0 0 1-3.71 1.82 17.4 17.4 0 0 1-14-17v-.49a38 38 0 0 0 3.1 2.91.78.78 0 0 0 1-1.2 36.2 36.2 0 0 1-3.13-2.95.78.78 0 0 0-.9-.17A17.39 17.39 0 0 1 20.3 11.28h.45a12.83 12.83 0 0 1 1-1.59c-.48 0-1-.08-1.46-.08a19 19 0 1 0 12.6 33.22.78.78 0 0 0 .37-.34 19 19 0 0 0 6-13.87v-.69a12.84 12.84 0 0 1-1.59.95z"/>
              <path d="M24 41.69a.78.78 0 0 0 1.1-.1 37.59 37.59 0 0 0 2.87-4 .78.78 0 1 0-1.33-.83 35.82 35.82 0 0 1-2.75 3.83.78.78 0 0 0 .11 1.1z"/>
              <path d="M23.5 39.23c-1.45-.52-2.93-1.13-4.39-1.81a.78.78 0 0 0-.66 1.42c1.51.7 3 1.33 4.52 1.86a.78.78 0 0 0 .53-1.47zM10.85 32.73A.78.78 0 1 0 10 34c1.32.9 2.71 1.77 4.15 2.58a.78.78 0 1 0 .77-1.36c-1.43-.77-2.79-1.61-4.07-2.49zM50.71 34.8l-9.9-9.9a11.59 11.59 0 1 0-12.38 3.38h.06a11.57 11.57 0 0 0 2 .46c-.47 1.28-1 2.57-1.63 3.84a.78.78 0 1 0 1.41.68 44.94 44.94 0 0 0 1.86-4.41A11.53 11.53 0 0 0 39.68 26l9.9 9.9zM39.15 10.27a10 10 0 0 1 2.06 11.08 15.76 15.76 0 0 0-13-13.2 10 10 0 0 1 10.94 2.12zm-14.1 0c.19-.19.4-.37.6-.55h.07a14 14 0 0 1 13.87 14 .84.84 0 0 0 0 .1c-.15.18-.3.35-.47.52a10 10 0 0 1-9 2.71 22.5 22.5 0 0 0 1.45-6.46.9.9 0 0 0-1.8-.17 20.22 20.22 0 0 1-1.39 6.11 10 10 0 0 1-3.32-16.29z"/>
              <path d="M28.56 17.63a.78.78 0 0 0 1.11 0l1.15-1.15L32 17.63a.78.78 0 0 0 1.11-1.11l-1.15-1.15 1.15-1.15A.78.78 0 0 0 32 13.11l-1.15 1.15-1.15-1.15a.78.78 0 0 0-1.11 1.11l1.15 1.15-1.15 1.15a.78.78 0 0 0-.03 1.11z"/>
            </svg>
            Seguimiento rápido
            </h2>
              <div role="search" method="get" class="form form--tracking-search tracking-search__form">
                <input type="text" name="refNumber" placeholder="Numero de identificación" class="filter-item__field filter-item__text tracking-search__text">
                <input type="hidden" name="language_region" value="en_">
                <a href="https://eschenker.dbschenker.com/app/tracking-public/customer-search?language_region=en_" class="lk lk--default lk-effect " tabindex="" target="_blank" >
                <button class="btn btn--solid btn--default btn--pointer btn--full tracking-search__btn">
                Track
                </button>
                </a>
              </div>
              <ul class="list tracking-search__links">
                <li>
                  <a href="https://eschenker.dbschenker.com/app/tracking-public/customer-search?language_region=en_" class="lk lk--default lk-effect " tabindex="" target="_blank" >
                    <svg class="icon icon--arrow-right-thick icon--svg " viewBox="0 0 129 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M28.993 199.404l99.702-99.702L28.993 0 .709 28.285l71.418 71.417L.709 171.119z"/>
                    </svg>
                  <span>Segimiento por referencia</span>
                  </a>
                </li>
                <li>
                <a href="https://eschenker.dbschenker.com/app/launch-page/public?language_region=en-US_US" class="lk lk--default lk-effect " tabindex="" target="_blank" >
                  <svg class="icon icon--arrow-right-thick icon--svg " viewBox="0 0 129 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M28.993 199.404l99.702-99.702L28.993 0 .709 28.285l71.418 71.417L.709 171.119z"/>
                  </svg>
                  <span>ASeguimiento avanzado</span>
                </a>
                </li>
              </ul>
          </section>
        </div> 
      </section>  
</template>

<script>
export default {

}
</script>

<style>

</style>