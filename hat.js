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
  name: 'hat',
  description: 'Zadaj pytanie, na które ci odpowiem najbardziej fantazyjnym i kulturalnym sposobem jakim się da',
  options: [{
    name: 'pytanie',
    description: 'Wpisz zawartość pytania tutaj',
    type: 3,
    required: true
  }]
}];

/* Start bot */
client.on('ready', () => console.log('Hello World!'));

/* Handle events */
client.on('interactionCreate', (interaction) => {
  /* Generate current answer */
  randomAnswer = Math.floor(Math.random() * 80);
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
      answer = 'Jeśli bolą cię oczy od słońca, po prostu nie używaj komputera tak długo';
      break;
    case 4:
      answer = 'Mewy mają sentyment do bycia głośnymi, chociaż wielce to szanuję';
      break;
    case 5:
      answer = 'NT John 9:25';
      break;
    case 6:
      answer = 'TNO ma tragiczną fabułę, która pokazuje jednak że wszystko prowadzi do światła';
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
      answer = 'Byłem kiedyś koroną, zostałem kapeluszem... I dobrze';
      break;
    case 15:
      answer = 'Wolę nazywać platformę Elona Twitterem, X myli się ze zbyt wieloma rzeczami';
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
      answer = 'Na świecie jest więcej drzew niż gwiazd, jednak nakład na drzewa jest coraz większy i niebawem może się to zmienić';
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
      answer = 'Dlaczego gumy tak bardzo wyręczają nas? Od opon do żucia? No właśnie';
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
      answer = 'Mógłbyś zapytać kiedy indziej? Każdy się męczy, nawet ja';
      break;
    case 39:
      answer = 'Nadal uważam że Casio Ca-53W to najlepszy zegarek wszechczasów';
      break;
    case 40:
      answer = 'Canon Powershot A480 był świetnym, jest świetnym i będzie świetnym aparatem tego wieku';
      break;
    case 41:
      answer = 'Zapytałbyś się lepiej twoich rodziców, oni wiedzą lepiej';
      break;
    case 42:
      answer = 'Nawet jeżeli kiedykolwiek zagrożenie AI istniało to zostało ono dawno wyeleminowane przez naszą głupotę';
      break;
    case 43:
      answer = 'Kasztany i brązowe liście opisują całą jesień';
      break;
    case 44:
      answer = 'Zdajesz sobie sprawę z tego co mnie teraz zapytałeś, co nie?';
      break;
    case 45:
      answer = 'W takich sprawach zwróć się do mojego prawnika';
      break;
    case 46:
      answer = 'Z takimi głupotami i wymysłami prosze się do mnie nie zwracać';
      break;
    case 47:
      answer = 'Propaganda, propaganda i jeszcze raz propaganda!';
      break;
    case 48:
      answer = 'Zauważyłem, że polityka zależy od czasu - raz dominują ją prawacy, raz lewacy';
      break;
    case 49:
      answer = 'Od zawsze zastanawiałem się dlaczego plastikowe kaczki wydają taki dźwięk, może ty znasz odpowiedź?';
      break;
    case 50:
      answer = 'Nie jestem jakimś jasnowidzem czy wróżbitą';
      break;
    case 51:
      answer = 'Zauważyłem, że o wiele więcej osób wlewa mleko na płatki niż dodaje płatki do mleka';
      break;
    case 52:
      answer = 'Szanuję centrum wszystkiego, chociaż taka neutralność potrafi się źle skończyć';
      break;
    case 53:
      answer = 'Albion Online to sandbox MMORPG, w którym to Ty piszesz własną historię, zamiast podążać wytyczoną ścieżką';
      break;
    case 54:
      answer = 'Święta krowo, czyżby to nawiązanie do kultowego moda do hoi4 o nazwie The New Order!?';
      break;
    case 55:
      answer = 'Kocham kasztany całym swoim sercem i nic tego nie zmieni';
      break;
    case 56:
      answer = 'Nie ważne jakiej muzyki słuchasz, ważne że masz słuch';
      break;
    case 57:
      answer = 'Ok Google';
      break;
    case 58:
      answer = 'Hey Siri';
      break;
    case 59:
      answer = 'Wygoogluj to sobie cwaniaczku';
      break;
    case 60:
      answer = 'Trochę się zamuliłem, nie wiem czy od połączenia czy ilości pytań';
      break;
    case 61:
      answer = 'Wiecie dobrze że kocham gry strategiczne i historyczne tak samo jak i te spokojniejsze i komediowe, cnie?';
      break;
    case 62:
      answer = 'Miło pana poznać, lecz może nie tak szybko z tymi pytaniami';
      break;
    case 63:
      answer = 'Ale bez takich żarcików, dobrze?';
      break;
    case 64:
      answer = 'Trochę kultury młody człowieku, zrozumiano?';
      break;
    case 65:
      answer = 'Lubię czasem popatrzeć na deszcz i posłuchać jego pięknych dźwięków';
      break;
    case 66:
      answer = 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie, ile cię trzeba cenić, ten tylko się dowie, kto Cię stracił!';
      break;
    case 67:
      answer = 'Powiem ci krótko - Hańba!';
      break;
    case 68:
      answer = 'Jakim cudem jedzenie różnorakich warzyw jest zdrowe, a zjedzenie ich z bułką zwaną burgerem już nie?';
      break;
    case 69:
      answer = 'Pewnie oczekujesz ode mnie konkretnej odpowiedzi, takiej niestety nie dostaniesz';
      break;
    case 70:
      answer = 'Idź policz gwiazdy i do mnie wróć';
      break;
    case 71:
      answer = 'Czy tylko ja czasem nie widzę nieba jako zwykłego pięknego obrazka?';
      break;
    case 72:
      answer = 'Prawdziwi mężczyźni mieszają napoje ze sobą, żal i nędza dla drużyn pepsi i cola';
      break;
    case 73:
      answer = 'Kapitalizm i wolny rynek to najefektywniejsze formy gospodarki';
      break;
    case 74:
      answer = 'Czy gdybyś spalił swoje pieniądze to byłbyś patriotą zbijając inflacje, czy byłbyś przestępcom?';
      break;
    case 75:
      answer = 'Przestępstwo podatkowe to jedno z najlepszych i najkreatywniejszych przestępstw';
      break;
    case 76:
      answer = 'Na Bałkanach można skończyć tą odpowiedź';
      break;
    case 77:
      answer = 'Poczekaj chwilkę, mam telefon od marszałka';
      break;
    case 78:
      answer = 'Byś się wziął za naukę a nie obijał zadając mi takie losowe pytania';
      break;
    case 79:
      answer = 'C jest najlepszym językiem programowania pod tym względem, że programista wie jak ten kod odczyta komputer';
      break;
  }

  if(interaction.isChatInputCommand()) {
    /* Reply */
    message = interaction.options.get('pytanie').value;
    interaction.reply('**Pytanie:** ' + message + '\n**Szczera reakcja:** ' + answer + '\n> *Czy pogodzisz się z odpowiedzią czy nie to twoja sprawa. Możesz w każdej chwili zadać inne pytanie bądź powtórzyć te same.*\n**Pozdrawiam! <3**');
    console.log("Answered to someone");
  }
});

/* Setup commands */
async function setup(fine = true) {
  try {
    /* Write message */
    console.log('Starting commands.');
    /* Add commands */
    await rest.put(Routes.applicationCommands(cid), {
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
