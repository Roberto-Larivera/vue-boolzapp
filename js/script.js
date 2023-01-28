const {createApp} = Vue

createApp({
    data(){
        return{
            activePopUp: true,
            contactActive: 0,
            currentMessage: 0,
            newMessage: '',
            searchContact: '',
            provaVa: true,
            user:{
                name: 'Sofia',
                avatar: '_io',
                message: {
                    status: 'sent',
                    statusMenu: false,
                }
            },
            contacts: [
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
                            message: 'Ricordati di stendere i panni', 
                            status: 'sent'
                        },
                        { 
                            date: '10/01/2020 16:15:22', 
                            message: 'Tutto fatto!', 
                            status: 'received'
                        }
                ],
                }, { 
                    name: 'Fabio', 
                    avatar: '_2', 
                    visible: true, 
                    messages: [
                        { 
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
                            status: 'sent'
                        }
                ],
                },
                { 
                    name: 'Samuele', 
                    avatar: '_3', 
                    visible: true, 
                    messages: [
                        { 
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
                    name: 'Alessandro B.', 
                    avatar: '_4',
                    visible: true, 
                    messages: [
                        { 
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
                { 
                    name: 'Alessandro L.', 
                    avatar: '_5', 
                    visible: true, 
                    messages: [
                        { 
                            date: '10/01/2020 15:30:55', 
                            message: 'Ricordati di chiamare la nonna', 
                            status: 'sent'
                        },
                        { 
                            date: '10/01/2020 15:50:00', 
                            message: 'Va bene, stasera la sento', 
                            status: 'received'
                        }
                ],
                },
                { 
                    name: 'Claudia', 
                    avatar: '_6', 
                    visible: true, 
                    messages: [
                        { 
                            date: '10/01/2020 15:30:55', 
                            message: 'Ciao Claudia, hai novità?', 
                            status: 'sent'
                        },
                        { 
                            date: '10/01/2020 15:50:00', 
                            message: 'Non ancora', 
                            status: 'received'
                        },
                        { 
                            date: '10/01/2020 15:51:00', 
                            message: 'Nessuna nuova, buona nuova', 
                            status: 'sent'
                        }
                ],
                },
                {
                name: 'Federico', 
                avatar: '_7', 
                visible: true, 
                messages: [
                        { 
                            date: '10/01/2020 15:30:55', 
                            message: 'Fai gli auguri a Martina che è il suo compleanno!', 
                            status: 'sent'
                        },
                        { 
                            date: '10/01/2020 15:50:00', 
                            message: 'Grazie per avermelo ricordato, le scrivo subito!', 
                            status: 'received'
                        }
                ],
                },
                { 
                    name: 'Davide', 
                    avatar: '_8', 
                    visible: true, 
                    messages: [
                        { 
                            date: '10/01/2020 15:30:55', 
                            message: 'Ciao, andiamo a mangiare la pizza stasera?', 
                            status: 'received'
                        },
                        { 
                            date: '10/01/2020 15:50:00', 
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!', 
                            status: 'sent'
                        },
                        { 
                            date: '10/01/2020 15:51:00', 
                            message: 'OK!!', 
                            status: 'received'
                        }
                ],
                }
            ],
            

        }
    },
    methods: {
        sendNewMessage () {
            if(this.newMessage != ''){
                const newDate = this.newDateMessage()
                this.contacts[this.contactActive].messages.push({
                    date: newDate,
                    message: this.newMessage,
                    status: this.user.message.status,
                    // statusMenu: this.user.message.statusMenu,
                })
                this.newMessage = '';
                setTimeout(() => {
                    this.sendAutoReceived ()
                }, 1000);

            }
        },
        sendAutoReceived (){    
            const newDate = this.newDateMessage()
            this.contacts[this.contactActive].messages.push({
                date: newDate,
                message: `Ciao ${this.user.name}, è bello sentirti, tutto ok!`,
                status: 'received',
                // statusMenu: false,
            })
        },
        searchFilter (){
            this.contacts.forEach((element,i,arr) => {
                
                this.contacts[i].visible = false;
                if(this.contacts[i].name.toLowerCase().includes(this.searchContact.toLowerCase())){
                    this.contacts[i].visible = true;
                }
            });
        },
        newDateMessage(){
            const dt = luxon.DateTime;
                const newDate = dt.fromISO(dt.now()).toFormat('dd/LL/yyyy HH:mm:ss');
                //console.log(newDate, typeof newDate)
                return newDate
                // const dtMess = dt.now().toLocaleString(dt.TIME_24_SIMPLE);
                // console.log(dtMess, typeof dtMess)
                // console.log(dt.now().toLocaleString(dt.TIME_24_SIMPLE))
        },
        newDateMessageSimple(index){
            const dt = luxon.DateTime;
            //console.log(index, typeof index)

            const newTime = dt.fromFormat(index,'dd/LL/yyyy HH:mm:ss').toLocaleString(dt.TIME_24_SIMPLE);
            //const newTime = dt.fromFormat(index).toFormat('dd/LL/yyyy ');
            //console.log(newTime, typeof newTime)
            return newTime
                // const dtMess = dt.now().toLocaleString(dt.TIME_24_SIMPLE);
                // console.log(dtMess, typeof dtMess)
                // console.log(dt.now().toLocaleString(dt.TIME_24_SIMPLE))
        },
        lastMessageTimeReceived(index){
            let txtTime;
            for (let i = this.contacts[index].messages.length - 1; i >= 0; i--) {
                const element = this.contacts[index].messages[i];
                //console.log(element.status);
                if(element.status == 'received'){
                    //console.log(element.status, 'sono entrato');
                    const excTime = this.contacts[index].messages[i].date;
                    txtTime = this.newDateMessageSimple(excTime)
                    return txtTime
                }
                
            }
            return '00:00'
        },
        lastMessageTime(index){
            let txtTime;
            for (let i = this.contacts[index].messages.length - 1; i >= 0; i--) {
                const element = this.contacts[index].messages[i];
                //console.log(element.status);
                if(element){
                    //console.log(element.status, 'sono entrato');
                    const excTime = this.contacts[index].messages[i].date;
                    txtTime = this.newDateMessageSimple(excTime)
                    return txtTime
                }
                
            }
            return '00:00'
        },
        lastMessageReceived(index){
            //let txtTime;
            for (let i = this.contacts[index].messages.length - 1; i >= 0; i--) {
                const element = this.contacts[index].messages[i];
                //console.log(element.status);
                if(element.status == 'received'){
                    //console.log(element.status, 'sono entrato');
                    const excTime = this.contacts[index].messages[i].message;
                    //txtTime = this.newDateMessageSimple(excTime)
                    //return txtTime
                    return excTime
                }
                
            }
            return 'Vuoto'
        },
        lastMessage(index){
            //let txtTime;
            for (let i = this.contacts[index].messages.length - 1; i >= 0; i--) {
                const element = this.contacts[index].messages[i];
                //console.log(element.status);
                if(element){
                    //console.log(element.status, 'sono entrato');
                    const excTime = this.contacts[index].messages[i].message;
                    //txtTime = this.newDateMessageSimple(excTime)
                    //return txtTime
                    return excTime
                }
                
            }
            return 'Vuoto'
        },
        menuMesssage(){
            for(let i = 0 ; this.contacts[i].messages.lenght ; i++){
                this.contacts[i].messages[i].statusMenu = false;
            }
        },
        menuMesssageOpen(item, x){
            console.log('this.currentMessage',this.currentMessage)
            console.log('x', x)
            console.log('item', item)
            console.log('this.currentMessage',this.currentMessage)
            item.statusMenu = !item.statusMenu
            this.contacts[this.contactActive].messages[this.currentMessage].statusMenu = false;
            this.currentMessage = false;
            this.currentMessage = x ;
            
        },
        deleteMessage(x,index){
            this.contacts[x].messages.splice(index,1)
        }

    },
    mounted() {
        this.menuMesssage()
    },

}).mount('#app');