import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    head: {
        script: [
          {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
            'data-ad-client': 'ca-pub-3024573869166354',
            async: true
          }
        ]
    }, 

    typescript: {
        shim: false
    }     
})
