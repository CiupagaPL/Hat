/* Copyright 2024 CiupagaPL */
const { Client, GatewayIntentBits, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { token, cid, gid } = require('./config.json');

/* Setup bot */
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent ] });
const rest = new REST({ version: '10' }).setToken(token);

/* Create commands */
const commands = [{
  name: 'pytanie',
  description: 'Zadaj pytanie, na które ci odpowiem najbardziej metaforycznym sposobem',
  options: [{
    name: 'pytanie',
    description: 'Słucham',
    type: 3,
    required: true
  }]
}];

/* Start bot */
client.on('ready', () => console.log('Hello World!'));

/* Handle events */
client.on('interactionCreate', (interaction) => {
  /* Generate current answer */
  randomAnswer = Math.floor(Math.random() * 41);
  switch(randomAnswer) {
    case 0:
      answer = 'Wyczytaj to z moich rysów kapelusza';
      break;
    case 1:
      answer = 'Idź na dwór, popatrz w niebo kilka minut, po tym wróć i zapytaj się ponownie';
      break;
    case 2:
      answer = 'Ładna dziś pogoda, co nie?';
      break;
    case 3:
      answer = 'Musisz pamiętać, że Bydgoszcz jak i Zakrzewko powstały z tego samego meteorytu';
      break;
    case 4:
      answer = 'Mewy mają sentyment do bycia głośnymi, chociaż wielce to szanuję';
      break;
    case 5:
      answer = 'NT John 9:25';
      break;
    case 6:
      answer = 'TNO ma faktycznie piękną fabułę, którą można rozwijać latami';
      break;
    case 7:
      answer = 'Mimo wszystko uważam że TWR zasługuje również na duży szacunek';
      break;
    case 8:
      answer = 'Zauważyłem, że kwiaty na parapecie są w stanie dać optymistycznego kopa motywacji';
      break;
    case 9:
      answer = 'Komunizm to nadal czyste zło, które powinno zostać usunięte raz na zawsze';
      break;
    case 10:
      answer = 'Formy oligarchizmu i autorytaryzmu również nie są dobre dla społeczeństwa';
      break;
    case 11:
      answer = 'Socjalizm na szerszą skalę to to samo co komunizm';
      break;
    case 12:
      answer = 'Góry z natury są piękne, ciekawe jest jednak to, że łatwiej je opuszcza niż się na nie wschodzi';
      break;
    case 13:
      answer = 'Kaczki są zwierzętami spokojnymi, jednak rozumiem ich czasowe poddenerwowanie';
      break;
    case 14:
      answer = 'Byłem kiedyś koroną, zostałem kapeluszem... I na lepsze';
      break;
    case 15:
      answer = 'Wolę nazywać platformę Elona Twitterem, nie mylić z Xorg';
      break;
    case 16:
      answer = 'Void linux wg. mnie ma o wiele lepsze predyspozycje od Archa';
      break;
    case 17:
      answer = 'Rozumiem twoją opinię, ale zauważ że młody wiek jest również takim złotym wiekiem';
      break;
    case 18:
      answer = 'Za mych czasów powiadali Bóg, Honor, Ojczyzna; Ja wam powiadam łączy nas Honor i przy nim zostańmy';
      break;
    case 19:
      answer = 'Trochę innym tonem, zrozumiano?';
      break;
    case 20:
      answer = 'Melduje się, i sam nie wiem do czego';
      break;
    case 21:
      answer = 'Mówi się by nie kupować rzeczy, które i tak wyrzucimy... Każdy zapomina o workach na śmieci';
      break;
    case 22:
      answer = 'Tak na prawdę na temperaturę narzeka się całym rokiem';
      break;
    case 23:
      answer = 'Sarny to szybkie i zwinne zwierzęta, mają tylko jeden minus - takich łatwo wpakować w pułapkę';
      break;
    case 24:
      answer = 'Grad ma sendencje do padania latem';
      break;
    case 25:
      answer = 'Ogień może być gorący';
      break;
    case 26:
      answer = 'Powiadają źródło ognia, materiał łatwopalny i tlen. Wg. mnie wystarczy styrta';
      break;
    case 27:
      answer = 'Łowienie ryb spełnia człowieka... Tak samo jak oglądanie kaczek';
      break;
    case 28:
      answer = 'Chciałbym zauważyć, że teoretyczny rozpad Jugosławi rozpoczął się w 1992 roku, a praktyczny - znacznie wcześniej';
      break;
    case 29:
      answer = 'Najpierw ty mi odpowiedz na pytanie - Co się dzieje z gołębiami w nocy?';
      break;
    case 30:
      answer = 'A może ty byś mi powiedział dlaczego trawa jest zielona?';
      break;
    case 31:
      answer = 'To chyba sobie jednak poczekasz na Ciupagę';
      break;
    case 32:
      answer = 'Poczekam sobie tutaj popijając herbatkę przy okazji';
      break;
    case 33:
      answer = 'Kawa jest często za mocna, słyszałem że trzeba pić kilka dziennie, by picie jej było zdrowe';
      break;
    case 34:
      answer = 'Dlaczego gumy tak bardzo wyręczają nas? No właśnie';
      break;
    case 35:
      answer = 'Sam się nad tym zastanów';
      break;
    case 36:
      answer = 'W niektórych krajach cola może być tańsza od wody';
      break;
    case 37:
      answer = 'Idź sobie powtórz lepiej daty historyczne';
      break;
    case 38:
      answer = 'Mógłbyś zapytać kiedy indziej? Jestem zmęczony';
      break;
    case 39:
      answer = 'Nadal uważam że Casio Ca-53W to najlepszy zegarek wszechczasów';
      break;
    case 40:
      answer = 'Canon Powershot A480 był świetnym, jest świetnym i będzie świetnym aparatem tego wieku';
      break;
  }

  if(interaction.isChatInputCommand()) {
    /* Reply */
    message = interaction.options.get('pytanie').value;
    interaction.reply('**Pytanie:** ' + message + ' **Szczera reakcja:** ' + answer);
    console.log("Answered to someone");
  }
});

/* Setup commands */
async function setup(fine = true) {
  try {
    /* Write message */
    console.log('Starting commands.');
    /* Add commands */
    await rest.put(Routes.applicationGuildCommands(cid, gid), {
      body: commands
    });

    /* Set token */
    client.login(token);
  }
  catch(error) {
    /* Write error message */
    console.log(error);
    console.log('Exited unsuccesfully!');
    fine = false;
  }
  /* Write succesfull message */
  if(fine) {
    console.log('Exited succesfully!');
  }
}

/* Function loop */
setup();
