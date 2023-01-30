# vue-boolzapp

## Nuove funzionalità
- scrivendo nel input della chat:  ".received: ", prima di un messaggio potrai far risultare il messaggio come ricevuto e non inviato da te. (Questo non comporterà all'invio automatico del messaggio del destinatario);
- Aggiunta di menu della chat nella lista contatti con la possibilità di eliminare la chat intera;
- Cliccando sulla scritta "Attiva notifiche desktop" che si trova nel pop-up delle notifiche, farà rimuovere il pop-up e far rimodellare la lista;
- Finchè input della chat resterà vuoto si vedrà il bottone del microfono, e quando inizierai a scrivere comparirà il bottone dell'invio , (resterà sempre la possibilità di inviare il messaggio tramite il tasto Invio, con l'aggiunta del button);
- Aggiunta funzione per far si che rimanga un solo menuMessage / menuChatList aperto contemporaneamente;
- Aggiunta menu-message-info per ogni messaggio;
- Eliminazione della chat corrente nella lista aggiunta nel menu_chat (control-user);
- Eliminazione di tutte le chat esistenti dentro menu_chat (control-user);
- Aggiunta ricerca del messaggio dentro la body-chat tramite icona;
- Funzione che calcola l'ultimo accesso tramite l'ultimo messaggio ricevuto in (anno corrente (allora si vedrà solo Mese e giorno mmTEXT - gg) o anni passati(si vedrà la data intera gg/mm/aaaa)), in che mese si trova, in quale settimana si trova e in caso della stessa settimana comparirà solo il giorno della settimana, in caso che è il giorno corrente o precedente si leggerà solo (oggi/ieri). Con la possibilità di poter vedere in qualsiasi periodo (descritto proma) l'orario dell'ultimo accesso.

Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)