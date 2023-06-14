import {createStore} from 'vuex'

export default createStore({
    state: {
        user: 'false',
        routername: 'BG Werl',
        beiträge: [
            {
                id: 1,
                titel: "Stellungnahme der BG Werl zur Diskussion über Lärmbelastung bei Schützenfesten",
                text: "SCHÜTZENFESTE - ERNEUT RECHTSUNSICHERHEIT BEI DER VERWALTUNG ?\n" +
                    "\n" +
                    " \n" +
                    "\n" +
                    "In der letzten Ratssitzung wurde die Verwaltung nach Einschränkungen der Lärmbelästigung durch Schützenfeste gefragt.\n" +
                    "\n" +
                    " \n" +
                    "\n" +
                    "Seitens der Stadt Werl wurde betont, dass nach Beschwerden durch Anlieger die gesetzlichen Vorgaben einzuhalten seien, nämlich 45 Dezibel nach 22 Uhr. Das ist eindeutig falsch! Uns liegt eine Stellungnahme eines führenden Verwaltungsrechtlers vor, mit dem auch die Stadt Werl gelegentlich arbeitet.\n" +
                    "\n" +
                    "Das Oberverwaltungsgericht Münster hat folgendes bestimmt: Erst ab 0.00 Uhr ist sicherzustellen, dass ein Pegel von 55 dB vor dem Wohnhaus der Anwohner nicht überschritten wird. Das bedeutet, der Verstärker muss so eingestellt werden, dass drei Meter vor den Lautsprechern maximal 80 dB erzeugt werden. Die musikalischen Darbietungen sind um 1.45 Uhr einzustellen und das Fest muss um 2.00 Uhr beendet werden.\n" +
                    "\n" +
                    "Diese Informationen kann man auch im Internet nachlesen. Warum informiert sich die Verwaltung hier nicht fundierter? Und auch der Sönneraner UWG Ratsherr und Schützenbruder Prünte hatte sich hier als Anfragender im Vorfeld offenbar nur unzureichend informiert, ansonsten hätte er jede Möglichkeit gehabt, dem Vortrag der Stadt direkt zu widersprechen.\n" +
                    "\n" +
                    " \n" +
                    "\n" +
                    "Wir haben wirklich Verständnis für die Bürger, die irgendwann zur Ruhe kommen möchten. Aber Schützenfest ist einmal pro Jahr und die oben beschriebenen Richtwerte sind vertretbar.",
                datum: "01.06.2023"
            },
            {
                id: 2,
                titel: "Stellungnahme zum Umbesetzungsantrag der UWG-Fraktion",
                text: "Die neue UWG-Fraktion im Werler Rat, bestehend aus den ehemaligen Ratsherren der BG Werl (May, Disselhoff u. Prünte) ist dadurch entstanden, dass die drei Ratsherren die Bürgergemeinschaft verlassen haben und ihre Ratsmandate dem Wählerwillen widersprechend nicht an die BG zurückgegeben, sondern zur UWG mitgenommen haben, obwohl sie nur über die Reserveliste der BG Werl überhaupt in den Stadtrat einziehen konnten. Dies war weder vom Wähler so vorgesehen noch ist es moralisch in Ordnung.",
                datum: "02.06.2023"
            },
            {
                id: 3,
                titel: "Offener Brief an den Bürgermeister zur geplanten Bebauung des Vinzenz-Geländes",
                text: "Sehr geehrter Herr Bürgermeister,\n" +
                    "\n" +
                    "mit Sorge haben wir die Planungen zur Bebauung des Vinzenz-Geländes zur Kenntnis genommen. Als Bürgergemeinschaft Werl setzen wir uns für den Erhalt von Grünflächen und Naturräumen in unserer Stadt ein. Das Vinzenz-Gelände bietet eine wertvolle Möglichkeit, einen Park oder eine Grünfläche zu schaffen, die allen Bürgern zur Verfügung steht.\n" +
                    "\n" +
                    "Wir möchten Sie bitten, die Entscheidung noch einmal zu überdenken und alternative Nutzungsmöglichkeiten für das Gelände in Betracht zu ziehen. Es ist wichtig, dass wir auch in Zukunft ausreichend Grünflächen in Werl haben, die zur Erholung und Freizeitgestaltung genutzt werden können.\n" +
                    "\n" +
                    "Wir hoffen auf Ihr Verständnis und Ihre Unterstützung in dieser Angelegenheit.\n" +
                    "\n" +
                    "Mit freundlichen Grüßen,\n" +
                    "Bürgergemeinschaft Werl",
                datum: "03.06.2023"
            },
            {
                id: 4,
                titel: "Stellungnahme der BG Werl zur Einführung von Umweltzonen in Werl",
                text: "Sehr geehrte Damen und Herren,\n" +
                    "\n" +
                    "die Bürgergemeinschaft Werl setzt sich für den Schutz der Umwelt und die Förderung nachhaltiger Mobilität ein. Aus diesem Grund begrüßen wir die Einführung von Umweltzonen in Werl. Diese Maßnahme dient dazu, die Luftqualität in unserer Stadt zu verbessern und den Ausstoß von schädlichen Emissionen zu reduzieren.\n" +
                    "\n" +
                    "Wir unterstützen die geplanten Maßnahmen zur Reduzierung des Autoverkehrs und zur Förderung umweltfreundlicher Verkehrsmittel wie Fahrrad und öffentlicher Nahverkehr. Es ist wichtig, dass wir gemeinsam Verantwortung für unsere Umwelt übernehmen und uns für eine lebenswerte und nachhaltige Stadt einsetzen.\n" +
                    "\n" +
                    "Mit freundlichen Grüßen,\n" +
                    "Bürgergemeinschaft Werl",
                datum: "04.06.2023"
            },
            {
                id: 5,
                titel: "Pressemitteilung der BG Werl zur Neugestaltung des Stadtparks",
                text: "Werl, 5. Juni 2023\n" +
                    "\n" +
                    "Die Bürgergemeinschaft Werl freut sich über die geplante Neugestaltung des Stadtparks. Der Stadtpark ist ein zentraler Ort der Begegnung und Erholung für alle Bürgerinnen und Bürger. Es ist wichtig, dass dieser Ort attraktiv und ansprechend gestaltet wird.\n" +
                    "\n" +
                    "Wir unterstützen die Pläne zur Schaffung von Spiel- und Sportflächen, einem barrierefreien Zugang und einer vielfältigen Bepflanzung. Dadurch wird der Stadtpark zu einem Ort, der für Jung und Alt gleichermaßen attraktiv ist.\n" +
                    "\n" +
                    "Wir danken der Stadtverwaltung und allen Beteiligten für ihr Engagement und freuen uns auf die Umsetzung der Pläne.\n" +
                    "\n" +
                    "Mit freundlichen Grüßen,\n" +
                    "Bürgergemeinschaft Werl",
                datum: "05.06.2023"
            }
        ],
        erfolge: [
            {
                id: 2,
                img: require('../assets/erfolge/freibad.jpg'),
                text: '... die Werler BG sich immer für ein leistungsfähiges Frei- und Hallenbad mit familienfreundlichen Preisen eingesetzt hat?'
            },
            {
                id: 3,
                img: require('../assets/erfolge/kaemperstrasse.jpg'),
                text: '... Gründungsmitglieder der BG Zeit und Geld geopfert haben, um eine Straße zu verhindern, die quer durch die Kernstadt (Westtangente) geführt werden sollte?'
            },
            {
                id: 4,
                img: require('../assets/erfolge/gradierwerk.jpg'),
                text: '... die Idee für das Gradierwerk im Kurpark u.v.a.m von der BG initiiert wurden?'
            },
            {
                id: 5,
                img: '',
                text: '... sich die BG sachlich und konstruktiv mit den Konzepten aller Werler Parteien auseinandersetzt und gemeinsam mit ihnen nach der jeweils bestmöglichen Lösung sucht?'
            },
            {
                id: 6,
                img: '',
                text: '... die BG seit langem Kreisverkehre statt Ampeln fordert, was langsam auch in Werl Einkehr findet?'
            },
            {
                id: 7,
                img: '',
                text: '... die BG in der aktuellen, finanziell angespannten Situation auch den Mut hat, zurückzustecken und versucht, den Bürgern die Haushaltssorgen transparent zu machen?'
            },
            {
                id: 8,
                img: require('../assets/erfolge/wald.jpg'),
                text: '... die BG sich als erste Fraktion massiv gegen den Ausbau des Werler Stadtwaldes zum Verkehrsübungsplatz gewandt hat?'
            },
            {
                id: 9,
                img: '',
                text: '... die BG bereits seit 2002 in ihren Haushaltsreden und ihrer Politik die Haushaltsführung angegriffen hat und in der aktuellen Legislaturperiode endlich mit der CDU und den Grünen die Wende geschafft hat?'
            },
            {
                id: 10,
                img: require('../assets/erfolge/tunnel.jpg'),
                text: '... die BG als erste politische Gruppe die Reißlinie gezogen hat, um das Tunnelbauwerk Langenwiedenweg auf 20 Jahre zu verschieben, weil sonst nur die Schuldensumme weiter erhöht würde? Andere Parteien haben sich angeschlossen und auch die CDU verlangt keine schnelle Lösung mehr. Nur die SPD verharrt in ihrer 30 Jahre alten Position, egal, wieviel Schulden den Bürgern aufgebürdet werden.'
            },
            {
                id: 11,
                img: require('../assets/erfolge/kbw.jpg'),
                text: '... durch massiven Personeneinsatz der BG und durch massive politische Unterstützung der BG Bürgerbegehren und Bürgerentscheid zum Erhalt des öffentlichen KBW (Kanalsystem, Straßenreinigung, Müllabfuhr, Sperrmüll, etc.) stattgefunden haben. Heute sind auch die damaligen Gegner CDU und SPD dankbar dafür, vermeidet die verhinderte Privatisierung doch steigende Kosten für Bürger.'
            },
            {
                id: 12,
                img: '',
                text: '... auf Vermittlung der BG ein Krematorium in Werl geschaffen wurde und somit bei vielen Todesfällen ein unnötiger "Reiseverkehr" nach Hamm unterbleiben kann?'
            },
            {
                id: 13,
                img: '',
                text: '... auf Anregung der BG eine zukunftsweisende Erdgastankstelle an der Tankstelle Rubarth geschaffen wurde?'
            },
            {
                id: 14,
                img: require('../assets/erfolge/bushaltestelle_holtum.png'),
                text: '... auf Beharren der BG die Bushaltestelle in Holtum einen neuen Platz erhielt, somit der Busverkehr aus dem engen Kirchenumfeld geholt wurde. Erst bei einem Ortstermin konnte die BG mit ihrem Vorschlag überzeugen, der zuletzt sogar preiswerter war als der Vorschlag von CDU und SPD.'
            },
            {
                id: 15,
                img: require('../assets/erfolge/ratsinfo_seitenleiste.png'),
                text: '... auf Antrag der BG in 2012 ein Ratsinformationssystem für die Ratsmitglieder eingeführt wurde, das hilft, Tausende von Papierseiten nicht mehr auszudrucken und den Ratsmitgliedern zuzustellen, sondern welches ihnen ermöglicht, alle Unterlagen am Rechner einzusehen und zu bearbeiten. Dass dabei gleichzeitig ein digitales Archiv entsteht, ist ein gewollter Nebeneffekt, der die Arbeit des Rates transparenter und nachhaltiger machen kann.'
            }
        ],
        kommentare: [
            {
                id: 1,
                img: require('../assets/kommentare/Detmar Disselhoff.jpg'),
                titel: "Der Standort der zentralen Bushaltestelle in Holtum, eine Idee der BG",
                text: "Liebe Mitbürgerinnen und Mitbürger,\n es war vom Rat beziehungsweise Planungsausschuss beschlossen worden, die Busfahrstrecke durch die Agathastraße in Holtum um die Kirche herum zu führen.\n\nWegen des massiven Protestes der Holtumer Bevölkerung haben wir uns die Sache vor Ort genauestens angesehen. Wir haben mit vielen Bürgern gesprochen und sind die Wege allein und in Begleitung mehrfach abgegangen.\n\nAus rein sachlichen Gründen sind wir zu der Auffassung gelangt, dass der Bus wegen der geringen Straßenbreite nur schlecht durch die Agathastraße fahren kann. Wir glauben, dass die neue Pflasterung durch den Bus stark in Mitleidenschaft gezogen wird und hohe Folgekosten verursacht. Zudem werden Besucher von Kindergarten, Kirche und Schützenhalle durch den Busverkehr beeinträchtigt, vielleicht sogar gefährdet, da kein Gehweg vorhanden ist.\n\nWir haben als Alternative die Route Twittenstraße, Singelers Garten vorgeschlagen, mit der Haltestelle vor der Kreuzung, fast gegenüber der alten Haltestelle. Diese Haltestelle ist immer noch zentrumsnah, die Häuser stehen hier nicht so eng zusammen und beide Straßen verfügen über einen Bürgersteig. Wir haben dem Planungsausschuss diese neue Lösung vorgeschlagen und sie wurde mit Mehrheit beschlossen.\n\nNun wird uns vorgehalten, wir würden der Stadt Mehrkosten in Höhe von ca. 18.000 € bescheren, obwohl die Maßnahme „Agathastraße“ deutlich teuer wäre, was aber nicht von der Stadt Werl bezahlt würde, sondern vom Land.. Dies erachten wir als kurzsichtig, da Folgekosten (Altstadtpflaster) entstehen können. Darüber hinaus legen wir großen Wert auf die Sicherheit der Anwohner in der Agathastraße. Wir verstehen unseren politischen Einsatz in Werl so, dass wir für sachlich vernünftige Lösungen eintreten, diese durchsetzen und gleichzeitig ökonomisch und sparsam vorgehen.\n\nDetmar Disselhoff",
                autor: "Dieter Riewe",
                datum: "18.01.2014"
            },
            {
                id: 2,
                img: require('../assets/kommentare/Detmar Disselhoff.jpg'),
                titel: "Windkrafträder in Hilbeck",
                text: "Liebe Mitbürgerinnen und Bürger,\nbezüglich der 80. Änderung des Flächennutzungsplans der Stadt Werl (Konzentrationsfläche für Windkraftanlagen Westhilbeck) gebe ich folgendes zu bedenken:\n\n1. Naherholung\nDie in der Vorlage ausgewiesene Fläche und ihre Randbereiche dienen in erster Line den Menschen in Hilbeck, Osterflierich, Steinen, sowie allen anderen Bürgerinnen und Bürgern",
                autor: "Hermann Lindemann",
                datum: "19.01.2014"
            },
            {
                id: 3,
                img: require('../assets/kommentare/Heinz Albrecht.jpg'),
                titel: "Winterzeit Gefahrenzeit?",
                text: "Liebe Mitbürgerinnen und Mitbürger,\ngibt es eigentlich keine Aufsichtspersonen oder Verantwortlichen bei der Stadt Werl, die dafür sorgen, dass bei Eis und Schnee die Wege und Zugänge für die Fußgänger und Radfahrer gestreut oder wenigstens geräumt werden? Es kann doch wohl nicht sein, dass wir solche Dinge unseren politischen Vertretern überlassen müssen. Oder glaubt jemand wirklich, dass die keine anderen Aufgaben haben? Wir haben in den letzten Tagen bittere Erfahrungen gemacht und uns zum wiederholten Male in unserer Arbeit beeinträchtigt gesehen.\n\nDeshalb unser Appell: Liebe Verwaltung, liebe politische Vertreter, sorgt dafür, dass bei Schnee und Eis die Geh- und Radwege in der Innenstadt und in den Ortsteilen rechtzeitig geräumt und/oder gestreut werden. Schließlich zahlen wir Steuern und Abgaben genug.\n\nIhre BG Fraktion im Rat der Stadt Werl",
                autor: "Heinrich Görner",
                datum: "17.01.2014"
            },
            {
                id: 4,
                img: require('../assets/kommentare/Siegbert May.jpg'),
                titel: "Bahnunterführung Langenwiedenweg, ja oder nein?",
                text: "Seit vielen Jahren nun ist die Frage ob es eine Notwendigkeit gibt, die Unterführung am Langenwiedenweg zu bauen, Thema vieler Diskussionen und Streitgespräche. Meinungen prallten aufeinander, Argumente, rationale wie irrationale, wurden angeführt, die jeweiligen Standpunkte zu erhärten.\n\nAlle diese verschiedenen Ansichten erweisen sich nun als relativ schwach vor der Tatsache der leeren Kasse der armen Stadt Werl, welche nun seit vielen Jahren ihren Haushalt nicht mehr ausgleichen kann.\nEinnahmen und Ausgaben stehen in einem krassen Missverhältnis. Selbst der Verkauf der Stadtwerke würde nicht soviel Geld erbringen, dass Werl schuldenfrei wäre. Und der Verkauf der Stadtwerke würde bedeuten, dass das Werler Hallen- und Freibad nicht gehalten werden könnte. Auch die zusätzliche Einstellung aller sogenannten freiwilligen Leistungen, wie die Angebote der städtischen Leihbücherei und der Musikschule und Teile der Volkshochschule würden den Haushalt der Stadt nicht so entlasten, dass Freiheit von Schulden aufträte.\n\nZu allen diesen Schulden kämen die zusätzlichen Schulden, die durch den Bau der Bahnunterführung und deren späteren Unterhaltung notwendig sind. Aus eigener Kraft können die Bürger der Stadt Werl diese Schulden zumindest in absehbarer Zeit nicht abarbeiten.\n\nDiese Schulden werden auch die Kinder und Enkelkinder der jetzt in Werl lebenden Menschen belasten. Die Verschuldung der Stadt und das im Vergleich zu anderen Städten im Kreis Soest und in NRW geringe Steueraufkommen pro Kopf der Einwohner führen schon heute dazu, dass Werl zum Beispiel kostengünstiger fährt, wenn es die Leistungen des Kreisjugendamtes in Anspruch nimmt, als dass es ein eigenes Jugendamt unterhält. Das heißt die Menschen anderer Städte und Dörfer des Kreises Soest werden schon in der Gegenwart durch die Schulden der Stadt Werl mehr belastet.\n\nSicher, das sei an dieser Stelle gesagt, es gibt auch durch gesetzlich festgeschriebene Vorgaben für die Stadt Werl erhebliche finanzielle Verpflichtungen, die den Stand der Schulden der Stadt hochtreiben. Werl ist sicher in Zukunft auf die Hilfe des Landes angewiesen, welches aus unserer Sicht finanzielle Entlastungen gewähren sollte bei der Erfüllung von Aufgaben, für die es eine gesetzliche Verpflichtung für die Stadt gibt. Das Land NRW sollte auch prüfen, ob ein Schuldenfonds eingerichtet werden kann.\n\nUnd vor allem aus diesen finanziellen Gründen haben sich die Mitglieder der BG-Werl vor einigen Jahren gegen den Bau der Bahnunterführung ausgesprochen. Des weiteren haben wir auf die Vernunft der Mehrheit der Bürger der Stadt Werl gesetzt und ein Bürgerbegehren für den Fall gefordert, dass durch eine wie auch immer geartete politische Mehrheit in der Stadt der Bau der Unterführung dennoch durchgesetzt werden sollte. Dazu stehen wir auch weiterhin – auch nach der Erklärung des Fraktionsvorsitzenden der CDU-Werl in der vergangenen Woche, dass der Bau der Unterführung nicht mehr realisiert werden solle.\n\nSiegbert May,\nLeserbrief im Soester Anzeiger vom 2. Februar 2011.",
                autor: "Siegbert May",
                datum: "02.02.2011"
            },
            {
                id: 5,
                img: require('../assets/kommentare/Dieter Riewe.jpg'),
                titel: "Radfahren in Werl",
                text: "Siegbert May von der Bürgergemeinschaft Werl hat einen Antrag an die Stadt gerichtet, in dem zum weiteren Ausbau der Radfahrerstadt Werl angeregt werden soll. Das bedeutet nicht immer 'Geld ausgeben', sondern eben auch 'konzeptionelle Weiterentwicklung':\n\nRadfahren hat viele Überschriften: Energie sparen -\n\nSportliche/gesundheitsförderliche Lebensweise - Wirtschaftliche Vorteile durch tourististische Angebote!\n\nBetrachten wir die Überschriften einzeln!\n\nEnergiesparen:\nBenzin für das Autofahren wird immer knapper und teurer, die Umweltbelastung ist ein ernstzunehmender Fakt. Ziel ist es daher, das Autofahren insbesondere bei kleineren Strecken möglichst zu vermeiden. Das heißt, das Fahrradfahren insbesondere im Alltag zu fördern. D. h. die Verbindungen müssen schnell, sicher, barrierefrei von Kindern, Jugendlichen und den Erwachsenen und älteren Mitbürgerinnen und Mitbürgern gestaltet sein. Und das möglichst auch in den Übergangsjahreszeiten und möglichst auch im Winter. Außerdem sind sichere Abstellmöglichkeiten sehr begrenzt und nasse Sättel reizen auch nicht bei dem vielfachen gemischten Wetter in Werl.\n\nWerl hat in der Vergangenheit einiges getan, um Fahrradwege in der Peripherie anzulegen. Auch der Schilderwald ist munter gewachsen. Aber es fehlt noch einiges an der Vollendung. Radfahrer sind an Kreuzungen oft nur geduldete Beteiligte, die immer auf die Autofahrer Rücksicht nehmen müssen. Im Zweifelsfall (s. Kreuzung Salinenring/Unnaerstraße) sollen sie absteigen und schieben. Viele insbesondere Jugendliche tun dies nicht - aber oft mit einem schlechten Gewissen.\nDas kann und sollte man ändern, Kreuzungsspuren für Radler, vielleicht auch eine grüne Welle für Radler sind denkbar.\nEin Appell an die Arbeitgeber in der Stadt, mehr und bessere Fahrradständer anzubringen, kann das Aufbewahrungsproblem lösen.\n\nVielleicht ist auch ein mobiler 'Notdienst' denkbar, der gegen Mitgliedschaft (wie beim ADAC o.ä.) schnell zu Hilfe kommt, wenn eine Panne eintritt. Wichtig ist, dass es immer weniger Gründe gibt, das Auto auf Kurzstrecken benutzen zu 'müssen'. Vielleicht können wir auch 'Schnellstraßen' für Radfahrer schaffen.\n\nSportliche/gesundheitliche Lebensweise\nEin wichtiger Nebeneffekt der Nutzung des Fahrrads im Alltag ist die Verbesserung der Beweglichkeit der Mitmenschen, über deren positiven Folgen wir hier nicht schreiben müssen. Wichtig ist, dass die Unfallgefahr durch Radfahrverkehr nicht ansteigt - weder bei Kindern, Jugendlichen oder Älteren.\n\nWirtschaftsförderung durch touristische Aspekte\nEin gewaltiger Erfolg für Werl als touristisches Ziel sowohl für Einwohner als auch Zugezogene und Nachbarn und Fremde ist die Ausweisung der 4 Kleeblatt-Routen rund um Werl. Dieses muss man immer wieder betonen. Aber auch hier lässt sich noch etwas daraufsetzen. Vielleicht gibt es Möglichkeiten, auch Rundtouren zu den Nachbargemeinden festzulegen, sei es Wickede, Unna, Bönen, Hamm, Welver, Soest und Ense, so dass die Bürgerinnen und Bürger der Nachbarstädte gerne nach Werl kommen (und umgekehrt). Die durchaus vorhandenen Attraktionen am Wegesrand können betont werden. Für Werl als Innenstadt müsste noch ein Kurzprogramm erstellt werden. Auch Stationen mit Kaffee und Kuchen oder Kunsthandwerk förden den Tourismus.\nDie Nachbarstadt Wickede liegt am Ruhr-Radwanderweg und erlebt seit Definition dieser Strecke ein Vielfaches an Tourismus, insbesondere in der Mittagszeit sind viele Radwanderer in den Cafes und Bistros zu sehen. Werl sollte versuchen, sich inhaltlich an einige überregionale Radfahrstrecken anzubinden oder eigene Strecken mit Nachbargemeinden entwickeln.\n\nBereits beim Schreiben dieser Aspekte fallen dem Autor viele Themen ein, die man auch noch berühren müsste. Zum Beispiel die Kennzeichnung der Stadt Werl durch ein malerisches, gut gestaltetes Ortsschild an allen Einfahrstraßen und -wegen.\n\nDie BG Werl schlägt vor, einen neutralen Arbeitskreis zu gründen, der das Thema vertieft und möglichst viele Aspekte in den nächsten Jahren berücksichtigt und verfolgt. Die Politik in Werl wird sicher zur Unterstützung bereit sein.\n\nDieter Riewe",
                autor: "Dieter Riewe",
                datum: "18.01.2014"
            }
        ],
        rat: []

    },
    getters: {
        user: (state) => {
            return state.user
        },
        beiträge: (state) => {
            return state.beiträge
        },
        erfolge: (state) => {
            return state.erfolge
        },
        kommentare: (state) => {
            return state.kommentare
        }
    },
    mutations: {
        user(state, user) {
            state.user = user
        },
        beiträge: (state, beiträge) => {
            state.beiträge = beiträge
        },
        erfolge: (state, erfolge) => {
            state.erfolge = erfolge
        },
        kommentare: (state, kommentare) => {
            state.kommentare = kommentare
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
        beiträge: (context, beiträge) => {
            context.commit('beiträge', beiträge)
        },
        erfolge: (context, erfolge) => {
            context.erfolge('erfolge', erfolge)
        },
        kommentare: (context, kommentare) => {
            context.commit('kommentare', kommentare)
        }
    },
    modules: {}
})
