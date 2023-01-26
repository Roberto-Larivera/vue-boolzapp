const {createApp} = Vue

createApp({
    data(){
        return{
            contactActive : 0,
            newMessage : '',
            searchContact: '',
            provaVa: true,
            contacts : [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                    
                    // newMessage : {
                    //     data: '10/01/2020 16:15:22',
                    //     message: '',
                    //     status: 'sent'
                    // }
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ] ,
        }
    },
    methods: {
        sendNewMessage () {
            this.contacts[this.contactActive].messages.push({
                date: '10/01/2020 15:30:55',
                message: this.newMessage,
                status: 'sent' 
            })
            this.newMessage = '';
            setTimeout(() => {
                this.sendAutoReceived ()
            }, 1000);
        },
        sendAutoReceived (){
            this.contacts[this.contactActive].messages.push({
                date: '10/01/2020 15:30:55',
                message: `Ciao Sofia , tutto ok!`,
                status: 'received' 
            })
        },
        searchFilter (){
            this.contacts.forEach((element,i,arr) => {
                
                this.contacts[i].visible = false;
                if(this.contacts[i].name.toLowerCase().includes(this.searchContact.toLowerCase())){
                    this.contacts[i].visible = true;
                }
            });
            console.log(this.contacts);
        },
    },
    mounted() {
    },

}).mount('#app');