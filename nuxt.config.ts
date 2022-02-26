import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    head: {
        script: [
          {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
            'data-ad-client': 'ca-pub-################',
            async: true
          }
        ]
    }, 
    
    typescript: {
        shim: false
    }     
})
