const app = Vue.createApp({
    data(){
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85',
        }
    },
    methods: {
        async getUser(){
            const response = await fetch('https://randomuser.me/api');
            const { results } = await response.json();

            this.firstName = results[0].name.firstName,
            this.lastName = results[0].name.lastName,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')