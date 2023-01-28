# vue-boolzapp

## Nuove funzionalità
- scrivendo nel input della chat:  ".received: ", prima di un messaggio potrai far risultare il messaggio come ricevuto e non inviato da te. (Questo non comporterà all'invio automatico del messaggio del destinatario);
- Aggiunta di menu della chat nella lista contatti con la possibilità di eliminare la chat intera;
- Cliccando sulla scritta "Attiva notifiche desktop" che si trova nel pop-up delle notifiche, farà rimuovere il pop-up e far rimodellare la lista;
- Finchè input della chat resterà vuoto si vedrà il bottone del microfono, e quando inizierai a scrivere comparirà il bottone dell'invio , (resterà sempre la possibilità di inviare il messaggio tramite il tasto Invio, con l'aggiunta del button);
- Aggiunta funzione per far si che rimanga un solo menuMessage / menuChatList aperto contemporaneamente;
- Aggiunta menu-message-info per ogni messaggio


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