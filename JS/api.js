const { createApp } = Vue

createApp({
    data() {
        return {

            url1: 'https://api.openweathermap.org/data/2.5/weather?lat=-25.69&lon=-54.43&appid=5b0054371b60e8fad3ed2ce5041dd7e1&lang=sp&units=metric',
            clima1: {},

            url2: 'https://api.openweathermap.org/data/2.5/weather?lat=-27.25&lon=-55.53&appid=f463b9d96bfd51c7ec71f72765c27414&lang=sp&units=metric',
            clima2: {},

            url3: 'https://api.openweathermap.org/data/2.5/weather?lat=-27.25&lon=-54.26&appid=f463b9d96bfd51c7ec71f72765c27414&lang=sp&units=metric',
            clima3: {}


        }
    },
    methods: {
        fetchData(url1) {

            fetch(url1)
                .then(response => response.json())
                .then(data => {
                    this.clima1 = data
                }
                )

        },

        fetchData2(url2) {

            fetch(url2)
                .then(response => response.json())
                .then(data => {
                    this.clima2 = data
                }
                )

        },

        fetchData3(url3) {

            fetch(url3)
                .then(response => response.json())
                .then(data => {
                    this.clima3 = data
                }
                )

        }
    },
    created() {

        this.fetchData(this.url1)
        this.fetchData2(this.url2)
        this.fetchData3(this.url3)

    }


}).mount('#app1');