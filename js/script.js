const {createApp} = Vue

createApp({
    data(){
        return{
            activePopUp: true,
            contactActive: 0,
            currentMessage: 0,
            currentContact: 0,
            newMessage: '',
            searchContact: '',
            searchMessage: '',
            searchMessageBox: false,
            newContact: false,
            emptyList: false,
            menuChat: false,
            menuChatUser: false,
            user:{
                // name: 'Sofia',
                name: 'Roberto',
                // avatar: '_io',
                avatar: '_2',
                message: {
                    status: 'sent',
                    statusMenu: false,
                }
            },
            newContactChat:{
                name: null,
                avatar: null,
                visible: true,
                messages: []
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
                        },
                        { 
                            date: '29/01/2023 18:15:22', 
                            message: 'Prova ad usare ".received:" e vedi cosa succede!', 
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
                        },
                        { 
                            date: '29/01/2023 16:35:00', 
                            message: 'Stasera ci vediamo?', 
                            status: 'received'
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
                        },
                        { 
                            date: '30/01/2023 10:10:40', 
                            message: 'La Marianna va di nuovo in campagna', 
                            status: 'received'
                        },
                        { 
                            date: '30/01/2023 10:20:10', 
                            message: 'Sicuro di non aver sbagliato di nuovo chat?', 
                            status: 'sent'
                        },
                        { 
                            date: '30/01/2023 10:30:40', 
                            message: 'Ops', 
                            status: 'received'
                        },
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
                if(this.newMessage.includes('.received:')){
                    const newDate = this.newDateMessage()
                    this.contacts[this.contactActive].messages.push({
                        date: newDate,
                        message: this.newMessage.replace(new RegExp(".received:"), ""),
                        status: 'received',
                        // statusMenu: this.user.message.statusMenu,
                    })
                    this.newMessage = '';
                }else{
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

            }
        },
        // sendNewMessage () {
        //     if(this.newMessage != ''){
        //         const newDate = this.newDateMessage()
        //         this.contacts[this.contactActive].messages.push({
        //             date: newDate,
        //             message: this.newMessage,
        //             status: this.user.message.status,
        //             // statusMenu: this.user.message.statusMenu,
        //         })
        //         this.newMessage = '';
        //         setTimeout(() => {
        //             this.sendAutoReceived ()
        //         }, 1000);

        //     }
        // },
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
        lastMessageTimeReceivedDay(index){
            const dt = luxon.DateTime;
            
            let txtTime;
            console.log(txtTime)
            for (let i = this.contacts[index].messages.length - 1; i >= 0; i--) {
                const element = this.contacts[index].messages[i];
                console.log('element',element)
                if(element.status == 'received'){
                    const txtDay = dt.fromFormat(this.contacts[index].messages[i].date,'dd/LL/yyyy HH:mm:ss').setLocale('it').toFormat('cccc');
                    const txtD = dt.fromFormat(this.contacts[index].messages[i].date,'dd/LL/yyyy HH:mm:ss').setLocale('it').toFormat('d');
                    const txtMon = dt.fromFormat(this.contacts[index].messages[i].date,'dd/LL/yyyy HH:mm:ss').setLocale('it').toFormat('MMMM');
                    const txtYear = dt.fromFormat(this.contacts[index].messages[i].date,'dd/LL/yyyy HH:mm:ss').setLocale('it').toFormat('yyyy');
                    const txtSet = dt.fromFormat(this.contacts[index].messages[i].date,'dd/LL/yyyy HH:mm:ss').setLocale('it').toFormat('WW');
                    const txtYearMonDay = dt.fromFormat(this.contacts[index].messages[i].date,'dd/LL/yyyy HH:mm:ss').setLocale('it').toFormat('dd/MM/yy');
                    const txtMonOnlin = dt.fromISO(dt.now()).setLocale('it').toFormat('MMMM');
                    const txtMonOnlinDay = dt.fromISO(dt.now()).setLocale('it').toFormat('cccc');
                    const txtMonOnlinD = dt.fromISO(dt.now()).setLocale('it').toFormat('d');
                    const txtMonOnlinSet = dt.fromISO(dt.now()).setLocale('it').toFormat('WW');
                    const txtMonOnlinYear = dt.fromISO(dt.now()).setLocale('it').toFormat('yyyy');
                    if(txtYear == txtMonOnlinYear){
                        if(txtMonOnlin == txtMon){
                            if(txtSet == txtMonOnlinSet){
                                if(txtDay == txtMonOnlinDay){
                                    txtTime = 'Oggi'
                                }else if(txtD == (txtMonOnlinD - 1) ){
                                    txtTime = 'Ieri'
                                }else{                                 
                                    txtTime = (txtDay.charAt(0).toUpperCase() + txtDay.slice(1).toLowerCase())
                                }
                            }else{
                                txtTime = (txtDay.charAt(0).toUpperCase() + txtDay.slice(1).toLowerCase()) + ' - ' + txtD;
                            }
                        }
                        else{
                            txtTime = 'il '+(txtD) + ' '+(txtMon.charAt(0).toUpperCase() + txtMon.slice(1).toLowerCase())
                            
                        }
                    }else{
                        txtTime = 'il '+(txtYearMonDay)

                    }
                    console.log(txtMonOnlinDay,txtMonOnlinYear)
                    //txtTime = this.newDateMessageSimple(excTime)
                    return txtTime
                }
                
            }
            const newDay = dt.fromISO(dt.now()).toFormat('cccc');
            return newDay
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
                this.contacts[i].messages[i].statusMenuInfo = false;
                this.contacts[i].statusMenuList = false;
                this.contacts[i].messages[i].statusSearch = false;
            }
        },
        menuMesssageOpen(item, x){
            if(this.contacts[this.contactActive].messages[this.currentMessage].statusMenu == true && this.contacts[this.contactActive].messages[this.currentMessage] != item){
                this.contacts[this.contactActive].messages[this.currentMessage].statusMenu = false;
                item.statusMenu = !item.statusMenu
            }
            else if(this.contacts[this.contactActive].messages[this.currentMessage] == item){
                item.statusMenu = !item.statusMenu
            }
            else{
                item.statusMenu = !item.statusMenu
            }
            this.currentMessage = x ;
            
        },
        deleteMessage(x,index){
            this.contacts[x].messages.splice(index,1);
            this.currentMessage = 0;
        },
        menuMesssageOpenList(item, x){
            if(this.contacts[this.currentContact].statusMenuList == true && this.contacts[this.currentContact] != item){
                this.contacts[this.currentContact].statusMenuList = false;
                item.statusMenuList = !item.statusMenuList
            }
            else if(this.contacts[this.currentContact] == item){
                item.statusMenuList = !item.statusMenuList
            }
            else{
                item.statusMenuList = !item.statusMenuList
            }
            this.currentContact = x ;
            
        },
        deleteChatList(index){
            this.menuChat = false
            if(this.contacts.length == 1){
                //console.log('ciaoBello')
                this.emptyList = true;
            }
            else if(this.contactActive == this.contacts.length -1){
                this.emptyList = true;
                //console.log('dentro',this.contactActive)
            }
            this.contacts.splice(index,1);
            this.currentContact = 0;
            this.contactActive = 0;
            //console.log('fuori',this.contactActive)

           
            
        },
        openMenuInfo(item, index){
            this.menuMesssageOpen(item, index)
            item.statusMenuInfo = !item.statusMenuInfo
        },
        newChatAddList(){
            // this.contacts.push({             // utilizzo .unshift per pushare all'inizio dell'array
            if(this.newContactChat.name != "" || this.newContactChat.name != null || this.newContactChat.name != undefined){
                //console.log('entro qui,', this.newContactChat.name)
                this.contacts.unshift({
                    name: this.newContactChat.name,
                    avatar: this.newContactChat.avatar,
                    visible: true,
                    messages: []
                })
                this.menuChatUser = false;
                this.newContactChat = { 
                    name: null,
                    avatar: null,
                    visible: true,
                    messages: []
                };
            }
        },
        deleteAllChats(){
            this.emptyList = true;
            this.menuChat = false
            this.contacts = ['']
           
            
        },
        searchFilterMessage (){
            if(this.searchMessage == ''){
                this.contacts[this.contactActive].messages.forEach((element,i,arr) => {
                    
                    this.contacts[this.contactActive].messages[i].statusSearch = false;
    
                });
            }else{
                this.contacts[this.contactActive].messages.forEach((element,i,arr) => {
                    
                    this.contacts[this.contactActive].messages[i].statusSearch = false;
                    if(this.contacts[this.contactActive].messages[i].message.toLowerCase().includes(this.searchMessage.toLowerCase())){
                        this.contacts[this.contactActive].messages[i].statusSearch = true;
                    }
                });

            }
        },
    },
    mounted() {
        this.menuMesssage()
    },

}).mount('#app');