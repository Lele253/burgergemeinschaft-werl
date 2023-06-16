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
        rat: [
            {
                name: 'stefan',
                titel: 'Professor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'aflknaelfnalfnalfnafnl3qf'
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            },
            {
                name: 'Leandro',
                titel: 'doktor',
                bild: require('../assets/presssearchiv/MaySiegbert.jpg'),
                vita: 'a,jvn akjenvkeanvaevnaelv',
            }],
        vorstand: [
            {
                name: "Jens Schmigowski",
                position: "Vorsitzender",
                img: require('../assets/vorstand/SchmigowskiJens20.jpg')
            },
            {
                name: "Veronika König",
                position: "stellv. Vorsitzende",
                img: require('../assets/vorstand/KoenigVeronika20.jpg')
            },
            {name: "Sara Kranemann", position: "Schriftführerin", img: require('../assets/vorstand/KranemannSara.jpg')},
            {name: "Elisabeth May", position: "Kassenwartin", img: require('../assets/vorstand/MayElisabeth20.jpg')},
            {
                name: "Wilhelm Kranemann",
                position: "Beisitzer",
                img: require('../assets/vorstand/KranemannWilhelm20.jpg')
            },
            {
                name: "Christoph Prünte",
                position: "Beisitzer",
                img: require('../assets/vorstand/PruenteChristoph20.jpg')
            },
            {
                name: "Detmar Disselhoff",
                position: "Beisitzer",
                img: require('../assets/vorstand/DisselhoffDetmar20.jpg')
            }
        ],
        pressearchiv: [
            {
                id: 1,
                titel: "Presseerklärung zum Bebauungsplan 'Bahnhofsumfeld' von Karl-Joseph Lippold",
                untertitel: "",
                img: require('../assets/presssearchiv/Lippold.jpg'),
                text: "Wie durch Anmerkungen anderer Parteien und auch in der Presse festgestellt, hat die BG die ursprüngliche Zustimmung zum 'Bahnhofsprojekt' zurückgenommen. Die Planung des Bahnhofsumfelds mag noch so ansehnlich sein, sie ist wegen der von der Stadt zu tragenden Kosten und Folgekosten in absehbarer Zeit nicht zu realisieren. Zudem werden als Folge der Finanz- und Wirtschaftskrise Steuereinnahmen nicht im bisherigen Umfang zu erwarten sein.\n\nAbschied nehmen von solchen Großprojekten mag schmerzlich sein, ist aber notwendig, wenn neue Erkenntnisse und Sachverhalte dies fordern. Stures Festhalten an früheren Beschlüssen, die unter anderen Gegebenheiten gefasst wurden, mag bestimmten Gesinnungen geschuldet sein, entspringt aber nicht einer Verantwortungsethik, die der Soziologe Max Weber und in seinem jüngsten Werk Helmut Schmidt ('Außer Dienst') Politikern nahe legen.\n\nDie mit der Bahnunterführung verbundene neue Verkehrsführung führt auch zu erheblichen Veränderungen für die dort ansässigen Betriebe. Dies betrifft die Betriebe an der Hammer Straße und der künftigen Stichstraße 'Alter Keller'.\n\nAuch die IHK Arnsberg weist auf erhebliche Schwierigkeiten für diese Betriebe hin, die großenteils durch vorbeifahrende Kunden profitieren, wie der Tankstellenbetrieb oder der Reifendienst. Die Planung vermindert die Standortqualität der Betriebe erheblich, was die Stadt nicht unberücksichtigt lassen kann. Gravierende Flächenverluste auf Grund der Trassenführung können für die betroffenen Firmen Existenz bedrohend sein. Nach Meinung der IHK ist ihnen mit einer finanziellen Entschädigung nicht gedient; Standortverlagerungen werden unausweichlich sein. Auch für die Andienung der bleibenden Unternehmen ist Sorge zu tragen. All dies führt zu weiteren Kosten, die über die im Planverfahren genannten hinausgehen werden.\n\nNach Standortverlagerungen werden Leerstände entstehen, die wegen der dann ungünstigen Flächenzuschnitte und Andienungen wenige Interessenten finden dürften. Es ist dies eben ein sehr schwieriger Abwägungsprozess beim Projekt Bahnhofsumfeld, bei dem man wegen erwünschter Vorzüge nicht nachteilige Folgeerscheinungen außer Acht lassen darf.\n\nAn dieser finanziell alle jetzigen und künftigen Bürgerinnen und Bürger betreffenden Entscheidung sollten diese entsprechend beteiligt werden. Das jedenfalls ist die Auffassung der BG.",
                autor: "Karl-Joseph Lippold",
                datum: "21.08.2009",
                position: "BG – Fraktion Im Rat der Stadt Werl"
            },
            {
                id: 2,
                titel: "Antrag der BG auf Sondersitzung des Rates der Stadt Werl vor der Kommunalwahl",
                untertitel: "Gemäß §47 Abs. 1 GO beantragt die Fraktion der BG-Werl die Einberufung des Rates nach Beendigung der Sommerferien in NRW und vor der Kommunalwahl am 30.08.09.",
                img: "",
                text: "Sollte der Bürgermeister die Einberufung dieser von uns beantragten Sitzung ablehnen, bestehen wir auf einer Entscheidung zu dieser Frage durch die Aufsichtsbehörde.\n\nWir halten die Einberufung der Sitzung zu diesem Zeitpunkt für erforderlich, weil wir meinen, dass der nachfolgend dargestellte Beratungsgegenstand noch von dem amtierenden Rat vor der anstehenden Kommunalwahl entschieden werden sollte, da er einen elementar wichtigen Gegenstand unserer Stadt darstellt, der weitreichende Folgen für die Gestaltung unserer Stadt hat.\n\nDie BG-Werl beantragt durch Entscheidung des Rates einen Bürgerentscheid nach § 26 GO NRW herbeizuführen, wodurch die Frage geklärt werden soll, ob die Bahnunterführung am Langenwiedenweg gebaut werden soll. Begründung: Die Durchführung der geplanten Unterführung würde auf Jahre die finanzielle Situation der Stadt belasten. Die Bürgerinnen und Bürger der Stadt und deren Nachkommen würden weiterhin und auch höher belastet werden müssen. Notwendige Investitionen an Gebäuden, Straßen und anderen städtischen Einrichtungen müssten weiter verschoben werden, die städtischen Tochtergesellschaften könnten notwendige Rücklagen nicht im erforderlichen Maß bilden und wären damit möglicherweise im Bestand gefährdet. Bereits heute könnten die Gas-, Strom-, Wasserpreise gesenkt werden, wenn die Stadtwerke nicht zur Finanzierung des Schwimmbades in erheblichen Umfang herangezogen würden.\n\nZudem hat sich die Verkehrssituation durch die Schaffung der im Gegenverkehr passierbaren Bahnunterführung an der Schützentrasse in der Stadt verändert. Diese Situation ist bislang planerisch noch in keiner Weise berücksichtigt worden. Dadurch hat sich die Nutzung der Unterführung durch Fahrzeuge nicht entscheidend verändert. Hier bestehen daher Ressourcen, die mit geringerem finanziellem Aufwand als sie durch die Erstellung der Unterführung am Langenwiedenweg entstehen würden. Die Erstellung der Unterführung am Langenwiedenweg zöge in einem weiteren Bauabschnitt die Bebauung des Geländes nördlich des Bahnhofs nach sich. Auch hierdurch sind finanzielle Belastungen für die Stadt nicht auszuschließen.\n\nDie gegenwärtige Planung mit der Ansiedlung von Discountern auf dem Gelände würde mit hoher Wahrscheinlichkeit zu vermehrten Leerständen von Geschäften in der Innenstadt (Fußgängerzone) führen. Aber auch weitere negative Auswirkungen städtebaulicher Art wären zu befürchten. Auch der Bahnhofsvorplatz müsste umfangreich und kostenträchtig erneuert werden, weil durch die gegenwärtig angestrebte und favorisierte Unterführungsplanung Höhendifferenzen ausgeglichen werden müssten und erhebliche Umgestaltungen vorgenommen werden sollen.",
                autor: "Siegbert May",
                datum: "21.07.2009",
                position: "Fraktionsvorsitzender der Bürgergemeinschaft Werl e.V"
            },
            {
                id: 3,
                titel: "Antwort auf einen Leserbrief des FDP-Mitglieds Julian Kirchherr, der der BG Flickschusterei vorwirft",
                untertitel: "Antwort zum Leserbrief 'Nur Flickschusterei' des FDP-Ratskandidaten Julian Kirchherr vom 01.08.09",
                img: require('../assets/presssearchiv/MaySiegbert.jpg'),
                text: "Die BG-Werl hatte schon zur Kommunalwahl 2004, und auch jetzt wieder, gefordert einen 'Bürgerhaushalt' für Werl zu realisieren. Letztlich ist unser Vorschlag identisch mit dem, was Herr Kirchherr jetzt als 'Beteiligungshaushalt' für Werl fordert.\n\nDer Beteiligungshaushalt ist ein moderiertes Verfahren mit einem externen unabhängigen Moderator, aber letztlich sind die Bürger wieder nur indirekt beteiligt. Das Verfahren ist aufwändig und ungeeignet zur Klärung der Frage Bahnunterführung, ja oder nein.\n\nDer Bürgerentscheid beteiligt die Bürger zu einer aktuellen Frage (z.B.: 'Soll die Bahnunterführung am Langenwiedenweg gebaut werden?') direkt. Und die Bürger übernehmen mit ihrer Antwort direkte Verantwortung. Das Verfahren des Ratsbürgerentscheides wurde im Koalitionsvertrag zwischen CDU und FDP zur Landtagswahl 2005 in NRW vereinbart und 2007 in die Gemeindeordnung eingefügt. Von den Beteiligten wurde es als ein sinnvolles und wichtiges Element der Demokratie bezeichnet.\n\nUns von der BG-Werl, die wir schon 2002 einen Bürgerentscheid in Werl zu der Frage ob der Kommunalbetrieb Werl privatisiert werden sollte, mit initiierten und unterstützten, geht es aktuell wieder um die direkte Beteiligung der Bürger. Denn die Bahnunterführung am Langenwiedenweg wird das Leben aller Bürger in Werl direkt oder indirekt massiv beeinflussen. Es geht nicht nur um städtische Gelder, sondern auch um das Vermögen vieler Bürger, die zum Beispiel ihren Geschäftsstandort verlegen müssten, wenn die Unterführung käme.\n\nEs geht um Änderungen von Verkehrsströmen in der Stadt und den damit verbundenen Belastungen durch Emissionen und viele andere Dinge mehr. Es geht um die zukünftige Gestaltung eines großen Areals nördlich des Bahnhofs, von der viele Mitbewohner direkt (Fußwege, Einkaufsplätze und vieles mehr) und indirekt (Kaufleute und Kunden in der Innenstadt) betroffen sein werden.\n\nEin Beteiligungshaushalt ist das eine, ein Bürgerentscheid das andere. Zur Klärung der Frage, ob eine Bahnunterführung kommen soll oder nicht, ist ein Bürgerentscheid richtig. Den Bürgerentscheid über einen Ratsbeschluss, und nicht über ein vorgeschaltetes Bürgerbegehren, zu bekommen wäre elegant und Zeichen gelebter Demokratie in Werl.\n\nBürgerbeteiligung ist uns, von der BG, ein innerstes Anliegen! Das unterscheidet uns schon von vielen Politikern der etablierten Parteien, die den Begriff Parteiendemokratie lieben und extensiv auslegen.",
                autor: "Siegbert May",
                datum: "4.8.09",
                position: "Fraktionsvorsitzender"
            },
            {
                id: 4,
                titel: "Rede von Inge Klauk zum 20. Jubiläum der Bürgergemeinschaft im Cafe Dreiklang",
                untertitel: "",
                img: require('../assets/presssearchiv/Inge Klauk.jpg'),
                autor: "Inge Klauk",
                datum: "20. Juni 2009",
                text: "Die Bürgergemeinschaft Werl begeht ihren zwanzigsten Geburtstag. Wir feiern, halten Rückschau und blicken in die Zukunft. Für die Rückschau bin ich heute zuständig, für die Zukunft Siegbert May.\n\nWegbereiter der neuen politischen Gruppierung waren – so merkwürdig es klingen mag – Politik und Verwaltung der Stadt Werl. Wer erinnert sich noch an die große Sanierungswelle, die in den siebziger und achtziger Jahren ganz Deutschland erfasste und das Gesicht von Städten und Gemeinden verändern sollte? Auch Werl leistete sich ein aufwendiges Sanierungsprogramm. Ein Büro der Landesentwicklungsgesellschaft - kurz LEG genannt - richtete sich in Werl ein. Der Begriff Flächensanierung löste je nach Standpunkt Begeisterung oder Entsetzen hervor. Wusste doch jeder aufgeklärte Bürger, daß dies das Gesicht der Stadt verändern und nicht ohne finanzielle Belastungen für den städtischen Haushalt und jeden einzelnen Hausbesitzer gehen würde.\n\nIn dieser Zeit des Umbruchs gab es mahnende Stimmen, Historisches zu Bewahren, einer behutsamen Objektsanierung den Weg zu ebnen und Straßen so zu planen, daß das Bild der Stadt nicht zerstört wird und die Interessen von Bürgerinnen und Bürgern nicht übergangen werden.\n\nEs ist wichtig, heute an einen Mahner zu erinnern, der später zu uns gehörte, der Zeit und Geld investierte, um den Ratsmitgliedern eine andere Sichtweise von Stadtplanung aufzuzeigen,. Dr. Hermann Josef Koch.\n\nDr. Koch stand nicht allein da. Viele Bürgerinnen und Bürger wehrten sich. Schon 1975 gab es die Überlegung, eine Bürgergemeinschaft zu gründen. Dr. Koch und seine Mitstreiter entschieden sich aber damals, die Zentrumspartei in Werl zu unterstützen. Tatsächlich konnten zwei Ratssitze errungen werden. Auf Bürgerversammlungen gab es zahlreiche Proteste Stellvertretend aus unserer Runde seien Elke Gawliczek und Jürgen Dröge genannt, die sich in einem langwierigen Rechtsstreit standhaft und erfolgreich mit einer Normenkontrollklage gegen eine Straße zur Wehr setzten, die unter dem Namen „ Westtangente“ in die Geschichte dieser Stadt eingehen sollte. Eine Eltern-Schule-Anwohner-Initiative schloß sich der Klage an und investierte viele tausend Mark.\n\nPolitik und Verwaltung haben es offenbar damals nicht verstanden. auf die mahnenden Stimmen zu hören, den Ideenreichtum vor Ort aufzunehmen und in ihre Vorschläge mit einzubeziehen.\n\nDa bedurfte es nur einer tatkräftigen Person, die all diese Ideen, Mahnungen, Sorgen und Ängste aufnahm, um den Menschen im Rat und in den Ausschüssen eine Stimme zu geben. Diese Person war Roswitha Stoll-Tolkemit. Frau Stoll-Tolkemit war politisch erfahren, geschickt in Wort und Schrift. Sie kam wie ein Wirbelwind in die bis dato selbstsicher agierende politische Landschaft unserer Stadt. In kurzer Zeit sammelte sie Männer und Frauen um sich und überzeugte sie davon, daß es notwendig und richtig sei, hier und jetzt eine neue politische Gemeinschaft zu gründen. Sie investierte Zeit und Geld, überzeugte, überredete, kämpfte und schaffte in kurzer Zeit mit engagierten Bürgern das, was viele nicht glauben mochten: Nur wenige Wochen nach dem ersten Treffen im Cafe Schulte in der Walburgisstraße wurde am 9. Mai 1989 die Bürgergemeinschaft gegründet.\n\nEs sollte ein Zusammenschluß parteiunabhängiger Bürgerinnen und Bürger werden, die eine kritische ideologiefreie Alternative der bestehenden Parteien anbot. In ständiger Diskussion mit den Bürgerinnen und Bürgern sollten Fragen und Probleme der Gemeinde erörtert und einer Lösung nähergebracht werden. Bürgernähe war das Stichwort! Niemand hielt es für möglich, daß die BG in dieser Stadt eine Chance bei den Kommunalwahlen im Herbst 1989 hätte. Zum Erstaunen aller errang die Bürgergemeinschaft auf Anhieb 11,4 % der Stimmen, damit 4 Sitze im Rat und wurde drittstärkste politische Kraft in unserer Stadt.\n\nRoswitha Stoll-Tolkemit, Albert Biele, Peter Thomalla und Bernd Schmidt waren die ersten Ratsvertreter. Die Arbeit konnte beginnen! Auf Kreisebene schlossen wir uns bald der Kreis BG an und konnten 1994 Antonius Weller als Werler Vertreter in den Kreistag entsenden.\n\nIn den folgenden fast 10 Jahren war Walter Moennighoff, unermüdlich für uns im Kreistag und in den verschiedensten Ausschüssen tätig. Die kommunalpolitische Arbeit ist für Politikerinnen und Politiker allgemein ein hartes Brot. Neben dem Beruf muß die verbleibende Freizeit zwischen Familie, Sitzungen, Aktenstudium, Bürgergesprächen, Ortsbesichtigungen, unzähligen Telefonaten etc. aufgeteilt werden. Besonders aber 20 Jahre Oppositionsarbeit zu gestalten, da braucht es schon Begeisterung für dieses Ehrenamt. Stellvertretend für alle seien genannt: Roswitha Stoll-Tolkemit, Peter Thomalla, Walter Moennighoff, Siegbert May, Dieter Riewe, unsere Geschäftsführerin Elisabeth Born-Gummersbach unser Schatzmeister Rolf Torbohm, unsere Schriftführerin Christina Reuther.\n\nDie BG konnte in zwei Jahrzehnten immer wieder neue Mitglieder gewinnen. Wir haben aber auch aus unterschiedlichen Gründen Mitglieder verloren, weil sie den politischen Weg mit uns nicht weiter gehen wollten, weil sie durch Krankheit gehindert wurden, weil sie den Wohnort wechselten oder weil sie verstorben sind Sie alle haben in der Vergangenheit das Bild der BG mitgeprägt\n\nAm Jubiläumstag dürfen wir mit Freude und auch ein wenig Stolz darauf hinweisen, daß unsere Arbeit in den letzten zwanzig Jahren Früchte getragen hat. Wir gaben Denkanstöße im planerischen, schulischen, kulturellen und sozialen Bereich und übten konstruktive Kritik. Aus Zeitmangel können nur einige sichtbare Erfolge heute aufgezählt werden:\n\n- Verhinderung der Westtangente\n- Erfolgreiche Begleitung der Sanierungsbetroffenen vor Gericht\n- Aktive Unterstützung der Vorbereitung und Durchführung des Bürgerbegehrens und \n- Bürgerentscheides zum Erhalt des Kommunalbetriebs Werl\n- Errichtung eines Park-und Ride-Platzes an der Autobahn\n- Anregungen von Kreisverkehren (oft belächelt)\n- Unterstützung der Idee von Dr. Koch, ein Gradierwerk im Kurpark zu errichten\n\nWir waren dabei, als Politik und Bevölkerung sich gegen die Giftmülldeponie stemmte und einige von uns finanzierten das Windrad mit, das auf der vorgesehenen Fläche errichtet wurde (Die Mitinitiatorin der Protestbewegung Marion Jakob kam aus unseren Reihen! )\n\nVHS, Musikschule, Bücherei, Krankenhaus, Kulturbahnhof, Agenda, Syntegration, waren und sind uns wichtige Anliegen. Soziale Träger, Vereine und Verbände und die vielen ehrenamtlichen Bürgerinnen und Bürger haben unsere Anerkennung und Unterstützung.\n\n20 Jahre BG bedeutet: auf demokratische Weise mitzuwirken an der Entwicklung der Stadt zum Wohle der Bürgerinnen und Bürger – bedeutet Ringen in der Fraktion um den richtigen Weg, bedeutet, seinem eigenen Gewissen verpflichtet zu sein, bedeutet Erfolge in Ausschüssen und Rat zu erleben, bedeutet auszuhalten, daß ein starkes Netzwerk der politischen Parteien manches vorab in trockene Tücher bringt, bedeutet, daß Anträge abgelehnt und manchmal -o Wunder- später von anderen aufgegriffen werden. Der politische Wettstreit um den besten Weg treibt eben manchmal seltsame Blüten.\n\nWichtig war und ist uns die bürgernahe politische Arbeit. Wenn auch der größte Teil unserer Arbeit nicht ihren Widerhall in der Presse findet, so haben doch viele Wählerinnen und Wähler unsere Arbeit in den letzten zwanzig Jahren gewürdigt und uns deshalb gewählt. Auch zur Zeit sind wir im Rat durch fünf Mandatsträger vertreten. Viele von uns arbeiten in Ausschüssen, Aufsichtsräten und Arbeitskreisen. Die BG hat sich auch der politischen Verantwortung bei der Wahl des Bürgermeisters gestellt: Siegbert May kandidierte vor 5 Jahren als Bürgermeister für die Stadt Werl und konnte 12,3 % der Stimmen erreichen. Auch in diesem Jahr kandidiert er als Bürgermeister und wir wünschen ihm natürlich dafür viel Erfolg.\n\nEs war wichtig und richtig, vor zwanzig Jahren die BG zu gründen. Die Bürgerinnen und Bürger haben eine Alternative gesucht, um sich einzubringen, um politische Arbeit zu gestalten, um ihre eigenen Ideen einbringen zu können. Dieses Angebot haben wir gemacht und die Menschen in dieser Stadt haben uns aufgenommen. Wir haben gezeigt, daß politische Arbeit im demokratischen Staat von jedem geleistet werden kann und muß.\n\nWenn ich heute zurückblicke, dann denke ich mit Freude an die 20 Jahre zurück, und hoffe, daß die politische Arbeit unserer Gruppe weiterhin Früchte trägt und viele Mitstreiterinnen und Mitstreiter für unsere politische Arbeit gewinnt. Damit wir weiterhin erfolgreich für eine gute Zukunft der Stadt Werl eintreten können.\n\nUnd nun möchte ich Siegbert May bitten, einen Blick in die Zukunft zu wagen.\n\nVielen Dank!"
            },
            {
                id: 5,
                titel: 'Grundsatzrede des scheidenden Ratsmitgliedes Walter Mönnighoff zur Haushaltsentwicklung in Werl',
                untertitel: 'Ausschnitt aus der Rede des damaligen Fraktionsvorsitzenden und Ratsherrn Walter Mönnighoff anläßlich seines Ausscheidens aus dem Werler Stadtrat am 30.11.2002 zur Finanzlage der Stadt Werl.',
                img: require('../assets/presssearchiv/Walter Mönnighoff.jpg'),
                text: 'Liebe Freunde!\n' +
                    'Die heutige Klausurtagung der BG Werl soll Rückblick und Ausblick auf die Finanzpolitik unserer Stadt gewähren. Sie fällt zusammen mit meinem Abschied aus der kommunalen Tätigkeit in der Stadt.\n' +
                    '\n' +
                    'Gestatten Sie mir daher einen subjektiv gefärbten Bericht über die vergangene und voraussichtlich zukünfiige Entwicklung der Finanzlage der Stadt Werl vorzulegen, der beim kritischen Nachlesen vielleicht Diskussionsanstöße zu vermitteln in der Lage ist.\n' +
                    '\n' +
                    'Quid-quid agis, prudenter agas. Et respice finem!\n' +
                    'Was immer du tust, handle klug. Und bedenke das Ende!\n' +
                    '\n' +
                    'Dieser lateinische Wahlspruch (Venhofen) hat mich - neben einer guten betriebswirtschaftlichen Ausbildung auf der Höheren Landbauschule Soest - angeregt, über Finanzpolitik nicht nur im Rahmen von Vorgaben einer Wahlperiode, sondern in ihren weitergehenden finanziellen, sachlichen und personellen Folgekosten - projiziert auf einen längeren Zeitraum - nachzudenken. Sieben Jahre Lehrzeit im Kreis Unna, der Gemeinde Rhynern und in Gremien der Westfälischen Landeskirche führten mich mit Finanzexperten, deren Aussichten nachahmenswert waren, zusammen. Kämmerer Warnke vom Kreis Unna brachte uns bei, im Kreisstraßenbau nicht auf Kreditaufnahme zu setzen, sondern nur die vorhandenen Eigenmittel zu nutzen.\n' +
                    '\n' +
                    'Damals bei höherer Zinslast rechnete er Zins- und Tilgungskosten mit rund 10%, 1 Mio. DM heute kreditiert brachten nach seiner Meinung in 10 Jahren die Belastung von 1 Mio. DM. Unterließ man diese Kreditaufnahme, so hatte man nach 10 Jahren Eigenmittel in gleicher Höhe zur Verfügung. Da er - auf diese Weise seit Jahren handelnd - annähernd ausreichende Eigenmittel angesammelt hatte, folgten wir seinen Vorstellungen. Gemeindedirektor Schüerhoff, Rhynern verfolgte eine übervorsichtige Finanzpolitik. Er musste zu investiven Maßnahmen förmlich gedrängt werden. Die Gemeinde Rhynern war der einzige der im Umfeld von Hamm liegenden Orte, der einen Haushaltsüberschuss in die neuzubildende Großstadt einbrachte! Finanzausschussvorsitzender Pfarrer Limberg führte den armen Kirchenkreis Hamm über eine Finanzgemeinschaft aller Kirchengemeinden durch Sparsamkeit zu einem der finanziell bestsituierten Kirchenkreise der Landeskirche von Westfalen. Er legte aus allgemeinen Einkünften eine Baurücklage an, über die er mit Argusaugen wachte und fast ohne Kreditaufnahmen berechtigte Bauwünsche der Ortsgemeinden aus der Rücklage finanzierte. Er war es auch, der mich in die gute Finanzpolitik der Landeskirche einführte und mir späterhin manchen Rat erteilte. Solcherart vorbereitet saß ich als Zuhörer im Rathaussaal der Stadt Werl, als die zweite Stufe der Neuordnung, Rhynern zur Auflösung vorschlug und Hilbeck von Werl beansprucht wurde. Mit Freude erfuhr ich dort von der geringen Verschuldung der Stadt (18 Mio. DM). Gute Aussichten?\n' +
                    '\n' +
                    'Im März 1975 in den Stadtrat gewählt, musste ich feststellen, dass die Verschuldung in kürzester Zeit gewaltig hochgetrieben worden war und in der mittelfristigen Finanzplanung 10 - 12 Mio. DM an jährlicher durchschnittlicher Kreditaufnahme vorgesehen war. Ohne Rücksprache mit der Fraktion habe ich damals in öffentlicher Sitzung diese Finanzpolitik als nicht tragbar bezeichnet und dem Haushaltsentwurf nicht zugestimmt. Über das Ansinnen, wieder Kanalanschlussbeiträge einzuführen und Abschreibungsbeiträge zur Reinvestition zu verwenden, um Kreditaufnahmen zu vermindern, kam es zum hefligen Streit mit Stadtdirektor Dirkmann und Teilen der Fraktion. Zitate: ,,Wir passen unsere Einnahmen den Ausgaben an!" ,,Du hast uns gut über betriebswirtschafiliche Kostenrechnungen zu informieren versucht, aber verstanden haben wir dies nicht!!" ,,Warum willst du uns hindern, Kredite aufzunehmen, in 20 Jahren spricht kein Mensch mehr darüber!" All dies wollte mich veranlassen, aus den ersten Reihen der Fraktion, in die ich als Stellvertretender Bürgermeister gerutscht war, in die Hinterbank zu wechseln. Dies ahnend, boten mir Willi Risken und H. -H. Meermann die Funktion des Finanzsprechers an. Ich nahm an, weil ich in grenzenloser Selbstüberschätzung vermutete, mich der Aufgabe gewachsen erzeigen zu können. Die Kanalanschlussbeiträge wurden nicht wieder eingeführt. Es gelang nicht durchzusetzen, die Abschreibungseinnahmen zur Kreditminderung einzusetzen, sie dienten weiterhin zur Befriedigung konsumtiver Ausgaben. Es blieb die direkte Verringerung von Kreditaufnahmen durch Verschiebung und Unterlassung von investiven Aufgaben, die von der Fraktion mitgetragen wurden. Mein Ziel war es, Kreditminderungen in Höhe der Abschreibungssätze aus den kostenrechnenden Einrichtungen in den jährlichen Haushaltsansätzen zu erreichen,\n' +
                    '\n' +
                    'Die Verwaltung zog im Gegensatz zur Fraktion nicht mit und brachte in schöner Regelmäßigkeit über Nachtragshaushaltspläne neue ,,unabweisbare" Investitionswünsche ein, die erhöhte Kreditaufnahmen erforderlich machten. Nach etlichen Jahren gab ich frustriert auf und erklärte, in der Finanzpolitik nicht mehr agieren zu wollen, sondern nur noch die Haushaltspläne kritisch kommentierend zu begleiten. In dieser Zeit überschlugen sich Politik und Verwaltung mit immer neuen Investitionswünschen, die erhebliche Kreditaufnahmen erforderlich machten. Meine kritischen Anmerkungen in den Haushaltsreden (ich sprach von gefährlicher Gratwanderung) wurden von Fraktion und Verwaltung nicht ernst genommen, da gelegentlich auftretende unausgeglichene Jahresetats in den nächsten Jahren durch stark steigende Gewerbesteuereinnahmen ausgeglichen wurden. (Mein Kommentar dazu: Die Wirtschaft deckt unsere Fehler zu.)\n' +
                    '\n' +
                    'Als ersichtlich wurde, dass die Kosten der deutschen Einheit nicht allein aus Bundesmitteln getragen werden, sondern Länder und Kommunen mit hohen Beiträgen beteiligt werden würden, Werl etwa direkt mit geschätzten 1 Mio. DM und weiteren Belastungen über Weitergabe der Kosten durch Land und Landschaftsverband und Kreis, begann ich wieder zu agieren. Meine Vorschläge betrafen die städtischen Anteile an den Gebühren und die Zinsberechnung in den Gebührensatzungen nach dem Wiederbeschaffungszeitwert. Ersteres wurde von Rat und Verwaltung sofort akzeptiert. Das andere vom Rat zunächst abgelehnt, dann aber von der Verwaltung selbst aufgegriffen. (,,Warum sind wir nicht selbst darauf gekommen?") Die Aktionen sollten 1,3 Mio. DM jährlich insgesamt erbringen, nach neuen rechtlichen Urteilen trat eine Begrenzung des Einnahmegewinnes auf etwa 600 000 - 700 000 DM ein. Meiner inständigen Bitte, diesen jährlichen Betrag zur Kreditminderung zu verwenden, wurde nur in einem Jahr stattgegeben.\n' +
                    '\n' +
                    'Da aber inzwischen der Verwaltungshaushalt defizitär geworden war, half diese Summe - dann allerdings unbemerkt - Kassenkredite (Kontokorrent) einzusparen. Der große Wurf, etwa 1,5 Mio. DM im Jahresschnitt durch richtigen Einsatz der Abschreibungserlöse an Krediten einzusparen, ist nicht gelungen. In den 27 Jahren, die ich in Werl überschaue, wären das etwa 40 Mio. DM gewesen, mit einer jährlichen Zins- und Tilgungsersparnis von durchschnittlich 7% nach heutigem Zinsniveau. Im Halbzeitwert gerechnet hätten gut 35 Mio. DM aus eingesparten Zinsund Tilgungsleistungen als Investitionseigenmittel oder aber zur Kassenkreditminderung zur Verfügung gestanden. Positiv verblieben sind aber etwa 6 - 7 Mio. DM aus städtischen Mehreinnahmen an Gebühren zur Entlastung der Kassenkredite.\n' +
                    '\n' +
                    'Ich habe diese Ausführungen nicht gemacht, um mir selbst einen Orden an die Brust zu heften, mit dem Hinweis: Hättet ihr, so wäre das! Ich will damit die Hinweise eines meiner Lehrer (Kämmerer Warnke) über die Nachhaltigkeit von Finanzbeschlüssen über eine Wahlperiode hinaus, die ich eingangs schilderte, belegen und zum Bedenken weitergeben.\n' +
                    '\n' +
                    'Mit dem Vorgenannten ist der hausgemachte Anteil an der Finanzmisere unserer Stadt belegt worden!\n' +
                    '\n' +
                    'Äußere Einflüsse über den Bund, das Land NRW und den Kreis haben ebenfalls negative Wirkungen auf die Etats der Stadt genommen. Zur Erinnerung 1974 Kreditvolumen Kemhaushalt 18 Mio. DM Stadtwerke geschätzt 2 Mio. DM Gesamtverschuldung 20 Mio. DM 2002 Endenach DM gerechnet Investitionskredite (Kemhaushalt) 78 Mio. DM Kassenkredite für Haushaltsfehlbeträge 62 Mio. DM Kredit in Sondervermögen (KBW) 88 Mio. DM BBG 25 Mio. DM GWS 20 Mio. DM Stadtwerke 7 Mio. DM Gesamtverschuldung Ende 2002 280 Mio. DM.\n' +
                    '\n' +
                    'BBG und Stadtwerke erkenne ich eine saubere Haushaltsführung zu. Investitionssteuerung und Abschreibungspraxis sind meines Wissen in Ordnung. Es bleibt zu hoffen, dass der Gewinntransfer der Stadtwerke zur BBG steuerbegünstigt bleibt! Eine Gewinnabführung der BBG an den Kemhaushalt trotz eintretender Steuerpflicht dafür, sollte weiterhin angestrebt werden. Eine Beurteilung der GWS ist mir wegen fehlender Kenntnis nicht möglich. Es sollte, wenn irgend möglich, angestrebt werden, die GWS (mit Stadthalle) ohne städtischen Zuschuss zu fahren. Der KBW befindet sich nach dem erfolgreichen Bürgerentscheid - hoffentlich von allen Parteien getragen - in einer Optimierungsphase.\n' +
                    '\n' +
                    'Es ist zu hinterfragen, warum die als Zuführung aus den Rücklagen jährlich deklarierten Abschreibungsbeträge geringer sind, als die vereinnahmten Abschreibungsbeträge der kostenrechnenden Einrichtungen. Die Kredite im Sondervermögen sind über Gebühreneinnahmen gedeckt. Starker Gebührenanstieg bei beschleunigten Investitionen im Abwasserbereich ist zu befürchten. Da die Kredite der BBG, der GWS, der Stadtwerke und des KBW für den Kemhaushalt nicht relevant sind, sollen sie bei der weiteren Betrachtung keine Erwähnung mehr finden. Der Kemhaushalt weist wie oben erwähnt Investitionskredite von 78 Mio. DM und Kassenkredite von 62 Mio. DM aus. Nachnchtlich: Netto-Kreditaufnahmen von 2003 - 2005 sind mit 12,6 Mio. DM angegeben. Der Haushalt 2002 weist eine Zins- und Tilgungsverpflichtung von Zinsen der Investitionskredite 4,0 Mio. DM, Zinsen der Kassenkredite 3,2 Mio. DM, Tilgung der Investitionskredite 2,8 Mio. DM insgesamt 10,0 Mio. DM auf.\n' +
                    '\n' +
                    'Diese enorme Summe, die im wesentlichen die Defizite im Verwaltungshaushalt verursacht, wird sich zukünftig weiter erhöhen durch ganzjährige Einrechnung der Kreditaufnahmen des Jahres 2002 und der vorgesehenen Nettokreditaufnahmen in den Folgejahren bis 2005. Die angekündigten Zuweisungsminderungen des Landes für 2003 und die erwartete Erhöhung der Kreisumlagehebesätze (geschätzt insgesamt auf circa 5,0 Mio. DM) und das Rechnungsergebnis 2002 lassen erwarten, dass auch in Zukunft weitere Kassenkredite zum Ausgleich des Verwaltungshaushaltes erforderlich werden.\n' +
                    '\n' +
                    'Trübe Aussichten? Wenn einem das Wasser bis zum Halse steht, dann soll man den Kopf nicht hängen lassen! Dies sagt ein Spruch auf unserem Wochenkalender in der Küche. Es muss unter allen Umständen versucht werden, die zuvor genannten Auflagen für die städtischen Tochtergesellschaften durchzusetzen, um eine wesentliche Entlastung des Verwaltungshaushaltes zu erreichen. Die Optimierung des KBW ist zu beschleunigen. Abschreibungsbeträge sind zu kontrollieren, schnellere Berechnung und Einzug von Straßenanliegerkosten müssen angestrebt werden. Im Kemhaushalt sind Investitionsmaßnahmen so zu verschieben, dass flexibel gehandhabt - über die nächsten Jahre gesehen - keine Nettoneuverschuldung eintritt.\n' +
                    '\n' +
                    'Es ist zu überprüfen, ob bei der notwendigen Verlangsamung der Stadtentwicklung auch eine Verschlankung des Verwaltungsapparates möglich ist, mit Verringerung des Anstiegs der Personalkostenansätze im Etat. Das Land NRW hebt die fiktiven Hebesätze für die kommunalen Steuern an, dies hat zur Folge, das die realen Hebesätze auch in der Stadt Werl angehoben werden müssen, will man nicht erhebliche Verluste an Zuweisungen des Landes hinnehmen. Eine solche Steuererhöhung für die Bürger unserer Stadt sollte aber nur von uns akzeptiert werden, wenn das Land NRW die vorgenommene Erhöhung der Gewerbesteuerumlage zurücknimmt und auch der Kreis Soest weitere Einsparanstrengungen (auch im Personalbereich) unternimmt, um den Anstieg der Kreisumlagehebesätze in Grenzen zu halten. Ohne Besserung der Konjunkturlage und dadurch höhere Steuereinnahmen ist der originäre Hauhaltsausgleich wohl in Bälde nicht zu schaffen. Die von uns geforderte Verlängerungsfrist zum Defizitausgleich und Abbau der Kassenkredite ist auf eine realistische Zeitschiene zu bringen, ohne das Sparbemühungen zurückgefahren werden.\n' +
                    '\n' +
                    'Wir haben aus den vorherigen Ausführungen gesehen, wie zunächst klein erscheinende jährliche Fehlhandlungen mit Fehlbeträgen sich über die Länge der Jahre zur erdrückenden Last entwickelten. Im Umkehrschluss lässt sich aber auch vermerken, dass kleine Sparschritte, konsequent über Jahre durchgehalten, die Schritte zur Besserung der Finanzlage einleiten und langsam den Berg abbauen, der sich an Kassenkrediten angesammelt hat.\n' +
                    '\n' +
                    'Dies muss das Ziel sein. Es kann nur langfristig angesetzt werden, will man nicht alle kulturellen und sozialen Ansatze im Haushalt rigoros beschneiden, was nicht angestrebt werden darf Vorsichtige Ansätze unter Stadtdirektor Lipphardt, der erfolgreich die Nettokreditaufniahme zunächst auf 0 setzte und dann sogar Kreditrückführung im Investitionshaushalt bewirkte, sind leider nicht fortgeführt werden. Hier gilt es erneut anzusetzen.\n' +
                    '\n' +
                    'Durch die Fehlhandlungen der Vergangenheit ist der städtische Haushalt desolat geworden. Unsere Bürger werden durch Steuererhöhungen und Gebührenanstieg arg belastet werden, um einen völligen Zusammenbruch der Etats zu verhindern. Richtige Maßnahmen helfen diese Belastungen hoffentlich in tragbaren Grenzen zu halten. Es ist m.E. darauf zu achten, dass nicht einzelne Bürger besonders getroffen werden. Dies geschieht heute schon durch den Rückzug der Stadt aus der Beteiligung an den Erschließungskosten in Baugebieten, bei gleichbleibender Gebührenbelastung für alle Nutzer von städtischen Anlagen. Größere Ungerechtigkeiten wird es geben, wenn dazu zusätzlich noch außerhalb von Baugebieten liegende Infrastrukturmaßnahmen der Stadt auf die neuen Bauwilligen allein umgelegt werden sollen, ohne Beteiligung der Altbürger. Die Erschließungskosten pendeln sich dann auf den Marktpreis von Baugrundstücken zu (Enteignung zum Nulltarif?). Auf die Entwicklung der Erschließungsbeiträge ist durch Einwirkung auf Erschließungsstandards Einfluß zu nehmen. (O-Ton Graf Brühl: ,,Abrundung der Ecken von Eckgrundstücken" ändert die Deklaration dieser Grundstücke nicht. Dieser Hinweis zeigt aber, wie geringwertig Gerechtigkeit von der Mehrheitsfraktion gehalten wird.)\n' +
                    '\n' +
                    'Am Ende meiner kommunalpolitischen Tätigkeit wollte ich Ihnen meine persönliche Sicht der Dinge, die wir in manchen Sitzungen teilweise schon erörtert haben, in der Zusammenfassung wieder oder auch neu schriftlich zur Verfügung stellen.\n' +
                    '\n' +
                    'Ich bitte um Kenntnisnahme!',
                datum: '30.11.2002',
                autor: 'Dieter Riewe'
            }


        ]


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
