let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
    imageSrc: [
        "asteroid.jpg",
        "fantasy.jpg",
        "space.jpg",
        "spaceship.jpg"
    ],
    productClasses:[
        {
            name:'Coach',
            price:125000,
            seatsAvailable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatsAvailable:6,
            earlyBird:true
        },
        {
            name:'First',
            price:430000,
            seatsAvailable:2,
            earlyBird:false
        }
    ],
    statusList:[
        " ",
        "Coach",
        "Business",
        "First0"
    ],
    h2ClassController:{
        centered:true,
        colorFont:false
    },
    pStyleController:{
        'margin-left':'50px',
        color:'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
        },
    imageAlt:"Photo from space"        
};
const app = Vue.createApp({
    data() {
        return pageData;
    }
});
app.mount("#app")