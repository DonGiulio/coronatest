const  categories = [
  {
    "id": 1,
    "category": "Condizioni",
    "answers": [
      {
        "id": 1,
        "min_points": 0,
        "max_points": 30,
        "title": "Basso rischio",
        "color": "info",
        "descrizione": "Complimenti i tuoi sintomi sono poco compatibili con il covid-19, questo non garantisce al 100% che tu non l'abbia o che possa stare tranquillo. Il virus si presenta anche in maniera asintomatica. Se dubiti di qeusto risultato ti incoraggiamo a contattare il tuo servizio sanitario per ulteriori verifiche"
      },
      {
        "id": 2,
        "min_points": 31,
        "max_points": 60,
        "title": "Medio rischio",
        "color": "warning",
        "descrizione": "Attenzione, i tuoi sintomi corrispondono a una situazione incerta, per cui forse dovresti fare ulteriori verifiche sul tuo stato di salute. Non c'è da avere paura. La raccomandazione è di non uscire (nel caso tu fossi infetto rischieresti di contagiare altre persone) e di contattare il tuo servizio sanitario per ulteriori verifiche"
      },
      {
        "id": 3,
        "min_points": 61,
        "max_points": 100,
        "title": "Alto rischio",
        "color": "danger",
        "descrizione": "Attenzione, il risultato del test indica un'alta probabilità che tu sia infetto. Non c'è da avere paura, la stragrande maggioranza degli infetti non corre alcun pericolo grave e se la cava con qualche giorno di riposo, come in una qualsiasi influenza. In questa fase è fondamentale però che tu rimanga a casa, e che limiti i contatti con altre persone, per non rischiare di contagiarle. Ti consigliamo di avvertire il servizio sanitario per comunicargli i sintomi. Fai attenzione ai tuoi sintomi, se dovessero aggravarsi contatta il pronto soccorso (per telefono, senza uscire di casa) e attieniti alle loro disposizioni"
      }
    ]
  },
  {
    "id": 2,
    "category": "Rischio",
    "answers": [
      {
        "id": 1,
        "min_points": 0,
        "max_points": 30,
        "title": "Basso rischio",
        "color": "info",
        "descrizione": "Complimenti le tue abitudini, stile di vita e il contesto in cui vivi ti espone a un basso rischio di contagio, per cui è improbabile (ma non impossibile) che tu abbia contratto o contragga il virus nel futuro prossimo. Non c'è da abbassare la guardia però, in quanto la situazione può cambiare rapidamente e senza preavviso, in particolare pure se tu mantenessi le tue abitudini, nel tuo vicinato potrebbero aumentare i casi, esponendoti a maggiori rischi di ammalarti."
      },
      {
        "id": 2,
        "min_points": 31,
        "max_points": 60,
        "title": "Medio rischio",
        "color": "warning",
        "descrizione": "Attenzione, Le tue abitudini, stile di vita e il contesto in cui vivi ti espongono a un rischio medio, per cui è difficile prevedere se tu abbia o meno già contratto il virus, ma nel caso in cui non inizi a prendere maggiori precauzioni è probabile che tu lo contragga presto. Non c'è da temere però, nella maggior parte degli infetti la malattia ha un decorso come una normale influenza, mentre solo in una certa percentuale di contagiati si aggrava e diventa pericolosa. Perciò è importante che tu protegga te stesso in modo da non contrarlo, e nel caso tu l'abbia già protegga gli altri per non essere responsabile degli eventuali rischi a cui li esporresti"
      },
      {
        "id": 3,
        "min_points": 61,
        "max_points": 100,
        "title": "Alto rischio",
        "color": "danger",
        "descrizione": "Attenzione, il risultato del test indica un'alta probabilità che tu sia infetto, o se non lo sei ancora rischi fortemente di infettarti presto. Non c'è da temere però, nella maggior parte degli infetti la malattia ha un decorso come una normale influenza, mentre solo in una certa percentuale di contagiati si aggrava e diventa pericolosa. Devi cambiare le tue abitudini aumentando la cura che prendi nel proteggerti e nel proteggere chi ti sta attorno."
      }
    ]
  },
  {
    "id": 3,
    "category": "Gravità",
    "answers": [
      {
        "id": 1,
        "min_points": 0,
        "max_points": 30,
        "title": "Basso rischio",
        "color": "info",
        "descrizione": "Le tue condizioni fisiche e stato di salute generale indica che è improbabile che tu sviluppi conseguenze gravi dal covid-19, questa è una buona notizia, non c'è da abbassare la guardia ci sono stati anche casi gravi in persone in perfetta salute, per cui è bene non abbassare la guardia, anche in considerazione che potresti diventare responsabile del contagio di persone non così fortunate."
      },
      {
        "id": 2,
        "min_points": 31,
        "max_points": 60,
        "title": "Medio rischio",
        "color": "warning",
        "descrizione": "Attenzione, il risultato del test indica che sei a medio rischio di sviluppare condizioni gravi dal virus, non sei completamente a rischio di avere un decorso grave, ma devi comunque stare attento e prendere le tue precauzioni, ci sono stati casi gravi anche in persone in perfetta salute, inoltre tutti in contagiati sono a loro volta contagiosi e rischiano di far ammalare altre persone, in modo grave"
      },
      {
        "id": 3,
        "min_points": 61,
        "max_points": 100,
        "title": "Alto rischio",
        "color": "danger",
        "descrizione": "Attenzione, il risultato del test indica un'alta probabilità che se hai o se contraessi il virus avresti gravi conseguenze, se non l'hai già contratto ti invitiamo a prendere estrema cura nelle tue precauzioni, in modo da limitare il rischio di contagio. Nel caso tu sia infetto ti invitiamo ad avvertire il tuo servizio sanitario specificando le tue condizioni e seguendo le loro indicazioni."
      }
    ]
  }

]

export default categories;