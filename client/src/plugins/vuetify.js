import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'
//import { preset } from 'vue-cli-plugin-vuetify-preset-shrine/preset'

Vue.use(Vuetify);



export default new Vuetify({
preset,
    // theme: {
    //     themes: {
    //     light: {
    //         primary: '#3f51b5',
    //         secondary: '#ffc107',
    //         accent: '#2196f3',
    //         error: '#f44336',
    //         warning: '#ffeb3b',
    //         info: '#00bcd4',
    //         success: '#4caf50'
    //         },
    //     },
    // },
  });
