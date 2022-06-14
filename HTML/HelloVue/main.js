let myData = {
    firstName
        : "Daniel"
    ,
    lastName
        : "Chung"
};
const App
    = Vue.createApp({
        data() {
            return myData
                ;
        }
    });
App.mount("#app");