import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as Diff from "diff";

export default class App extends React.Component {
  state = {
    textLeft: "",
    res: undefined,
    longestLength: 0
  };

  _handleCallData = () => {
    const res = Diff.diffSentences(LeftText, RightText);
    // console.log(res.length);
    var newResAdded = [];
    var newResRemoved = [];

    res.forEach(element => {
      if (element.added) {
        newResAdded.push(element);
      } else if (element.removed) {
        newResRemoved.push(element);
      }
    });

    // console.log(newResAdded);
    // console.log(newResRemoved);
    this.setState({
      textLeft: newResAdded,
      textRight: newResRemoved,
      res: res,
      longestLength:
        newResAdded.length >= newResRemoved.length ? newResAdded : newResRemoved
    });
  };

  componentDidMount() {
    this._handleCallData();
  }
  render() {
    if (this.state.textLeft.length !== 0) {
      return (
        <div style={{}}>
          <div
            style={{
              "border-width": "1px",
              "border-style": "dotted",
              "border-color": "black",
              position: "absolute",
              // flex: 1,
              left: "50vw",
              height: "3000px"
            }}
          />
          <div
            style={{
              "border-width": "2px",
              "border-style": "solid",

              // width: "100vw",
              height: "70px",
              "background-color": "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h2
              style={{
                color: "white",
                margin: 0,
                top: 0,
                "margin-top": 0,
                padding: 0
              }}
            >
              Bundesgesetz über den Datenschutz (DSG)
            </h2>
            <div
              style={{
                // "border-width": "2px",
                // "border-style": "solid",
                // "border-color": "red",
                width: "100%",
                "justify-content": "space-evenly",
                display: "flex",
                "flex-direction": "row",
                margin: 0,
                top: 0,
                "margin-top": 0,
                padding: 0
                // height: "20px"
              }}
            >
              <p
                style={{
                  color: "white",
                  margin: 0,
                  top: 0,
                  "margin-top": 0,
                  padding: 0
                }}
              >
                Stand am 1. Januar 2014
              </p>
              <p
                style={{
                  color: "white",
                  margin: 0,
                  top: 0,
                  "margin-top": 0,
                  padding: 0
                }}
              >
                Stand am 1. März 2019
              </p>
            </div>
          </div>
          <div className="App">
            {/* {this.state.res.map((element, key) => {
            if (element.removed) {
              return (
                <div className="App-headerLeft">
                  <Card key={key} color={"red"} text={key + element.value} />
                </div>
              );
            } else if (element.added) {
              return (
                <div className="App-headerRight">
                  <Card key={key} color={"green"} text={key + element.value} />
                </div>
              );
            }
          })} */}
            {this.state.longestLength.map(
              (item, key) =>
                key < 20 &&
                key > 0 && (
                  <div className="Messages">
                    {/* {key < 20 && console.log(key + this.state.textLeft[key].value)} */}

                    {/* {this.state.textLeft.map((line, key) => ( */}
                    <Card
                      key={key}
                      color={"rgba(229,256,237,1"}
                      text={key + this.state.textLeft[key].value}
                    />
                    <Card
                      key={key}
                      color={"rgba(255,238,240,1"}
                      text={key + this.state.textRight[key].value}
                    />
                  </div>
                )
            )}

            {/* <div className="App-headerRight">
            {this.state.textRight.map((line, key) => (
              //console.log(line.value, key)
              // <p key={key}>{line.value}</p>
              <Card
                key={key}
                color={"rgba(229,256,237,1)"}
                text={key + line.value}
              />
            ))}
          </div> */}
          </div>{" "}
        </div>
      );
    } else {
      return (
        <div>
          <p>no</p>
        </div>
      );
    }
  }
}

class Card extends React.Component {
  render() {
    return (
      <div
        style={{
          "background-color": this.props.color,
          "border-radius": 10,
          color: "black",
          "text-align": "left",
          padding: "0px 8px"
        }}
        className="CardStyle"
      >
        <p style={{ fontFamily: "Times" }}>{this.props.text}</p>
      </div>
    );
  }
}

const RightText = `1
Bundesgesetz
über den Datenschutz
(DSG)
vom 19. Juni 1992 (Stand am 1. Januar 2014)
Die Bundesversammlung der Schweizerischen Eidgenossenschaft,
gestützt auf die Artikel 95, 122 und 173 Absatz 2 der Bundesverfassung1,2
nach Einsicht in die Botschaft des Bundesrates vom 23. März 19883,
beschliesst:
1. Abschnitt: Zweck, Geltungsbereich und Begriffe
Art. 1 Zweck
Dieses Gesetz bezweckt den Schutz der Persönlichkeit und der Grundrechte von Personen, über die Daten bearbeitet werden.
Art. 2 Geltungsbereich
1 Dieses Gesetz gilt für das Bearbeiten von Daten natürlicher und juristischer Personen durch:
a. private Personen;
b. Bundesorgane.
2 Es ist nicht anwendbar auf:
a. Personendaten, die eine natürliche Person ausschliesslich zum persönlichen
Gebrauch bearbeitet und nicht an Aussenstehende bekannt gibt;
b. Beratungen in den Eidgenössischen Räten und in den parlamentarischen
Kommissionen;
c. hängige Zivilprozesse, Strafverfahren, Verfahren der internationalen Rechtshilfe sowie staats- und verwaltungsrechtliche Verfahren mit Ausnahme erstinstanzlicher Verwaltungsverfahren;
d. öffentliche Register des Privatrechtsverkehrs;
e. Personendaten, die das Internationale Komitee vom Roten Kreuz bearbeitet.

 AS 1993 1945 1 SR 101 2 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 3 BBl 1988 II 413
235.1
Datenschutz
2
235.1
Art. 3 Begriffe
Die folgenden Ausdrücke bedeuten:
a. Personendaten (Daten): alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen;
b. betroffene Personen: natürliche oder juristische Personen, über die Daten bearbeitet werden;
c. besonders schützenswerte Personendaten: Daten über:
1. die religiösen, weltanschaulichen, politischen oder gewerkschaftlichen
Ansichten oder Tätigkeiten,
2. die Gesundheit, die Intimsphäre oder die Rassenzugehörigkeit,
3. Massnahmen der sozialen Hilfe,
4. administrative oder strafrechtliche Verfolgungen und Sanktionen;
d. Persönlichkeitsprofil: eine Zusammenstellung von Daten, die eine Beurteilung wesentlicher Aspekte der Persönlichkeit einer natürlichen Person erlaubt;
e. Bearbeiten: jeder Umgang mit Personendaten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Beschaffen, Aufbewahren,
Verwenden, Umarbeiten, Bekanntgeben, Archivieren oder Vernichten von
Daten;
f. Bekanntgeben: das Zugänglichmachen von Personendaten wie das Einsichtgewähren, Weitergeben oder Veröffentlichen;
g. Datensammlung: jeder Bestand von Personendaten, der so aufgebaut ist, dass
die Daten nach betroffenen Personen erschliessbar sind;
h. Bundesorgane: Behörden und Dienststellen des Bundes sowie Personen, soweit sie mit öffentlichen Aufgaben des Bundes betraut sind;
i.4 Inhaber der Datensammlung: private Personen oder Bundesorgane, die über
den Zweck und den Inhalt der Datensammlung entscheiden;
j.5 Gesetz im formellen Sinn:
1. Bundesgesetze,
2. für die Schweiz verbindliche Beschlüsse internationaler Organisationen
und von der Bundesversammlung genehmigte völkerrechtliche Verträge
mit rechtsetzendem Inhalt;
k.6 …

4 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 5 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 6 Aufgehoben durch Ziff. I des BG vom 24. März 2006, mit Wirkung seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Bundesgesetz
3
235.1
2. Abschnitt: Allgemeine Datenschutzbestimmungen
Art. 4 Grundsätze
1 Personendaten dürfen nur rechtmässig bearbeitet werden.7
2 Ihre Bearbeitung hat nach Treu und Glauben zu erfolgen und muss verhältnismässig sein.
3 Personendaten dürfen nur zu dem Zweck bearbeitet werden, der bei der Beschaffung angegeben wurde, aus den Umständen ersichtlich oder gesetzlich vorgesehen
ist.
4 Die Beschaffung von Personendaten und insbesondere der Zweck ihrer Bearbeitung
müssen für die betroffene Person erkennbar sein.8
5 Ist für die Bearbeitung von Personendaten die Einwilligung der betroffenen Person
erforderlich, so ist diese Einwilligung erst gültig, wenn sie nach angemessener Information freiwillig erfolgt. Bei der Bearbeitung von besonders schützenswerten
Personendaten oder Persönlichkeitsprofilen muss die Einwilligung zudem ausdrücklich erfolgen.9
Art. 5 Richtigkeit der Daten
1 Wer Personendaten bearbeitet, hat sich über deren Richtigkeit zu vergewissern. Er
hat alle angemessenen Massnahmen zu treffen, damit die Daten berichtigt oder
vernichtet werden, die im Hinblick auf den Zweck ihrer Beschaffung oder Bearbeitung unrichtig oder unvollständig sind.10
2 Jede betroffene Person kann verlangen, dass unrichtige Daten berichtigt werden.
Art. 611 Grenzüberschreitende Bekanntgabe
1 Personendaten dürfen nicht ins Ausland bekannt gegeben werden, wenn dadurch
die Persönlichkeit der betroffenen Personen schwerwiegend gefährdet würde, namentlich weil eine Gesetzgebung fehlt, die einen angemessenen Schutz gewährleistet.
2 Fehlt eine Gesetzgebung, die einen angemessenen Schutz gewährleistet, so können
Personendaten ins Ausland nur bekannt gegeben werden, wenn:

7 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 8 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 9 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 10 Zweiter Satz eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit
1. Jan. 2008 (AS 2007 4983; BBl 2003 2101). 11 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz
4
235.1
a. hinreichende Garantien, insbesondere durch Vertrag, einen angemessenen
Schutz im Ausland gewährleisten;
b. die betroffene Person im Einzelfall eingewilligt hat;
c. die Bearbeitung in unmittelbarem Zusammenhang mit dem Abschluss oder
der Abwicklung eines Vertrags steht und es sich um Personendaten des Vertragspartners handelt;
d. die Bekanntgabe im Einzelfall entweder für die Wahrung eines überwiegenden öffentlichen Interesses oder für die Feststellung, Ausübung oder Durchsetzung von Rechtsansprüchen vor Gericht unerlässlich ist;
e. die Bekanntgabe im Einzelfall erforderlich ist, um das Leben oder die körperliche Integrität der betroffenen Person zu schützen;
f. die betroffene Person die Daten allgemein zugänglich gemacht und eine Bearbeitung nicht ausdrücklich untersagt hat;
g. die Bekanntgabe innerhalb derselben juristischen Person oder Gesellschaft
oder zwischen juristischen Personen oder Gesellschaften, die einer einheitlichen Leitung unterstehen, stattfindet, sofern die Beteiligten Datenschutzregeln unterstehen, welche einen angemessenen Schutz gewährleisten.
3 Der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (Beauftragte,
Art. 26) muss über die Garantien nach Absatz 2 Buchstabe a und die Datenschutzregeln nach Absatz 2 Buchstabe g informiert werden. Der Bundesrat regelt die Einzelheiten dieser Informationspflicht.
Art. 7 Datensicherheit
1 Personendaten müssen durch angemessene technische und organisatorische Massnahmen gegen unbefugtes Bearbeiten geschützt werden.
2 Der Bundesrat erlässt nähere Bestimmungen über die Mindestanforderungen an die
Datensicherheit.
Art. 7a12
Art. 8 Auskunftsrecht
1 Jede Person kann vom Inhaber einer Datensammlung Auskunft darüber verlangen,
ob Daten über sie bearbeitet werden.
2 Der Inhaber der Datensammlung muss der betroffenen Person mitteilen:13

12 Eingefügt durch Ziff. I des BG vom 24. März 2006 (AS 2007 4983; BBl 2003 2101).
Aufgehoben durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, mit Wirkung seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 13 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Bundesgesetz
5
235.1
a.14 alle über sie in der Datensammlung vorhandenen Daten einschliesslich der
verfügbaren Angaben über die Herkunft der Daten;
b. den Zweck und gegebenenfalls die Rechtsgrundlagen des Bearbeitens sowie
die Kategorien der bearbeiteten Personendaten, der an der Sammlung Beteiligten und der Datenempfänger.
3 Daten über die Gesundheit kann der Inhaber der Datensammlung der betroffenen
Person durch einen von ihr bezeichneten Arzt mitteilen lassen.
4 Lässt der Inhaber der Datensammlung Personendaten durch einen Dritten bearbeiten, so bleibt er auskunftspflichtig. Der Dritte ist auskunftspflichtig, wenn er den
Inhaber nicht bekannt gibt oder dieser keinen Wohnsitz in der Schweiz hat.
5 Die Auskunft ist in der Regel schriftlich, in Form eines Ausdrucks oder einer Fotokopie sowie kostenlos zu erteilen. Der Bundesrat regelt die Ausnahmen.
6 Niemand kann im Voraus auf das Auskunftsrecht verzichten.
Art. 915 Einschränkung des Auskunftsrechts
1 Der Inhaber der Datensammlung kann die Auskunft verweigern, einschränken oder
aufschieben, soweit:
a. ein Gesetz im formellen Sinn dies vorsieht;
b. es wegen überwiegender Interessen Dritter erforderlich ist.
2 Ein Bundesorgan kann zudem die Auskunft verweigern, einschränken oder aufschieben, soweit:
a. es wegen überwiegender öffentlicher Interessen, insbesondere der inneren
oder äusseren Sicherheit der Eidgenossenschaft, erforderlich ist;
b. die Auskunft den Zweck einer Strafuntersuchung oder eines andern Untersuchungsverfahrens in Frage stellt.
3 Sobald der Grund für die Verweigerung, Einschränkung oder Aufschiebung einer
Auskunft wegfällt, muss das Bundesorgan die Auskunft erteilen, ausser dies ist
unmöglich oder nur mit einem unverhältnismässigen Aufwand möglich.
4 Der private Inhaber einer Datensammlung kann zudem die Auskunft verweigern,
einschränken oder aufschieben, soweit eigene überwiegende Interessen es erfordern
und er die Personendaten nicht Dritten bekannt gibt.
5 Der Inhaber der Datensammlung muss angeben, aus welchem Grund er die Auskunft verweigert, einschränkt oder aufschiebt.

14 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 15 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 
Datenschutz
6
235.1
Art. 10 Einschränkungen des Auskunftsrechts für Medienschaffende
1 Der Inhaber einer Datensammlung, die ausschliesslich für die Veröffentlichung im
redaktionellen Teil eines periodisch erscheinenden Mediums verwendet wird, kann
die Auskunft verweigern, einschränken oder aufschieben, soweit:
a. die Personendaten Aufschluss über die Informationsquellen geben;
b. Einblick in Entwürfe für Publikationen gegeben werden müsste;
c. die freie Meinungsbildung des Publikums gefährdet würde.
2 Medienschaffende können die Auskunft zudem verweigern, einschränken oder aufschieben, wenn ihnen eine Datensammlung ausschliesslich als persönliches Arbeitsinstrument dient.
Art. 10a16 Datenbearbeitung durch Dritte
1 Das Bearbeiten von Personendaten kann durch Vereinbarung oder Gesetz Dritten
übertragen werden, wenn:
a. die Daten nur so bearbeitet werden, wie der Auftraggeber selbst es tun dürfte; und
b. keine gesetzliche oder vertragliche Geheimhaltungspflicht es verbietet.
2 Der Auftraggeber muss sich insbesondere vergewissern, dass der Dritte die Datensicherheit gewährleistet.
3 Dritte können dieselben Rechtfertigungsgründe geltend machen wie der Auftraggeber.
Art. 1117 Zertifizierungsverfahren
1 Um den Datenschutz und die Datensicherheit zu verbessern, können die Hersteller
von Datenbearbeitungssystemen oder -programmen sowie private Personen oder
Bundesorgane, die Personendaten bearbeiten, ihre Systeme, Verfahren und ihre
Organisation einer Bewertung durch anerkannte unabhängige Zertifizierungsstellen
unterziehen.
2 Der Bundesrat erlässt Vorschriften über die Anerkennung von Zertifizierungsverfahren und die Einführung eines Datenschutz-Qualitätszeichens. Er berücksichtigt
dabei das internationale Recht und die international anerkannten technischen Normen.

16 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 17 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Bundesgesetz
7
235.1
Art. 11a18 Register der Datensammlungen
1 Der Beauftragte führt ein Register der Datensammlungen, das über Internet zugänglich ist. Jede Person kann das Register einsehen.
2 Bundesorgane müssen sämtliche Datensammlungen beim Beauftragten zur Registrierung anmelden.
3 Private Personen müssen Datensammlungen anmelden, wenn:
a. regelmässig besonders schützenswerte Personendaten oder Persönlichkeitsprofile bearbeitet werden; oder
b. regelmässig Personendaten an Dritte bekannt gegeben werden.
4 Die Datensammlungen müssen angemeldet werden, bevor sie eröffnet werden.
5 Entgegen den Bestimmungen der Absätze 2 und 3 muss der Inhaber von Datensammlungen seine Sammlungen nicht anmelden, wenn:
a. private Personen Daten aufgrund einer gesetzlichen Verpflichtung bearbeiten;
b. der Bundesrat eine Bearbeitung von der Anmeldepflicht ausgenommen hat,
weil sie die Rechte der betroffenen Personen nicht gefährdet;
c. er die Daten ausschliesslich für die Veröffentlichung im redaktionellen Teil
eines periodisch erscheinenden Mediums verwendet und keine Daten an
Dritte weitergibt, ohne dass die betroffenen Personen davon Kenntnis haben;
d. die Daten durch Journalisten bearbeitet werden, denen die Datensammlung
ausschliesslich als persönliches Arbeitsinstrument dient;
e. er einen Datenschutzverantwortlichen bezeichnet hat, der unabhängig die betriebsinterne Einhaltung der Datenschutzvorschriften überwacht und ein Verzeichnis der Datensammlungen führt;
f. er aufgrund eines Zertifizierungsverfahrens nach Artikel 11 ein DatenschutzQualitätszeichen erworben hat und das Ergebnis der Bewertung dem Beauftragten mitgeteilt wurde.
6 Der Bundesrat regelt die Modalitäten der Anmeldung der Datensammlungen, der
Führung und der Veröffentlichung des Registers sowie die Stellung und die Aufgaben der Datenschutzverantwortlichen nach Absatz 5 Buchstabe e und die Veröffentlichung eines Verzeichnisses der Inhaber der Datensammlungen, welche nach
Absatz 5 Buchstaben e und f der Meldepflicht enthoben sind.

18 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz
8
235.1
3. Abschnitt: Bearbeiten von Personendaten durch private Personen
Art. 12 Persönlichkeitsverletzungen
1 Wer Personendaten bearbeitet, darf dabei die Persönlichkeit der betroffenen Personen nicht widerrechtlich verletzen.
2 Er darf insbesondere nicht:
a. Personendaten entgegen den Grundsätzen der Artikel 4, 5 Absatz 1 und 7
Absatz 1 bearbeiten;
b. ohne Rechtfertigungsgrund Daten einer Person gegen deren ausdrücklichen
Willen bearbeiten;
c. ohne Rechtfertigungsgrund besonders schützenswerte Personendaten oder
Persönlichkeitsprofile Dritten bekanntgeben.19
3 In der Regel liegt keine Persönlichkeitsverletzung vor, wenn die betroffene Person
die Daten allgemein zugänglich gemacht und eine Bearbeitung nicht ausdrücklich
untersagt hat.
Art. 13 Rechtfertigungsgründe
1 Eine Verletzung der Persönlichkeit ist widerrechtlich, wenn sie nicht durch Einwilligung des Verletzten, durch ein überwiegendes privates oder öffentliches Interesse oder durch Gesetz gerechtfertigt ist.
2 Ein überwiegendes Interesse der bearbeitenden Person fällt insbesondere in Betracht, wenn diese:
a. in unmittelbarem Zusammenhang mit dem Abschluss oder der Abwicklung
eines Vertrags Personendaten über ihren Vertragspartner bearbeitet;
b. mit einer anderen Person in wirtschaftlichem Wettbewerb steht oder treten
will und zu diesem Zweck Personendaten bearbeitet, ohne diese Dritten bekannt zu geben;
c. zur Prüfung der Kreditwürdigkeit einer anderen Person weder besonders
schützenswerte Personendaten noch Persönlichkeitsprofile bearbeitet und
Dritten nur Daten bekannt gibt, die sie für den Abschluss oder die Abwicklung eines Vertrages mit der betroffenen Person benötigen;
d. beruflich Personendaten ausschliesslich für die Veröffentlichung im redaktionellen Teil eines periodisch erscheinenden Mediums bearbeitet;
e. Personendaten zu nicht personenbezogenen Zwecken insbesondere in der
Forschung, Planung und Statistik bearbeitet und die Ergebnisse so veröffentlicht, dass die betroffenen Personen nicht bestimmbar sind;
f. Daten über eine Person des öffentlichen Lebens sammelt, sofern sich die Daten auf das Wirken dieser Person in der Öffentlichkeit beziehen.

19 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Bundesgesetz
9
235.1
Art. 1420 Informationspflicht beim Beschaffen von besonders schützenswerten
Personendaten und Persönlichkeitsprofilen
1 Der Inhaber der Datensammlung ist verpflichtet, die betroffene Person über die
Beschaffung von besonders schützenswerten Personendaten oder Persönlichkeitsprofilen zu informieren; diese Informationspflicht gilt auch dann, wenn die Daten bei
Dritten beschafft werden.
2 Der betroffenen Person sind mindestens mitzuteilen:
a. der Inhaber der Datensammlung;
b. der Zweck des Bearbeitens;
c. die Kategorien der Datenempfänger, wenn eine Datenbekanntgabe vorgesehen ist.
3 Werden die Daten nicht bei der betroffenen Person beschafft, so hat deren Information spätestens bei der Speicherung der Daten oder, wenn die Daten nicht gespeichert werden, mit ihrer ersten Bekanntgabe an Dritte zu erfolgen.
4 Die Informationspflicht des Inhabers der Datensammlung entfällt, wenn die betroffene Person bereits informiert wurde oder, in Fällen nach Absatz 3, wenn:
a. die Speicherung oder die Bekanntgabe der Daten ausdrücklich im Gesetz
vorgesehen ist; oder
b. die Information nicht oder nur mit unverhältnismässigem Aufwand möglich
ist.
5 Der Inhaber der Datensammlung kann die Information unter den in Artikel 9 Absätze 1 und 4 genannten Voraussetzungen verweigern, einschränken oder aufschieben.
Art. 1521 Rechtsansprüche
1 Klagen zum Schutz der Persönlichkeit richten sich nach den Artikeln 28, 28a sowie
28l des Zivilgesetzbuchs22. Die klagende Partei kann insbesondere verlangen, dass
die Datenbearbeitung gesperrt wird, keine Daten an Dritte bekannt gegeben oder die
Personendaten berichtigt oder vernichtet werden.
2 Kann weder die Richtigkeit noch die Unrichtigkeit von Personendaten dargetan
werden, so kann die klagende Partei verlangen, dass bei den Daten ein entsprechender Vermerk angebracht wird.

20 Aufgehoben durch Ziff. I des BG vom 24. März 2006 (AS 2007 4983; BBl 2003 2101).
Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 21 Fassung gemäss Anhang 1 Ziff. II 14 der Zivilprozessordnung vom 19. Dez. 2008, in
Kraft seit 1. Jan. 2011 (AS 2010 1739; BBl 2006 7221). 22 SR 210
Datenschutz
10
235.1
3 Die klagende Partei kann zudem verlangen, dass die Berichtigung, die Vernichtung,
die Sperre, namentlich die Sperre der Bekanntgabe an Dritte, der Vermerk über die
Bestreitung oder das Urteil Dritten mitgeteilt oder veröffentlicht wird.
4 Über Klagen zur Durchsetzung des Auskunftsrechts entscheidet das Gericht im
vereinfachten Verfahren nach der Zivilprozessordnung vom 19. Dezember 200823.
4. Abschnitt: Bearbeiten von Personendaten durch Bundesorgane
Art. 16 Verantwortliches Organ und Kontrolle24
1 Für den Datenschutz ist das Bundesorgan verantwortlich, das die Personendaten in
Erfüllung seiner Aufgaben bearbeitet oder bearbeiten lässt.
2 Bearbeiten Bundesorgane Personendaten zusammen mit anderen Bundesorganen,
mit kantonalen Organen oder mit Privaten, so kann der Bundesrat die Kontrolle und
Verantwortung für den Datenschutz besonders regeln.25
Art. 17 Rechtsgrundlagen
1 Organe des Bundes dürfen Personendaten bearbeiten, wenn dafür eine gesetzliche
Grundlage besteht.
2 Besonders schützenswerte Personendaten sowie Persönlichkeitsprofile dürfen sie
nur bearbeiten, wenn ein Gesetz im formellen Sinn es ausdrücklich vorsieht oder
wenn ausnahmsweise:
a. es für eine in einem Gesetz im formellen Sinn klar umschriebene Aufgabe
unentbehrlich ist;
b. der Bundesrat es im Einzelfall bewilligt, weil die Rechte der betroffenen Person nicht gefährdet sind; oder
c. die betroffene Person im Einzelfall eingewilligt oder ihre Daten allgemein
zugänglich gemacht und eine Bearbeitung nicht ausdrücklich untersagt hat.26

23 SR 272 24 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 25 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 26 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Bundesgesetz
11
235.1
Art. 17a27 Automatisierte Datenbearbeitung im Rahmen von Pilotversuchen
1 Der Bundesrat kann, nachdem er die Stellungnahme des Beauftragten eingeholt hat,
vor Inkrafttreten eines Gesetzes im formellen Sinn die automatisierte Bearbeitung
von besonders schützenswerten Personendaten oder Persönlichkeitsprofilen bewilligen, wenn:
a. die Aufgaben, die diese Bearbeitung erforderlich machen, in einem Gesetz
im formellen Sinn geregelt sind;
b. ausreichende Massnahmen zur Verhinderung von Persönlichkeitsverletzungen getroffen werden;
c. die praktische Umsetzung einer Datenbearbeitung eine Testphase vor dem
Inkrafttreten des Gesetzes im formellen Sinn zwingend erfordert.
2 Die praktische Umsetzung einer Datenbearbeitung kann eine Testphase dann zwingend erfordern, wenn:
a. die Erfüllung einer Aufgabe technische Neuerungen erfordert, deren Auswirkungen zunächst evaluiert werden müssen;
b. die Erfüllung einer Aufgabe bedeutende organisatorische oder technische
Massnahmen erfordert, deren Wirksamkeit zunächst geprüft werden muss,
insbesondere bei der Zusammenarbeit zwischen Organen des Bundes und der
Kantone; oder
c. sie die Übermittlung von besonders schützenswerten Personendaten oder
Persönlichkeitsprofilen an kantonale Behörden mittels eines Abrufverfahrens
erfordert.
3 Der Bundesrat regelt die Modalitäten der automatisierten Datenbearbeitung in einer
Verordnung.
4 Das zuständige Bundesorgan legt dem Bundesrat spätestens innert zwei Jahren
nach Inbetriebnahme des Pilotsystems einen Evaluationsbericht vor. Es schlägt darin
die Fortführung oder die Einstellung der Bearbeitung vor.
5 Die automatisierte Datenbearbeitung muss in jedem Fall abgebrochen werden,
wenn innert fünf Jahren nach der Inbetriebnahme des Pilotsystems kein Gesetz im
formellen Sinn in Kraft getreten ist, welches die erforderliche Rechtsgrundlage
umfasst.
Art. 18 Beschaffen von Personendaten
1 Bei systematischen Erhebungen, namentlich mit Fragebogen, gibt das Bundesorgan
den Zweck und die Rechtsgrundlage des Bearbeitens, die Kategorien der an der
Datensammlung Beteiligten und der Datenempfänger bekannt.
2 …28

27 Eingefügt durch Ziff. I des BG vom 24. März 2006 (AS 2006 4873; BBl 2003 2101,
2006 3547). Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit
15. Dez. 2006 (AS 2007 4983; BBl 2003 2101). 28 Aufgehoben durch Ziff. I des BG vom 24. März 2006, mit Wirkung seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz
12
235.1
Art. 18a29 Informationspflicht beim Beschaffen von Personendaten
1 Bundesorgane sind verpflichtet, die betroffene Person über die Beschaffung von
Personendaten zu informieren; diese Informationspflicht gilt auch dann, wenn die
Daten bei Dritten beschafft werden.
2 Der betroffenen Person sind mindestens mitzuteilen:
a. der Inhaber der Datensammlung;
b. der Zweck des Bearbeitens;
c. die Kategorien der Datenempfänger, wenn eine Datenbekanntgabe vorgesehen ist;
d. das Auskunftsrecht nach Artikel 8;
e. die Folgen einer Weigerung der betroffenen Person, die verlangten Personendaten anzugeben.
3 Werden die Daten nicht bei der betroffenen Person beschafft, so hat deren Information spätestens bei der Speicherung der Daten oder, wenn die Daten nicht gespeichert werden, mit ihrer ersten Bekanntgabe an Dritte zu erfolgen.
4 Die Informationspflicht der Bundesorgane entfällt, wenn die betroffene Person
bereits informiert wurde oder, in Fällen nach Absatz 3, wenn:
a. die Speicherung oder die Bekanntgabe der Daten ausdrücklich im Gesetz
vorgesehen ist; oder
b. die Information nicht oder nur mit unverhältnismässigem Aufwand möglich
ist.
5 Wenn die Informationspflicht die Wettbewerbsfähigkeit eines Bundesorganes
beeinträchtigen würde, so kann sie der Bundesrat auf die Beschaffung von besonders
schützenswerten Personendaten und von Persönlichkeitsprofilen beschränken.
Art. 18b30 Einschränkung der Informationspflicht
1 Bundesorgane können die Information unter den in Artikel 9 Absätze 1 und 2
genannten Voraussetzungen verweigern, einschränken oder aufschieben.
2 Sobald der Grund für die Verweigerung, Einschränkung oder Aufschiebung wegfällt, sind die Bundesorgane durch die Informationspflicht gebunden, ausser diese ist
unmöglich oder nur mit einem unverhältnismässigen Aufwand zu erfüllen.

29 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 30 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 
Bundesgesetz
13
235.1
Art. 19 Bekanntgabe von Personendaten
1 Bundesorgane dürfen Personendaten nur bekannt geben, wenn dafür eine Rechtsgrundlage im Sinne von Artikel 17 besteht oder wenn:31
a. die Daten für den Empfänger im Einzelfall zur Erfüllung seiner gesetzlichen
Aufgabe unentbehrlich sind;
b.32 die betroffene Person im Einzelfall eingewilligt hat;
c.33 die betroffene Person ihre Daten allgemein zugänglich gemacht und eine Bekanntgabe nicht ausdrücklich untersagt hat; oder
d. der Empfänger glaubhaft macht, dass die betroffene Person die Einwilligung
verweigert oder die Bekanntgabe sperrt, um ihm die Durchsetzung von
Rechtsansprüchen oder die Wahrnehmung anderer schutzwürdiger Interessen
zu verwehren; der betroffenen Person ist vorher wenn möglich Gelegenheit
zur Stellungnahme zu geben.
1bis Bundesorgane dürfen im Rahmen der behördlichen Information der Öffentlichkeit von Amtes wegen oder gestützt auf das Öffentlichkeitsgesetz vom 17. Dezember
200434 auch Personendaten bekannt geben, wenn:
a. die betreffenden Personendaten im Zusammenhang mit der Erfüllung öffentlicher Aufgaben stehen; und
b. an deren Bekanntgabe ein überwiegendes öffentliches Interesse besteht.35
2 Bundesorgane dürfen auf Anfrage Name, Vorname, Adresse und Geburtsdatum
einer Person auch bekannt geben, wenn die Voraussetzungen von Absatz 1 nicht
erfüllt sind.
3 Bundesorgane dürfen Personendaten durch ein Abrufverfahren zugänglich machen,
wenn dies ausdrücklich vorgesehen ist. Besonders schützenswerte Personendaten
sowie Persönlichkeitsprofile dürfen nur durch ein Abrufverfahren zugänglich gemacht werden, wenn ein Gesetz im formellen Sinn es ausdrücklich vorsieht.36
3bis Bundesorgane dürfen Personendaten mittels automatisierter Informations- und
Kommunikationsdienste jedermann zugänglich machen, wenn eine Rechtsgrundlage
die Veröffentlichung dieser Daten vorsieht oder wenn sie gestützt auf Absatz 1bis
Informationen der Öffentlichkeit zugänglich machen. Besteht das öffentliche Inte-

31 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 32 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 33 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 34 SR 152.3 35 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 36 Fassung des zweiten Satzes gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit
1. Jan. 2008 (AS 2007 4983; BBl 2003 2101). 
Datenschutz
14
235.1
resse an der Zugänglichmachung nicht mehr, so sind die betreffenden Daten wieder
aus dem automatisierten Informations- und Kommunikationsdienst zu entfernen.37
4 Das Bundesorgan lehnt die Bekanntgabe ab, schränkt sie ein oder verbindet sie mit
Auflagen, wenn:
a. wesentliche öffentliche Interessen oder offensichtlich schutzwürdige Interessen einer betroffenen Person es verlangen oder
b. gesetzliche Geheimhaltungspflichten oder besondere Datenschutzvorschriften es verlangen.
Art. 20 Sperrung der Bekanntgabe
1 Eine betroffene Person, die ein schutzwürdiges Interesse glaubhaft macht, kann
vom verantwortlichen Bundesorgan verlangen, dass es die Bekanntgabe von bestimmten Personendaten sperrt.
2 Das Bundesorgan verweigert die Sperrung oder hebt sie auf, wenn:
a. eine Rechtspflicht zur Bekanntgabe besteht; oder
b. die Erfüllung seiner Aufgabe sonst gefährdet wäre.
3 Die Sperrung steht unter dem Vorbehalt von Artikel 19 Absatz 1bis.38
Art. 2139 Angebot von Unterlagen an das Bundesarchiv
1 In Übereinstimmung mit dem Archivierungsgesetz vom 26. Juni 199840 bieten die
Bundesorgane dem Bundesarchiv alle Personendaten an, die sie nicht mehr ständig
benötigen.
2 Die Bundesorgane vernichten die vom Bundesarchiv als nicht archivwürdig bezeichneten Personendaten, ausser wenn diese:
a. anonymisiert sind;
b.41 zu Beweis- oder Sicherheitszwecken oder zur Wahrung der schutzwürdigen
Interessen der betroffenen Person aufbewahrt werden müssen.

37 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 38 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 39 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 40 SR 152.1 41 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 
Bundesgesetz
15
235.1
Art. 22 Bearbeiten für Forschung, Planung und Statistik
1 Bundesorgane dürfen Personendaten für nicht personenbezogene Zwecke, insbesondere für Forschung, Planung und Statistik bearbeiten, wenn:
a. die Daten anonymisiert werden, sobald es der Zweck des Bearbeitens erlaubt;
b. der Empfänger die Daten nur mit Zustimmung des Bundesorgans weitergibt;
und
c. die Ergebnisse so veröffentlicht werden, dass die betroffenen Personen nicht
bestimmbar sind.
2 Die Anforderungen der folgenden Bestimmungen müssen nicht erfüllt sein:
a. Artikel 4 Absatz 3 über den Zweck des Bearbeitens
b. Artikel 17 Absatz 2 über die Rechtsgrundlagen für die Bearbeitung von besonders schützenswerten Personendaten und Persönlichkeitsprofilen;
c. Artikel 19 Absatz 1 über die Bekanntgabe von Personendaten.
Art. 23 Privatrechtliche Tätigkeit von Bundesorganen
1 Handelt ein Bundesorgan privatrechtlich, so gelten die Bestimmungen für das
Bearbeiten von Personendaten durch private Personen.
2 Die Aufsicht richtet sich nach den Bestimmungen für Bundesorgane.
Art. 2442
Art. 25 Ansprüche und Verfahren
1 Wer ein schutzwürdiges Interesse hat, kann vom verantwortlichen Bundesorgan
verlangen, dass es:
a. das widerrechtliche Bearbeiten von Personendaten unterlässt;
b. die Folgen eines widerrechtlichen Bearbeitens beseitigt;
c. die Widerrechtlichkeit des Bearbeitens feststellt.
2 Kann weder die Richtigkeit noch die Unrichtigkeit von Personendaten bewiesen
werden, so muss das Bundesorgan bei den Daten einen entsprechenden Vermerk
anbringen.
3 Der Gesuchsteller kann insbesondere verlangen, dass das Bundesorgan:
a. Personendaten berichtigt, vernichtet oder die Bekanntgabe an Dritte sperrt;
b. seinen Entscheid, namentlich die Berichtigung, Vernichtung, Sperre oder den
Vermerk über die Bestreitung Dritten mitteilt oder veröffentlicht.

42 Aufgehoben durch Art. 31 des BG vom 21. März 1997 über Massnahmen zur Wahrung
der inneren Sicherheit (AS 1998 1546; BBl 1994 II 1127). 
Datenschutz
16
235.1
4 Das Verfahren richtet sich nach dem Bundesgesetz vom 20. Dezember 196843 über
das Verwaltungsverfahren (Verwaltungsverfahrensgesetz). Die Ausnahmen von
Artikel 2 und 3 des Verwaltungsverfahrensgesetzes gelten nicht.
5 …44
Art. 25bis 45 Verfahren im Falle der Bekanntgabe von amtlichen
Dokumenten, die Personendaten enthalten
Solange ein Verfahren betreffend den Zugang zu amtlichen Dokumenten im Sinne
des Öffentlichkeitsgesetzes vom 17. Dezember 200446, welche Personendaten enthalten, im Gange ist, kann die betroffene Person im Rahmen dieses Verfahrens die
Rechte geltend machen, die ihr aufgrund von Artikel 25 des vorliegenden Gesetzes
bezogen auf diejenigen Dokumente zustehen, die Gegenstand des Zugangsverfahrens
sind.
5. Abschnitt:
Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter
Art. 2647 Wahl und Stellung
1 Der Beauftragte wird vom Bundesrat für eine Amtsdauer von vier Jahren gewählt.
Die Wahl ist durch die Bundesversammlung zu genehmigen.
2 Das Arbeitsverhältnis des Beauftragten richtet sich, soweit dieses Gesetz nichts
anderes vorsieht, nach dem Bundespersonalgesetz vom 24. März 200048.
3 Der Beauftragte übt seine Funktion unabhängig aus, ohne Weisungen einer Behörde zu erhalten. Er ist der Bundeskanzlei administrativ zugeordnet.
4 Er verfügt über ein ständiges Sekretariat und ein eigenes Budget. Er stellt sein
Personal an.
5 Der Beauftragte untersteht nicht dem Beurteilungssystem nach Artikel 4 Absatz 3
des Bundespersonalgesetzes vom 24. März 2000.

43 SR 172.021 44 Aufgehoben durch Anhang Ziff. 26 des Verwaltungsgerichtsgesetzes vom 17. Juni 2005,
mit Wirkung seit 1. Jan. 2007 (AS 2006 2197; BBl 2001 4202). 45 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 46 SR 152.3 47 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 48 SR 172.220.1
Bundesgesetz
17
235.1
Art. 26a49 Wiederwahl und Beendigung der Amtsdauer
1 Verfügt der Bundesrat nicht spätestens sechs Monate vor Ablauf der Amtsdauer aus
sachlich hinreichenden Gründen die Nichtwiederwahl, so ist der Beauftragte für eine
neue Amtsdauer wiedergewählt.
2 Der Beauftragte kann den Bundesrat unter Einhaltung einer Frist von sechs Monaten um Entlassung auf ein Monatsende ersuchen.
3 Der Bundesrat kann den Beauftragten vor Ablauf der Amtsdauer des Amtes entheben, wenn dieser:
a. vorsätzlich oder grobfahrlässig Amtspflichten schwer verletzt hat; oder
b. die Fähigkeit, das Amt auszuüben, auf Dauer verloren hat.
Art. 26b50 Andere Beschäftigung
Der Bundesrat kann dem Beauftragten gestatten, eine andere Beschäftigung auszuüben, wenn dadurch dessen Unabhängigkeit und dessen Ansehen nicht beeinträchtigt
werden.
Art. 27 Aufsicht über Bundesorgane
1 Der Beauftragte51 überwacht die Einhaltung dieses Gesetzes und der übrigen Datenschutzvorschriften des Bundes durch die Bundesorgane. Der Bundesrat ist von
dieser Aufsicht ausgenommen.
2 Der Beauftragte klärt von sich aus oder auf Meldung Dritter hin den Sachverhalt
näher ab.
3 Bei der Abklärung kann er Akten herausverlangen, Auskünfte einholen und sich
Datenbearbeitungen vorführen lassen. Die Bundesorgane müssen an der Feststellung
des Sachverhaltes mitwirken. Das Zeugnisverweigerungsrecht nach Artikel 16 des
Verwaltungsverfahrensgesetzes52 gilt sinngemäss.
4 Ergibt die Abklärung, dass Datenschutzvorschriften verletzt werden, so empfiehlt
der Beauftragte dem verantwortlichen Bundesorgan, das Bearbeiten zu ändern oder
zu unterlassen. Er orientiert das zuständige Departement oder die Bundeskanzlei
über seine Empfehlung.

49 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 50 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 51 Ausdruck gemäss Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). Diese Änd. ist im ganzen Erlass
berücksichtigt. 52 SR 172.021
Datenschutz
18
235.1
5 Wird eine Empfehlung nicht befolgt oder abgelehnt, so kann er die Angelegenheit
dem Departement oder der Bundeskanzlei zum Entscheid vorlegen. Der Entscheid
wird den betroffenen Personen in Form einer Verfügung mitgeteilt.53
6 Der Beauftragte ist berechtigt, gegen die Verfügung nach Absatz 5 und gegen den
Entscheid der Beschwerdebehörde Beschwerde zu führen.54
Art. 28 Beratung Privater
Der Beauftragte berät private Personen in Fragen des Datenschutzes.
Art. 29 Abklärungen und Empfehlungen im Privatrechtsbereich
1 Der Beauftragte klärt von sich aus oder auf Meldung Dritter hin den Sachverhalt
näher ab, wenn:
a. Bearbeitungsmethoden geeignet sind, die Persönlichkeit einer grösseren Anzahl von Personen zu verletzen (Systemfehler);
b.55 Datensammlungen registriert werden müssen (Art. 11a);
c.56 eine Informationspflicht nach Artikel 6 Absatz 3 besteht.
2 Er kann dabei Akten herausverlangen, Auskünfte einholen und sich Datenbearbeitungen vorführen lassen. Das Zeugnisverweigerungsrecht nach Artikel 16 des Verwaltungsverfahrensgesetzes57 gilt sinngemäss.
3 Der Beauftragte kann aufgrund seiner Abklärungen empfehlen, das Bearbeiten zu
ändern oder zu unterlassen.
4 Wird eine solche Empfehlung des Beauftragten nicht befolgt oder abgelehnt, so
kann er die Angelegenheit dem Bundesverwaltungsgericht zum Entscheid vorlegen.
Er ist berechtigt, gegen diesen Entscheid Beschwerde zu führen.58
Art. 30 Information
1 Der Beauftragte erstattet der Bundesversammlung periodisch sowie nach Bedarf
Bericht. Er übermittelt den Bericht gleichzeitig dem Bundesrat. Die periodischen
Berichte werden veröffentlicht.59

53 Fassung des zweiten Satzes gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit
1. Jan. 2008 (AS 2007 4983; BBl 2003 2101). 54 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 55 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 56 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 57 SR 172.021 58 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 59 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 
Bundesgesetz
19
235.1
2 In Fällen von allgemeinem Interesse kann er die Öffentlichkeit über seine Feststellungen und Empfehlungen informieren. Personendaten, die dem Amtsgeheimnis
unterstehen, darf er nur mit Zustimmung der zuständigen Behörde veröffentlichen.
Verweigert diese die Zustimmung, so entscheidet der Präsident der auf dem Gebiet
des Datenschutzes zuständigen Abteilung des Bundesverwaltungsgerichts endgültig.60
Art. 31 Weitere Aufgaben
1 Der Beauftragte hat insbesondere folgende weiteren Aufgaben:61
a. Er unterstützt Organe des Bundes und der Kantone in Fragen des Datenschutzes.
b. Er nimmt Stellung zu Vorlagen über Erlasse und Massnahmen des Bundes,
die für den Datenschutz erheblich sind.
c. Er arbeitet mit in- und ausländischen Datenschutzbehörden zusammen.
d.62 Er begutachtet, inwieweit die Datenschutzgesetzgebung im Ausland einen
angemessenen Schutz gewährleistet.
e.63 Er prüft die ihm nach Artikel 6 Absatz 3 gemeldeten Garantien und Datenschutzregeln.
f.64 Er prüft die Zertifizierungsverfahren nach Artikel 11 und kann dazu Empfehlungen nach Artikel 27 Absatz 4 oder 29 Absatz 3 abgeben.
g.65 Er nimmt die ihm durch das Öffentlichkeitsgesetz vom 17. Dezember 200466
übertragenen Aufgaben wahr.
2 Er kann Organe der Bundesverwaltung auch dann beraten, wenn dieses Gesetz
nach Artikel 2 Absatz 2 Buchstaben c und d nicht anwendbar ist. Die Organe der
Bundesverwaltung können ihm Einblick in ihre Geschäfte gewähren.
Art. 3267

60 Fassung des Satzes gemäss Anhang Ziff. 26 des Verwaltungsgerichtsgesetzes vom
17. Juni 2005, in Kraft seit 1. Jan. 2007 (AS 2006 2197 1069; BBl 2001 4202). 61 Fassung gemäss Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 62 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 63 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004
(AS 2006 2319; BBl 2003 1963). Fassung gemäss Ziff. I des BG vom 24. März 2006,
in Kraft seit 1. Jan. 2008 (AS 2007 4983; BBl 2003 2101). 64 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 65 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 66 SR 152.3 67 Aufgehoben durch Anhang Ziff. I des BG vom 30. Sept. 2011 über die Forschung am
Menschen, mit Wirkung seit 1. Jan. 2014 (AS 2013 3215; BBl 2009 8045). 
Datenschutz
20
235.1
6. Abschnitt:68 Rechtsschutz
Art. 33
1 Der Rechtsschutz richtet sich nach den allgemeinen Bestimmungen über die Bundesrechtspflege.
2 Stellt der Beauftragte bei einer Sachverhaltsabklärung nach Artikel 27 Absatz 2
oder nach Artikel 29 Absatz 1 fest, dass den betroffenen Personen ein nicht leicht
wieder gutzumachender Nachteil droht, so kann er dem Präsidenten der auf dem
Gebiet des Datenschutzes zuständigen Abteilung des Bundesverwaltungsgerichts
vorsorgliche Massnahmen beantragen. Das Verfahren richtet sich sinngemäss nach
den Artikeln 79–84 des Bundesgesetzes vom 4. Dezember 194769 über den Bundeszivilprozess.
7. Abschnitt: Strafbestimmungen
Art. 34 Verletzung der Auskunfts-, Melde- und Mitwirkungspflichten
1 Mit Busse werden private Personen auf Antrag bestraft:70
a. die ihre Pflichten nach den Artikeln 8–10 und 14 verletzen, indem sie vorsätzlich eine falsche oder eine unvollständige Auskunft erteilen;
b. die es vorsätzlich unterlassen:
1. die betroffene Person nach Artikel 14 Absatz 1 zu informieren, oder
2. ihr die Angaben nach Artikel 14 Absatz 2 zu liefern.71
2 Mit Busse werden private Personen bestraft, die vorsätzlich:72
a.73 die Information nach Artikel 6 Absatz 3 oder die Meldung nach Artikel 11a
unterlassen oder dabei vorsätzlich falsche Angaben machen;
b. dem Beauftragten bei der Abklärung eines Sachverhaltes (Art. 29) falsche
Auskünfte erteilen oder die Mitwirkung verweigern.

68 Fassung gemäss Anhang Ziff. 26 des Verwaltungsgerichtsgesetzes vom 17. Juni 2005,
in Kraft seit 1. Jan. 2007 (AS 2006 2197 1069; BBl 2001 4202). 69 SR 273 70 Fassung gemäss Art. 333 des Strafgesetzbuches in der Fassung des BG vom
13. Dez. 2002, in Kraft seit 1. Jan. 2007 (AS 2006 3459; BBl 1999 1979). 71 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 72 Fassung gemäss Art. 333 des Strafgesetzbuches in der Fassung des BG vom
13. Dez. 2002, in Kraft seit 1. Jan. 2007 (AS 2006 3459; BBl 1999 1979). 73 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Bundesgesetz
21
235.1
Art. 35 Verletzung der beruflichen Schweigepflicht
1 Wer vorsätzlich geheime, besonders schützenswerte Personendaten oder Persönlichkeitsprofile unbefugt bekannt gibt, von denen er bei der Ausübung seines Berufes, der die Kenntnis solcher Daten erfordert, erfahren hat, wird auf Antrag mit
Busse bestraft.74
2 Gleich wird bestraft, wer vorsätzlich geheime, besonders schützenswerte Personendaten oder Persönlichkeitsprofile unbefugt bekannt gibt, von denen er bei der Tätigkeit für den Geheimhaltungspflichtigen oder während der Ausbildung bei diesem
erfahren hat.
3 Das unbefugte Bekanntgeben geheimer, besonders schützenswerter Personendaten
oder Persönlichkeitsprofile ist auch nach Beendigung der Berufsausübung oder der
Ausbildung strafbar.
8. Abschnitt: Schlussbestimmungen
Art. 36 Vollzug
1 Der Bundesrat erlässt die Ausführungsbestimmungen.
2 …75
3 Er kann für die Auskunftserteilung durch diplomatische und konsularische Vertretungen der Schweiz im Ausland Abweichungen von den Artikeln 8 und 9 vorsehen.
4 Er kann ferner bestimmen:
a. welche Datensammlungen ein Bearbeitungsreglement benötigen;
b. unter welchen Voraussetzungen ein Bundesorgan Personendaten durch einen
Dritten bearbeiten lassen oder für Dritte bearbeiten darf;
c. wie die Mittel zur Identifikation von Personen verwendet werden dürfen.
5 Er kann völkerrechtliche Verträge über den Datenschutz abschliessen, wenn sie den
Grundsätzen dieses Gesetzes entsprechen.
6 Er regelt, wie Datensammlungen zu sichern sind, deren Daten im Kriegs- oder Krisenfall zu einer Gefährdung von Leib und Leben der betroffenen Personen führen
können.

74 Fassung gemäss Art. 333 des Strafgesetzbuches in der Fassung des BG vom
13. Dez. 2002, in Kraft seit 1. Jan. 2007 (AS 2006 3459; BBl 1999 1979). 75 Aufgehoben durch Art. 25 des Archivierungsgesetzes vom 26. Juni 1998 (AS 1999 2243;
BBl 1997 II 941). 
Datenschutz
22
235.1
Art. 37 Vollzug durch die Kantone
1 Soweit keine kantonalen Datenschutzvorschriften bestehen, die einen angemessenen Schutz gewährleisten, gelten für das Bearbeiten von Personendaten durch kantonale Organe beim Vollzug von Bundesrecht die Artikel 1–11a, 16, 17, 18–22 und 25
Absätze 1–3 dieses Gesetzes.76
2 Die Kantone bestimmen ein Kontrollorgan, welches für die Einhaltung des Datenschutzes sorgt. Die Artikel 27, 30 und 31 sind sinngemäss anwendbar.
Art. 38 Übergangsbestimmungen
1 Die Inhaber von Datensammlungen müssen bestehende Datensammlungen, die
nach Artikel 11 zu registrieren sind, spätestens ein Jahr nach Inkrafttreten dieses
Gesetzes anmelden.
2 Sie müssen innert einem Jahr nach Inkrafttreten dieses Gesetzes die notwendigen
Vorkehren treffen, damit sie die Auskünfte nach Artikel 8 erteilen können.
3 Bundesorgane dürfen eine bestehende Datensammlung mit besonders schützenswerten Personendaten oder mit Persönlichkeitsprofilen noch bis am 31. Dezember
2000 benützen, ohne dass die Voraussetzungen von Artikel 17 Absatz 2 erfüllt
sind.77
4 Im Asyl- und Ausländerbereich wird die Frist nach Absatz 3 bis zum Inkrafttreten
des totalrevidierten Asylgesetzes vom 26. Juni 199878 sowie der Änderung des
Bundesgesetzes vom 26. März 193179 über Aufenthalt und Niederlassung der Ausländer verlängert.80
Art. 38a81 Übergangsbestimmung zur Änderung vom 19. März 2010
Die Wahl des Beauftragten und die Beendigung seines Arbeitsverhältnisses unterstehen bis zum Ende der Legislaturperiode, in der diese Änderung in Kraft tritt, dem
bisherigen Recht.

76 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 77 Fassung gemäss Ziff. I des BB vom 26. Juni 1998, in Kraft bis 31. Dez. 2000
(AS 1998 1586; BBl 1998 1579 1583). 78 SR 142.31 79 [BS 1 121; AS 1949 221, 1987 1665, 1988 332, 1990 1587 Art. 3 Abs. 2, 1991 362
Ziff. II 11 1034 Ziff. III, 1995 146, 1999 1111 2262 Anhang Ziff. 1, 2000 1891 Ziff. IV 2,
2002 685 Ziff. I 1 701 Ziff. I 1 3988 Anhang Ziff. 3, 2003 4557 Anhang Ziff. II 2,
2004 1633 Ziff. I 1 4655 Ziff. I 1, 2005 5685 Anhang Ziff. 2, 2006 979 Art. 2 Ziff. 1 1931
Art. 18 Ziff. 1 2197 Anhang Ziff. 3 3459 Anhang Ziff. 1 4745 Anhang Ziff. 1, 2007 359
Anhang Ziff. 1. AS 2007 5437 Anhang Ziff. I] 80 Eingefügt durch Ziff. II des BB vom 20. Juni 1997, in Kraft seit 1. Jan. 1998
(AS 1997 2372; BBl 1997 I 877). Die genannten Gesetze traten am 1. Okt. 1999 in Kraft. 81 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 
Bundesgesetz
23
235.1
Art. 39 Referendum und Inkrafttreten
1 Dieses Gesetz untersteht dem fakultativen Referendum.
2 Der Bundesrat bestimmt das Inkrafttreten.
Datum des Inkrafttretens: 1. Juli 199382
Übergangsbestimmung der Änderung vom 24. März 200683
Innert einem Jahr nach Inkrafttreten dieses Gesetzes haben die Inhaber der Datensammlungen die notwendigen Massnahmen zur Information der betroffenen Personen nach Artikel 4 Absatz 4 und Artikel 7a zu ergreifen.

82 BRB vom 14. Juni 1993 83 AS 2007 4983 
Datenschutz
24
235.1
Anhang
Änderung von Bundesgesetzen
…84

84 Die Änderungen können unter AS 1993 1945 konsultiert werden. `;
const LeftText = `1
Bundesgesetz
über den Datenschutz
(DSG)
vom 19. Juni 1992 (Stand am 1. März 2019)
Die Bundesversammlung der Schweizerischen Eidgenossenschaft,
gestützt auf die Artikel 95, 122 und 173 Absatz 2 der Bundesverfassung1,2
nach Einsicht in die Botschaft des Bundesrates vom 23. März 19883,
beschliesst:
1. Abschnitt: Zweck, Geltungsbereich und Begriffe
Art. 1 Zweck
Dieses Gesetz bezweckt den Schutz der Persönlichkeit und der Grundrechte von Personen, über die Daten bearbeitet werden.
Art. 2 Geltungsbereich
1 Dieses Gesetz gilt für das Bearbeiten von Daten natürlicher und juristischer Personen durch:
a. private Personen;
b. Bundesorgane.
2 Es ist nicht anwendbar auf:
a. Personendaten, die eine natürliche Person ausschliesslich zum persönlichen
Gebrauch bearbeitet und nicht an Aussenstehende bekannt gibt;
b. Beratungen in den Eidgenössischen Räten und in den parlamentarischen
Kommissionen;
c. hängige Zivilprozesse, Strafverfahren, Verfahren der internationalen Rechtshilfe sowie staats- und verwaltungsrechtliche Verfahren mit Ausnahme erstinstanzlicher Verwaltungsverfahren;
d. öffentliche Register des Privatrechtsverkehrs;
e. Personendaten, die das Internationale Komitee vom Roten Kreuz bearbeitet.

 AS 1993 1945 1 SR 101 2 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 3 BBl 1988 II 413
235.1
Datenschutz
2
235.1
Art. 3 Begriffe
Die folgenden Ausdrücke bedeuten:
a. Personendaten (Daten): alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen;
b. betroffene Personen: natürliche oder juristische Personen, über die Daten bearbeitet werden;
c. besonders schützenswerte Personendaten: Daten über:
1. die religiösen, weltanschaulichen, politischen oder gewerkschaftlichen
Ansichten oder Tätigkeiten,
2. die Gesundheit, die Intimsphäre oder die Rassenzugehörigkeit,
3. Massnahmen der sozialen Hilfe,
4. administrative oder strafrechtliche Verfolgungen und Sanktionen;
d. Persönlichkeitsprofil: eine Zusammenstellung von Daten, die eine Beurteilung wesentlicher Aspekte der Persönlichkeit einer natürlichen Person erlaubt;
e. Bearbeiten: jeder Umgang mit Personendaten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Beschaffen, Aufbewahren,
Verwenden, Umarbeiten, Bekanntgeben, Archivieren oder Vernichten von
Daten;
f. Bekanntgeben: das Zugänglichmachen von Personendaten wie das Einsichtgewähren, Weitergeben oder Veröffentlichen;
g. Datensammlung: jeder Bestand von Personendaten, der so aufgebaut ist, dass
die Daten nach betroffenen Personen erschliessbar sind;
h. Bundesorgane: Behörden und Dienststellen des Bundes sowie Personen, soweit sie mit öffentlichen Aufgaben des Bundes betraut sind;
i.4 Inhaber der Datensammlung: private Personen oder Bundesorgane, die über
den Zweck und den Inhalt der Datensammlung entscheiden;
j.5 Gesetz im formellen Sinn:
1. Bundesgesetze,
2. für die Schweiz verbindliche Beschlüsse internationaler Organisationen
und von der Bundesversammlung genehmigte völkerrechtliche Verträge
mit rechtsetzendem Inhalt;
k.6 …

4 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 5 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 6 Aufgehoben durch Ziff. I des BG vom 24. März 2006, mit Wirkung seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz. BG
3
235.1
2. Abschnitt: Allgemeine Datenschutzbestimmungen
Art. 4 Grundsätze
1 Personendaten dürfen nur rechtmässig bearbeitet werden.7
2 Ihre Bearbeitung hat nach Treu und Glauben zu erfolgen und muss verhältnismässig sein.
3 Personendaten dürfen nur zu dem Zweck bearbeitet werden, der bei der Beschaffung angegeben wurde, aus den Umständen ersichtlich oder gesetzlich vorgesehen
ist.
4 Die Beschaffung von Personendaten und insbesondere der Zweck ihrer Bearbeitung
müssen für die betroffene Person erkennbar sein.8
5 Ist für die Bearbeitung von Personendaten die Einwilligung der betroffenen Person
erforderlich, so ist diese Einwilligung erst gültig, wenn sie nach angemessener Information freiwillig erfolgt. Bei der Bearbeitung von besonders schützenswerten
Personendaten oder Persönlichkeitsprofilen muss die Einwilligung zudem ausdrücklich erfolgen.9
Art. 5 Richtigkeit der Daten
1 Wer Personendaten bearbeitet, hat sich über deren Richtigkeit zu vergewissern. Er
hat alle angemessenen Massnahmen zu treffen, damit die Daten berichtigt oder
vernichtet werden, die im Hinblick auf den Zweck ihrer Beschaffung oder Bearbeitung unrichtig oder unvollständig sind.10
2 Jede betroffene Person kann verlangen, dass unrichtige Daten berichtigt werden.
Art. 611 Grenzüberschreitende Bekanntgabe
1 Personendaten dürfen nicht ins Ausland bekannt gegeben werden, wenn dadurch
die Persönlichkeit der betroffenen Personen schwerwiegend gefährdet würde, namentlich weil eine Gesetzgebung fehlt, die einen angemessenen Schutz gewährleistet.
2 Fehlt eine Gesetzgebung, die einen angemessenen Schutz gewährleistet, so können
Personendaten ins Ausland nur bekannt gegeben werden, wenn:
a. hinreichende Garantien, insbesondere durch Vertrag, einen angemessenen
Schutz im Ausland gewährleisten;

7 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 8 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 9 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 10 Zweiter Satz eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit
1. Jan. 2008 (AS 2007 4983; BBl 2003 2101). 11 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz
4
235.1
b. die betroffene Person im Einzelfall eingewilligt hat;
c. die Bearbeitung in unmittelbarem Zusammenhang mit dem Abschluss oder
der Abwicklung eines Vertrags steht und es sich um Personendaten des Vertragspartners handelt;
d. die Bekanntgabe im Einzelfall entweder für die Wahrung eines überwiegenden öffentlichen Interesses oder für die Feststellung, Ausübung oder Durchsetzung von Rechtsansprüchen vor Gericht unerlässlich ist;
e. die Bekanntgabe im Einzelfall erforderlich ist, um das Leben oder die körperliche Integrität der betroffenen Person zu schützen;
f. die betroffene Person die Daten allgemein zugänglich gemacht und eine Bearbeitung nicht ausdrücklich untersagt hat;
g. die Bekanntgabe innerhalb derselben juristischen Person oder Gesellschaft
oder zwischen juristischen Personen oder Gesellschaften, die einer einheitlichen Leitung unterstehen, stattfindet, sofern die Beteiligten Datenschutzregeln unterstehen, welche einen angemessenen Schutz gewährleisten.
3 Der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (Beauftragte,
Art. 26) muss über die Garantien nach Absatz 2 Buchstabe a und die Datenschutzregeln nach Absatz 2 Buchstabe g informiert werden. Der Bundesrat regelt die Einzelheiten dieser Informationspflicht.
Art. 7 Datensicherheit
1 Personendaten müssen durch angemessene technische und organisatorische Massnahmen gegen unbefugtes Bearbeiten geschützt werden.
2 Der Bundesrat erlässt nähere Bestimmungen über die Mindestanforderungen an die
Datensicherheit.
Art. 7a12
Art. 8 Auskunftsrecht
1 Jede Person kann vom Inhaber einer Datensammlung Auskunft darüber verlangen,
ob Daten über sie bearbeitet werden.
2 Der Inhaber der Datensammlung muss der betroffenen Person mitteilen:13

12 Eingefügt durch Ziff. I des BG vom 24. März 2006 (AS 2007 4983; BBl 2003 2101).
Aufgehoben durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, mit Wirkung seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 13 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz. BG
5
235.1
a.14 alle über sie in der Datensammlung vorhandenen Daten einschliesslich der
verfügbaren Angaben über die Herkunft der Daten;
b. den Zweck und gegebenenfalls die Rechtsgrundlagen des Bearbeitens sowie
die Kategorien der bearbeiteten Personendaten, der an der Sammlung Beteiligten und der Datenempfänger.
3 Daten über die Gesundheit kann der Inhaber der Datensammlung der betroffenen
Person durch einen von ihr bezeichneten Arzt mitteilen lassen.
4 Lässt der Inhaber der Datensammlung Personendaten durch einen Dritten bearbeiten, so bleibt er auskunftspflichtig. Der Dritte ist auskunftspflichtig, wenn er den
Inhaber nicht bekannt gibt oder dieser keinen Wohnsitz in der Schweiz hat.
5 Die Auskunft ist in der Regel schriftlich, in Form eines Ausdrucks oder einer Fotokopie sowie kostenlos zu erteilen. Der Bundesrat regelt die Ausnahmen.
6 Niemand kann im Voraus auf das Auskunftsrecht verzichten.
Art. 915 Einschränkung des Auskunftsrechts
1 Der Inhaber der Datensammlung kann die Auskunft verweigern, einschränken oder
aufschieben, soweit:
a. ein Gesetz im formellen Sinn dies vorsieht;
b. es wegen überwiegender Interessen Dritter erforderlich ist.
2 Ein Bundesorgan kann zudem die Auskunft verweigern, einschränken oder aufschieben, soweit:
a. es wegen überwiegender öffentlicher Interessen, insbesondere der inneren
oder äusseren Sicherheit der Eidgenossenschaft, erforderlich ist;
b. die Auskunft den Zweck einer Strafuntersuchung oder eines andern Untersuchungsverfahrens in Frage stellt.
3 Sobald der Grund für die Verweigerung, Einschränkung oder Aufschiebung einer
Auskunft wegfällt, muss das Bundesorgan die Auskunft erteilen, ausser dies ist
unmöglich oder nur mit einem unverhältnismässigen Aufwand möglich.
4 Der private Inhaber einer Datensammlung kann zudem die Auskunft verweigern,
einschränken oder aufschieben, soweit eigene überwiegende Interessen es erfordern
und er die Personendaten nicht Dritten bekannt gibt.
5 Der Inhaber der Datensammlung muss angeben, aus welchem Grund er die Auskunft verweigert, einschränkt oder aufschiebt.

14 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 15 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 
Datenschutz
6
235.1
Art. 10 Einschränkungen des Auskunftsrechts für Medienschaffende
1 Der Inhaber einer Datensammlung, die ausschliesslich für die Veröffentlichung im
redaktionellen Teil eines periodisch erscheinenden Mediums verwendet wird, kann
die Auskunft verweigern, einschränken oder aufschieben, soweit:
a. die Personendaten Aufschluss über die Informationsquellen geben;
b. Einblick in Entwürfe für Publikationen gegeben werden müsste;
c. die freie Meinungsbildung des Publikums gefährdet würde.
2 Medienschaffende können die Auskunft zudem verweigern, einschränken oder aufschieben, wenn ihnen eine Datensammlung ausschliesslich als persönliches Arbeitsinstrument dient.
Art. 10a16 Datenbearbeitung durch Dritte
1 Das Bearbeiten von Personendaten kann durch Vereinbarung oder Gesetz Dritten
übertragen werden, wenn:
a. die Daten nur so bearbeitet werden, wie der Auftraggeber selbst es tun dürfte; und
b. keine gesetzliche oder vertragliche Geheimhaltungspflicht es verbietet.
2 Der Auftraggeber muss sich insbesondere vergewissern, dass der Dritte die Datensicherheit gewährleistet.
3 Dritte können dieselben Rechtfertigungsgründe geltend machen wie der Auftraggeber.
Art. 1117 Zertifizierungsverfahren
1 Um den Datenschutz und die Datensicherheit zu verbessern, können die Hersteller
von Datenbearbeitungssystemen oder -programmen sowie private Personen oder
Bundesorgane, die Personendaten bearbeiten, ihre Systeme, Verfahren und ihre
Organisation einer Bewertung durch anerkannte unabhängige Zertifizierungsstellen
unterziehen.
2 Der Bundesrat erlässt Vorschriften über die Anerkennung von Zertifizierungsverfahren und die Einführung eines Datenschutz-Qualitätszeichens. Er berücksichtigt
dabei das internationale Recht und die international anerkannten technischen Normen.

16 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 17 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz. BG
7
235.1
Art. 11a18 Register der Datensammlungen
1 Der Beauftragte führt ein Register der Datensammlungen, das über Internet zugänglich ist. Jede Person kann das Register einsehen.
2 Bundesorgane müssen sämtliche Datensammlungen beim Beauftragten zur Registrierung anmelden.
3 Private Personen müssen Datensammlungen anmelden, wenn:
a. regelmässig besonders schützenswerte Personendaten oder Persönlichkeitsprofile bearbeitet werden; oder
b. regelmässig Personendaten an Dritte bekannt gegeben werden.
4 Die Datensammlungen müssen angemeldet werden, bevor sie eröffnet werden.
5 Entgegen den Bestimmungen der Absätze 2 und 3 muss der Inhaber von Datensammlungen seine Sammlungen nicht anmelden, wenn:
a. private Personen Daten aufgrund einer gesetzlichen Verpflichtung bearbeiten;
b. der Bundesrat eine Bearbeitung von der Anmeldepflicht ausgenommen hat,
weil sie die Rechte der betroffenen Personen nicht gefährdet;
c. er die Daten ausschliesslich für die Veröffentlichung im redaktionellen Teil
eines periodisch erscheinenden Mediums verwendet und keine Daten an
Dritte weitergibt, ohne dass die betroffenen Personen davon Kenntnis haben;
d. die Daten durch Journalisten bearbeitet werden, denen die Datensammlung
ausschliesslich als persönliches Arbeitsinstrument dient;
e. er einen Datenschutzverantwortlichen bezeichnet hat, der unabhängig die betriebsinterne Einhaltung der Datenschutzvorschriften überwacht und ein Verzeichnis der Datensammlungen führt;
f. er aufgrund eines Zertifizierungsverfahrens nach Artikel 11 ein DatenschutzQualitätszeichen erworben hat und das Ergebnis der Bewertung dem Beauftragten mitgeteilt wurde.
6 Der Bundesrat regelt die Modalitäten der Anmeldung der Datensammlungen, der
Führung und der Veröffentlichung des Registers sowie die Stellung und die Aufgaben der Datenschutzverantwortlichen nach Absatz 5 Buchstabe e und die Veröffentlichung eines Verzeichnisses der Inhaber der Datensammlungen, welche nach
Absatz 5 Buchstaben e und f der Meldepflicht enthoben sind.

18 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz
8
235.1
3. Abschnitt: Bearbeiten von Personendaten durch private Personen
Art. 12 Persönlichkeitsverletzungen
1 Wer Personendaten bearbeitet, darf dabei die Persönlichkeit der betroffenen Personen nicht widerrechtlich verletzen.
2 Er darf insbesondere nicht:
a. Personendaten entgegen den Grundsätzen der Artikel 4, 5 Absatz 1 und 7
Absatz 1 bearbeiten;
b. ohne Rechtfertigungsgrund Daten einer Person gegen deren ausdrücklichen
Willen bearbeiten;
c. ohne Rechtfertigungsgrund besonders schützenswerte Personendaten oder
Persönlichkeitsprofile Dritten bekanntgeben.19
3 In der Regel liegt keine Persönlichkeitsverletzung vor, wenn die betroffene Person
die Daten allgemein zugänglich gemacht und eine Bearbeitung nicht ausdrücklich
untersagt hat.
Art. 13 Rechtfertigungsgründe
1 Eine Verletzung der Persönlichkeit ist widerrechtlich, wenn sie nicht durch Einwilligung des Verletzten, durch ein überwiegendes privates oder öffentliches Interesse oder durch Gesetz gerechtfertigt ist.
2 Ein überwiegendes Interesse der bearbeitenden Person fällt insbesondere in Betracht, wenn diese:
a. in unmittelbarem Zusammenhang mit dem Abschluss oder der Abwicklung
eines Vertrags Personendaten über ihren Vertragspartner bearbeitet;
b. mit einer anderen Person in wirtschaftlichem Wettbewerb steht oder treten
will und zu diesem Zweck Personendaten bearbeitet, ohne diese Dritten bekannt zu geben;
c. zur Prüfung der Kreditwürdigkeit einer anderen Person weder besonders
schützenswerte Personendaten noch Persönlichkeitsprofile bearbeitet und
Dritten nur Daten bekannt gibt, die sie für den Abschluss oder die Abwicklung eines Vertrages mit der betroffenen Person benötigen;
d. beruflich Personendaten ausschliesslich für die Veröffentlichung im redaktionellen Teil eines periodisch erscheinenden Mediums bearbeitet;
e. Personendaten zu nicht personenbezogenen Zwecken insbesondere in der
Forschung, Planung und Statistik bearbeitet und die Ergebnisse so veröffentlicht, dass die betroffenen Personen nicht bestimmbar sind;
f. Daten über eine Person des öffentlichen Lebens sammelt, sofern sich die Daten auf das Wirken dieser Person in der Öffentlichkeit beziehen.

19 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz. BG
9
235.1
Art. 1420 Informationspflicht beim Beschaffen von besonders schützenswerten
Personendaten und Persönlichkeitsprofilen
1 Der Inhaber der Datensammlung ist verpflichtet, die betroffene Person über die
Beschaffung von besonders schützenswerten Personendaten oder Persönlichkeitsprofilen zu informieren; diese Informationspflicht gilt auch dann, wenn die Daten bei
Dritten beschafft werden.
2 Der betroffenen Person sind mindestens mitzuteilen:
a. der Inhaber der Datensammlung;
b. der Zweck des Bearbeitens;
c. die Kategorien der Datenempfänger, wenn eine Datenbekanntgabe vorgesehen ist.
3 Werden die Daten nicht bei der betroffenen Person beschafft, so hat deren Information spätestens bei der Speicherung der Daten oder, wenn die Daten nicht gespeichert werden, mit ihrer ersten Bekanntgabe an Dritte zu erfolgen.
4 Die Informationspflicht des Inhabers der Datensammlung entfällt, wenn die betroffene Person bereits informiert wurde oder, in Fällen nach Absatz 3, wenn:
a. die Speicherung oder die Bekanntgabe der Daten ausdrücklich im Gesetz
vorgesehen ist; oder
b. die Information nicht oder nur mit unverhältnismässigem Aufwand möglich
ist.
5 Der Inhaber der Datensammlung kann die Information unter den in Artikel 9 Absätze 1 und 4 genannten Voraussetzungen verweigern, einschränken oder aufschieben.
Art. 1521 Rechtsansprüche
1 Klagen zum Schutz der Persönlichkeit richten sich nach den Artikeln 28, 28a sowie
28l des Zivilgesetzbuchs22. Die klagende Partei kann insbesondere verlangen, dass
die Datenbearbeitung gesperrt wird, keine Daten an Dritte bekannt gegeben oder die
Personendaten berichtigt oder vernichtet werden.
2 Kann weder die Richtigkeit noch die Unrichtigkeit von Personendaten dargetan
werden, so kann die klagende Partei verlangen, dass bei den Daten ein entsprechender Vermerk angebracht wird.
3 Die klagende Partei kann zudem verlangen, dass die Berichtigung, die Vernichtung,
die Sperre, namentlich die Sperre der Bekanntgabe an Dritte, der Vermerk über die
Bestreitung oder das Urteil Dritten mitgeteilt oder veröffentlicht wird.

20 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 21 Fassung gemäss Anhang 1 Ziff. II 14 der Zivilprozessordnung vom 19. Dez. 2008, in
Kraft seit 1. Jan. 2011 (AS 2010 1739; BBl 2006 7221). 22 SR 210
Datenschutz
10
235.1
4 Über Klagen zur Durchsetzung des Auskunftsrechts entscheidet das Gericht im
vereinfachten Verfahren nach der Zivilprozessordnung vom 19. Dezember 200823.
4. Abschnitt: Bearbeiten von Personendaten durch Bundesorgane
Art. 16 Verantwortliches Organ und Kontrolle24
1 Für den Datenschutz ist das Bundesorgan verantwortlich, das die Personendaten in
Erfüllung seiner Aufgaben bearbeitet oder bearbeiten lässt.
2 Bearbeiten Bundesorgane Personendaten zusammen mit anderen Bundesorganen,
mit kantonalen Organen oder mit Privaten, so kann der Bundesrat die Kontrolle und
Verantwortung für den Datenschutz besonders regeln.25
Art. 17 Rechtsgrundlagen
1 Organe des Bundes dürfen Personendaten bearbeiten, wenn dafür eine gesetzliche
Grundlage besteht.
2 Besonders schützenswerte Personendaten sowie Persönlichkeitsprofile dürfen sie
nur bearbeiten, wenn ein Gesetz im formellen Sinn es ausdrücklich vorsieht oder
wenn ausnahmsweise:
a. es für eine in einem Gesetz im formellen Sinn klar umschriebene Aufgabe
unentbehrlich ist;
b. der Bundesrat es im Einzelfall bewilligt, weil die Rechte der betroffenen Person nicht gefährdet sind; oder
c. die betroffene Person im Einzelfall eingewilligt oder ihre Daten allgemein
zugänglich gemacht und eine Bearbeitung nicht ausdrücklich untersagt hat.26
Art. 17a27 Automatisierte Datenbearbeitung im Rahmen von Pilotversuchen
1 Der Bundesrat kann, nachdem er die Stellungnahme des Beauftragten eingeholt hat,
vor Inkrafttreten eines Gesetzes im formellen Sinn die automatisierte Bearbeitung
von besonders schützenswerten Personendaten oder Persönlichkeitsprofilen bewilligen, wenn:
a. die Aufgaben, die diese Bearbeitung erforderlich machen, in einem Gesetz
im formellen Sinn geregelt sind;

23 SR 272 24 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 25 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 26 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 27 Eingefügt durch Ziff. I des BG vom 24. März 2006 (AS 2006 4873; BBl 2003 2101,
2006 3547). Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit
15. Dez. 2006 (AS 2007 4983; BBl 2003 2101). 
Datenschutz. BG
11
235.1
b. ausreichende Massnahmen zur Verhinderung von Persönlichkeitsverletzungen getroffen werden;
c. die praktische Umsetzung einer Datenbearbeitung eine Testphase vor dem
Inkrafttreten des Gesetzes im formellen Sinn zwingend erfordert.
2 Die praktische Umsetzung einer Datenbearbeitung kann eine Testphase dann zwingend erfordern, wenn:
a. die Erfüllung einer Aufgabe technische Neuerungen erfordert, deren Auswirkungen zunächst evaluiert werden müssen;
b. die Erfüllung einer Aufgabe bedeutende organisatorische oder technische
Massnahmen erfordert, deren Wirksamkeit zunächst geprüft werden muss,
insbesondere bei der Zusammenarbeit zwischen Organen des Bundes und der
Kantone; oder
c. sie die Übermittlung von besonders schützenswerten Personendaten oder
Persönlichkeitsprofilen an kantonale Behörden mittels eines Abrufverfahrens
erfordert.
3 Der Bundesrat regelt die Modalitäten der automatisierten Datenbearbeitung in einer
Verordnung.
4 Das zuständige Bundesorgan legt dem Bundesrat spätestens innert zwei Jahren
nach Inbetriebnahme des Pilotsystems einen Evaluationsbericht vor. Es schlägt darin
die Fortführung oder die Einstellung der Bearbeitung vor.
5 Die automatisierte Datenbearbeitung muss in jedem Fall abgebrochen werden,
wenn innert fünf Jahren nach der Inbetriebnahme des Pilotsystems kein Gesetz im
formellen Sinn in Kraft getreten ist, welches die erforderliche Rechtsgrundlage
umfasst.
Art. 18 Beschaffen von Personendaten
1 Bei systematischen Erhebungen, namentlich mit Fragebogen, gibt das Bundesorgan
den Zweck und die Rechtsgrundlage des Bearbeitens, die Kategorien der an der
Datensammlung Beteiligten und der Datenempfänger bekannt.
2 …28
Art. 18a29 Informationspflicht beim Beschaffen von Personendaten
1 Bundesorgane sind verpflichtet, die betroffene Person über die Beschaffung von
Personendaten zu informieren; diese Informationspflicht gilt auch dann, wenn die
Daten bei Dritten beschafft werden.
2 Der betroffenen Person sind mindestens mitzuteilen:

28 Aufgehoben durch Ziff. I des BG vom 24. März 2006, mit Wirkung seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 29 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 
Datenschutz
12
235.1
a. der Inhaber der Datensammlung;
b. der Zweck des Bearbeitens;
c. die Kategorien der Datenempfänger, wenn eine Datenbekanntgabe vorgesehen ist;
d. das Auskunftsrecht nach Artikel 8;
e. die Folgen einer Weigerung der betroffenen Person, die verlangten Personendaten anzugeben.
3 Werden die Daten nicht bei der betroffenen Person beschafft, so hat deren Information spätestens bei der Speicherung der Daten oder, wenn die Daten nicht gespeichert werden, mit ihrer ersten Bekanntgabe an Dritte zu erfolgen.
4 Die Informationspflicht der Bundesorgane entfällt, wenn die betroffene Person
bereits informiert wurde oder, in Fällen nach Absatz 3, wenn:
a. die Speicherung oder die Bekanntgabe der Daten ausdrücklich im Gesetz
vorgesehen ist; oder
b. die Information nicht oder nur mit unverhältnismässigem Aufwand möglich
ist.
5 Wenn die Informationspflicht die Wettbewerbsfähigkeit eines Bundesorganes
beeinträchtigen würde, so kann sie der Bundesrat auf die Beschaffung von besonders
schützenswerten Personendaten und von Persönlichkeitsprofilen beschränken.
Art. 18b30 Einschränkung der Informationspflicht
1 Bundesorgane können die Information unter den in Artikel 9 Absätze 1 und 2
genannten Voraussetzungen verweigern, einschränken oder aufschieben.
2 Sobald der Grund für die Verweigerung, Einschränkung oder Aufschiebung wegfällt, sind die Bundesorgane durch die Informationspflicht gebunden, ausser diese ist
unmöglich oder nur mit einem unverhältnismässigen Aufwand zu erfüllen.
Art. 19 Bekanntgabe von Personendaten
1 Bundesorgane dürfen Personendaten nur bekannt geben, wenn dafür eine Rechtsgrundlage im Sinne von Artikel 17 besteht oder wenn:31
a. die Daten für den Empfänger im Einzelfall zur Erfüllung seiner gesetzlichen
Aufgabe unentbehrlich sind;
b.32 die betroffene Person im Einzelfall eingewilligt hat;

30 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 31 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 32 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz. BG
13
235.1
c.33 die betroffene Person ihre Daten allgemein zugänglich gemacht und eine Bekanntgabe nicht ausdrücklich untersagt hat; oder
d. der Empfänger glaubhaft macht, dass die betroffene Person die Einwilligung
verweigert oder die Bekanntgabe sperrt, um ihm die Durchsetzung von
Rechtsansprüchen oder die Wahrnehmung anderer schutzwürdiger Interessen
zu verwehren; der betroffenen Person ist vorher wenn möglich Gelegenheit
zur Stellungnahme zu geben.
1bis Bundesorgane dürfen im Rahmen der behördlichen Information der Öffentlichkeit von Amtes wegen oder gestützt auf das Öffentlichkeitsgesetz vom 17. Dezember
200434 auch Personendaten bekannt geben, wenn:
a. die betreffenden Personendaten im Zusammenhang mit der Erfüllung öffentlicher Aufgaben stehen; und
b. an deren Bekanntgabe ein überwiegendes öffentliches Interesse besteht.35
2 Bundesorgane dürfen auf Anfrage Name, Vorname, Adresse und Geburtsdatum
einer Person auch bekannt geben, wenn die Voraussetzungen von Absatz 1 nicht
erfüllt sind.
3 Bundesorgane dürfen Personendaten durch ein Abrufverfahren zugänglich machen,
wenn dies ausdrücklich vorgesehen ist. Besonders schützenswerte Personendaten
sowie Persönlichkeitsprofile dürfen nur durch ein Abrufverfahren zugänglich gemacht werden, wenn ein Gesetz im formellen Sinn es ausdrücklich vorsieht.36
3bis Bundesorgane dürfen Personendaten mittels automatisierter Informations- und
Kommunikationsdienste jedermann zugänglich machen, wenn eine Rechtsgrundlage
die Veröffentlichung dieser Daten vorsieht oder wenn sie gestützt auf Absatz 1bis
Informationen der Öffentlichkeit zugänglich machen. Besteht das öffentliche Interesse an der Zugänglichmachung nicht mehr, so sind die betreffenden Daten wieder
aus dem automatisierten Informations- und Kommunikationsdienst zu entfernen.37
4 Das Bundesorgan lehnt die Bekanntgabe ab, schränkt sie ein oder verbindet sie mit
Auflagen, wenn:
a. wesentliche öffentliche Interessen oder offensichtlich schutzwürdige Interessen einer betroffenen Person es verlangen oder
b. gesetzliche Geheimhaltungspflichten oder besondere Datenschutzvorschriften es verlangen.

33 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 34 SR 152.3 35 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 36 Fassung des zweiten Satzes gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit
1. Jan. 2008 (AS 2007 4983; BBl 2003 2101). 37 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 
Datenschutz
14
235.1
Art. 20 Sperrung der Bekanntgabe
1 Eine betroffene Person, die ein schutzwürdiges Interesse glaubhaft macht, kann
vom verantwortlichen Bundesorgan verlangen, dass es die Bekanntgabe von bestimmten Personendaten sperrt.
2 Das Bundesorgan verweigert die Sperrung oder hebt sie auf, wenn:
a. eine Rechtspflicht zur Bekanntgabe besteht; oder
b. die Erfüllung seiner Aufgabe sonst gefährdet wäre.
3 Die Sperrung steht unter dem Vorbehalt von Artikel 19 Absatz 1bis.38
Art. 2139 Angebot von Unterlagen an das Bundesarchiv
1 In Übereinstimmung mit dem Archivierungsgesetz vom 26. Juni 199840 bieten die
Bundesorgane dem Bundesarchiv alle Personendaten an, die sie nicht mehr ständig
benötigen.
2 Die Bundesorgane vernichten die vom Bundesarchiv als nicht archivwürdig bezeichneten Personendaten, ausser wenn diese:
a. anonymisiert sind;
b.41 zu Beweis- oder Sicherheitszwecken oder zur Wahrung der schutzwürdigen
Interessen der betroffenen Person aufbewahrt werden müssen.
Art. 22 Bearbeiten für Forschung, Planung und Statistik
1 Bundesorgane dürfen Personendaten für nicht personenbezogene Zwecke, insbesondere für Forschung, Planung und Statistik bearbeiten, wenn:
a. die Daten anonymisiert werden, sobald es der Zweck des Bearbeitens erlaubt;
b. der Empfänger die Daten nur mit Zustimmung des Bundesorgans weitergibt;
und
c. die Ergebnisse so veröffentlicht werden, dass die betroffenen Personen nicht
bestimmbar sind.
2 Die Anforderungen der folgenden Bestimmungen müssen nicht erfüllt sein:
a. Artikel 4 Absatz 3 über den Zweck des Bearbeitens
b. Artikel 17 Absatz 2 über die Rechtsgrundlagen für die Bearbeitung von besonders schützenswerten Personendaten und Persönlichkeitsprofilen;

38 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 39 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 40 SR 152.1 41 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 
Datenschutz. BG
15
235.1
c. Artikel 19 Absatz 1 über die Bekanntgabe von Personendaten.
Art. 23 Privatrechtliche Tätigkeit von Bundesorganen
1 Handelt ein Bundesorgan privatrechtlich, so gelten die Bestimmungen für das
Bearbeiten von Personendaten durch private Personen.
2 Die Aufsicht richtet sich nach den Bestimmungen für Bundesorgane.
Art. 2442
Art. 25 Ansprüche und Verfahren
1 Wer ein schutzwürdiges Interesse hat, kann vom verantwortlichen Bundesorgan
verlangen, dass es:
a. das widerrechtliche Bearbeiten von Personendaten unterlässt;
b. die Folgen eines widerrechtlichen Bearbeitens beseitigt;
c. die Widerrechtlichkeit des Bearbeitens feststellt.
2 Kann weder die Richtigkeit noch die Unrichtigkeit von Personendaten bewiesen
werden, so muss das Bundesorgan bei den Daten einen entsprechenden Vermerk
anbringen.
3 Der Gesuchsteller kann insbesondere verlangen, dass das Bundesorgan:
a. Personendaten berichtigt, vernichtet oder die Bekanntgabe an Dritte sperrt;
b. seinen Entscheid, namentlich die Berichtigung, Vernichtung, Sperre oder den
Vermerk über die Bestreitung Dritten mitteilt oder veröffentlicht.
4 Das Verfahren richtet sich nach dem Bundesgesetz vom 20. Dezember 196843 über
das Verwaltungsverfahren (Verwaltungsverfahrensgesetz). Die Ausnahmen von
Artikel 2 und 3 des Verwaltungsverfahrensgesetzes gelten nicht.
5 …44
Art. 25bis 45 Verfahren im Falle der Bekanntgabe von amtlichen
Dokumenten, die Personendaten enthalten
Solange ein Verfahren betreffend den Zugang zu amtlichen Dokumenten im Sinne
des Öffentlichkeitsgesetzes vom 17. Dezember 200446, welche Personendaten enthalten, im Gange ist, kann die betroffene Person im Rahmen dieses Verfahrens die
Rechte geltend machen, die ihr aufgrund von Artikel 25 des vorliegenden Gesetzes

42 Aufgehoben durch Art. 31 des BG vom 21. März 1997 über Massnahmen zur Wahrung
der inneren Sicherheit mit Wirkung seit 1. Juli 1998 (AS 1998 1546; BBl 1994 II 1127). 43 SR 172.021 44 Aufgehoben durch Anhang Ziff. 26 des Verwaltungsgerichtsgesetzes vom 17. Juni 2005,
mit Wirkung seit 1. Jan. 2007 (AS 2006 2197 1069; BBl 2001 4202). 45 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 46 SR 152.3
Datenschutz
16
235.1
bezogen auf diejenigen Dokumente zustehen, die Gegenstand des Zugangsverfahrens
sind.
5. Abschnitt:
Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter
Art. 2647 Wahl und Stellung
1 Der Beauftragte wird vom Bundesrat für eine Amtsdauer von vier Jahren gewählt.
Die Wahl ist durch die Bundesversammlung zu genehmigen.
2 Das Arbeitsverhältnis des Beauftragten richtet sich, soweit dieses Gesetz nichts
anderes vorsieht, nach dem Bundespersonalgesetz vom 24. März 200048.
3 Der Beauftragte übt seine Funktion unabhängig aus, ohne Weisungen einer Behörde oder eines Dritten einzuholen oder entgegenzunehmen.49 Er ist der Bundeskanzlei
administrativ zugeordnet.
4 Er verfügt über ein ständiges Sekretariat und ein eigenes Budget. Er stellt sein
Personal an.
5 Der Beauftragte untersteht nicht dem Beurteilungssystem nach Artikel 4 Absatz 3
des Bundespersonalgesetzes vom 24. März 2000.
Art. 26a50 Wiederwahl und Beendigung der Amtsdauer
1 Die Amtsdauer des Beauftragten kann zwei Mal verlängert werden.51

47 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 48 SR 172.220.1 49 Fassung gemäss Ziff. II 1 des BG vom 28. Sept. 2018 über die Umsetzung der Richtlinie
(EU) 2016/680 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener
Daten zum Zwecke der Verhütung, Ermittlung, Aufdeckung oder Verfolgung von Straftaten oder der Strafvollstreckung, in Kraft seit 1. März 2019 (AS 2019 625;
BBl 2017 6941). 50 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 51 Fassung gemäss Ziff. II 1 des BG vom 28. Sept. 2018 über die Umsetzung der Richtlinie
(EU) 2016/680 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener
Daten zum Zwecke der Verhütung, Ermittlung, Aufdeckung oder Verfolgung von Straftaten oder der Strafvollstreckung, in Kraft seit 1. März 2019 (AS 2019 625;
BBl 2017 6941). 
Datenschutz. BG
17
235.1
1bis Verfügt der Bundesrat nicht spätestens sechs Monate vor Ablauf der Amtsdauer
aus sachlich hinreichenden Gründen die Nichtverlängerung, so verlängert sich die
Amtsdauer stillschweigend.52
2 Der Beauftragte kann den Bundesrat unter Einhaltung einer Frist von sechs Monaten um Entlassung auf ein Monatsende ersuchen.
3 Der Bundesrat kann den Beauftragten vor Ablauf der Amtsdauer des Amtes entheben, wenn dieser:
a. vorsätzlich oder grobfahrlässig Amtspflichten schwer verletzt hat; oder
b. die Fähigkeit, das Amt auszuüben, auf Dauer verloren hat.
Art. 26b53 Nebenbeschäftigung
1 Der Beauftragte darf keine Nebenbeschäftigung ausüben.
2 Der Bundesrat kann dem Beauftragten gestatten, eine Nebenbeschäftigung auszuüben, wenn dadurch die Ausübung der Funktion sowie die Unabhängigkeit und das
Ansehen nicht beeinträchtigt werden. Der Entscheid wird veröffentlicht.
Art. 27 Aufsicht über Bundesorgane
1 Der Beauftragte54 überwacht die Einhaltung dieses Gesetzes und der übrigen Datenschutzvorschriften des Bundes durch die Bundesorgane. Der Bundesrat ist von
dieser Aufsicht ausgenommen.
2 Der Beauftragte klärt von sich aus oder auf Meldung Dritter hin den Sachverhalt
näher ab.
3 Bei der Abklärung kann er Akten herausverlangen, Auskünfte einholen und sich
Datenbearbeitungen vorführen lassen. Die Bundesorgane müssen an der Feststellung
des Sachverhaltes mitwirken. Das Zeugnisverweigerungsrecht nach Artikel 16 des
Verwaltungsverfahrensgesetzes55 gilt sinngemäss.
4 Ergibt die Abklärung, dass Datenschutzvorschriften verletzt werden, so empfiehlt
der Beauftragte dem verantwortlichen Bundesorgan, das Bearbeiten zu ändern oder

52 Eingefügt durch Ziff. II 1 des BG vom 28. Sept. 2018 über die Umsetzung der Richtlinie
(EU) 2016/680 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener
Daten zum Zwecke der Verhütung, Ermittlung, Aufdeckung oder Verfolgung von Straftaten oder der Strafvollstreckung, in Kraft seit 1. März 2019 (AS 2019 625;
BBl 2017 6941). 53 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen (AS 2010 3387 3418; BBl 2009 6749).
Fassung gemäss Ziff. II 1 des BG vom 28. Sept. 2018 über die Umsetzung der Richtlinie
(EU) 2016/680 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener
Daten zum Zwecke der Verhütung, Ermittlung, Aufdeckung oder Verfolgung von Straftaten oder der Strafvollstreckung, in Kraft seit 1. März 2019 (AS 2019 625;
BBl 2017 6941). 54 Ausdruck gemäss Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). Diese Änd. ist im ganzen Erlass
berücksichtigt. 55 SR 172.021
Datenschutz
18
235.1
zu unterlassen. Er orientiert das zuständige Departement oder die Bundeskanzlei
über seine Empfehlung.
5 Wird eine Empfehlung nicht befolgt oder abgelehnt, so kann er die Angelegenheit
dem Departement oder der Bundeskanzlei zum Entscheid vorlegen. Der Entscheid
wird den betroffenen Personen in Form einer Verfügung mitgeteilt.56
6 Der Beauftragte ist berechtigt, gegen die Verfügung nach Absatz 5 und gegen den
Entscheid der Beschwerdebehörde Beschwerde zu führen.57
Art. 28 Beratung Privater
Der Beauftragte berät private Personen in Fragen des Datenschutzes.
Art. 29 Abklärungen und Empfehlungen im Privatrechtsbereich
1 Der Beauftragte klärt von sich aus oder auf Meldung Dritter hin den Sachverhalt
näher ab, wenn:
a. Bearbeitungsmethoden geeignet sind, die Persönlichkeit einer grösseren Anzahl von Personen zu verletzen (Systemfehler);
b.58 Datensammlungen registriert werden müssen (Art. 11a);
c.59 eine Informationspflicht nach Artikel 6 Absatz 3 besteht.
2 Er kann dabei Akten herausverlangen, Auskünfte einholen und sich Datenbearbeitungen vorführen lassen. Das Zeugnisverweigerungsrecht nach Artikel 16 des Verwaltungsverfahrensgesetzes60 gilt sinngemäss.
3 Der Beauftragte kann aufgrund seiner Abklärungen empfehlen, das Bearbeiten zu
ändern oder zu unterlassen.
4 Wird eine solche Empfehlung des Beauftragten nicht befolgt oder abgelehnt, so
kann er die Angelegenheit dem Bundesverwaltungsgericht zum Entscheid vorlegen.
Er ist berechtigt, gegen diesen Entscheid Beschwerde zu führen.61
Art. 30 Information
1 Der Beauftragte erstattet der Bundesversammlung periodisch sowie nach Bedarf
Bericht. Er übermittelt den Bericht gleichzeitig dem Bundesrat. Die periodischen
Berichte werden veröffentlicht.62

56 Fassung des zweiten Satzes gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit
1. Jan. 2008 (AS 2007 4983; BBl 2003 2101). 57 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 58 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 59 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 60 SR 172.021 61 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 
Datenschutz. BG
19
235.1
2 In Fällen von allgemeinem Interesse kann er die Öffentlichkeit über seine Feststellungen und Empfehlungen informieren. Personendaten, die dem Amtsgeheimnis
unterstehen, darf er nur mit Zustimmung der zuständigen Behörde veröffentlichen.
Verweigert diese die Zustimmung, so entscheidet der Präsident der auf dem Gebiet
des Datenschutzes zuständigen Abteilung des Bundesverwaltungsgerichts endgültig.63
Art. 31 Weitere Aufgaben
1 Der Beauftragte hat insbesondere folgende weiteren Aufgaben:64
a. Er unterstützt Organe des Bundes und der Kantone in Fragen des Datenschutzes.
b. Er nimmt Stellung zu Vorlagen über Erlasse und Massnahmen des Bundes,
die für den Datenschutz erheblich sind.
c. Er arbeitet mit in- und ausländischen Datenschutzbehörden zusammen.
d.65 Er begutachtet, inwieweit die Datenschutzgesetzgebung im Ausland einen
angemessenen Schutz gewährleistet.
e.66 Er prüft die ihm nach Artikel 6 Absatz 3 gemeldeten Garantien und Datenschutzregeln.
f.67 Er prüft die Zertifizierungsverfahren nach Artikel 11 und kann dazu Empfehlungen nach Artikel 27 Absatz 4 oder 29 Absatz 3 abgeben.
g.68 Er nimmt die ihm durch das Öffentlichkeitsgesetz vom 17. Dezember 200469
übertragenen Aufgaben wahr.
h.70 Er sensibilisiert die Bevölkerung in Bezug auf den Datenschutz.

62 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 63 Fassung des Satzes gemäss Anhang Ziff. 26 des Verwaltungsgerichtsgesetzes vom
17. Juni 2005, in Kraft seit 1. Jan. 2007 (AS 2006 2197 1069; BBl 2001 4202). 64 Fassung gemäss Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004,
in Kraft seit 1. Juli 2006 (AS 2006 2319; BBl 2003 1963). 65 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 66 Eingefügt durch Anhang Ziff. 4 des Öffentlichkeitsgesetzes vom 17. Dez. 2004
(AS 2006 2319; BBl 2003 1963). Fassung gemäss Ziff. I des BG vom 24. März 2006,
in Kraft seit 1. Jan. 2008 (AS 2007 4983; BBl 2003 2101). 67 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 68 Eingefügt durch Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 69 SR 152.3 70 Eingefügt durch Ziff. II 1 des BG vom 28. Sept. 2018 über die Umsetzung der Richtlinie
(EU) 2016/680 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener
Daten zum Zwecke der Verhütung, Ermittlung, Aufdeckung oder Verfolgung von Straftaten oder der Strafvollstreckung, in Kraft seit 1. März 2019 (AS 2019 625;
BBl 2017 6941). 
Datenschutz
20
235.1
2 Er kann Organe der Bundesverwaltung auch dann beraten, wenn dieses Gesetz
nach Artikel 2 Absatz 2 Buchstaben c und d nicht anwendbar ist. Die Organe der
Bundesverwaltung können ihm Einblick in ihre Geschäfte gewähren.
Art. 3271
6. Abschnitt:72 Rechtsschutz
Art. 33
1 Der Rechtsschutz richtet sich nach den allgemeinen Bestimmungen über die Bundesrechtspflege.
2 Stellt der Beauftragte bei einer Sachverhaltsabklärung nach Artikel 27 Absatz 2
oder nach Artikel 29 Absatz 1 fest, dass den betroffenen Personen ein nicht leicht
wieder gutzumachender Nachteil droht, so kann er dem Präsidenten der auf dem
Gebiet des Datenschutzes zuständigen Abteilung des Bundesverwaltungsgerichts
vorsorgliche Massnahmen beantragen. Das Verfahren richtet sich sinngemäss nach
den Artikeln 79–84 des Bundesgesetzes vom 4. Dezember 194773 über den Bundeszivilprozess.
7. Abschnitt: Strafbestimmungen
Art. 34 Verletzung der Auskunfts-, Melde- und Mitwirkungspflichten
1 Mit Busse werden private Personen auf Antrag bestraft:74
a. die ihre Pflichten nach den Artikeln 8–10 und 14 verletzen, indem sie vorsätzlich eine falsche oder eine unvollständige Auskunft erteilen;
b. die es vorsätzlich unterlassen:
1. die betroffene Person nach Artikel 14 Absatz 1 zu informieren, oder
2. ihr die Angaben nach Artikel 14 Absatz 2 zu liefern.75
2 Mit Busse werden private Personen bestraft, die vorsätzlich:76

71 Aufgehoben durch Anhang Ziff. I des BG vom 30. Sept. 2011 über die Forschung am
Menschen, mit Wirkung seit 1. Jan. 2014 (AS 2013 3215; BBl 2009 8045). 72 Fassung gemäss Anhang Ziff. 26 des Verwaltungsgerichtsgesetzes vom 17. Juni 2005,
in Kraft seit 1. Jan. 2007 (AS 2006 2197 1069; BBl 2001 4202). 73 SR 273 74 Fassung gemäss Art. 333 des Strafgesetzbuches in der Fassung des BG vom
13. Dez. 2002, in Kraft seit 1. Jan. 2007 (AS 2006 3459; BBl 1999 1979). 75 Fassung gemäss Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 76 Fassung gemäss Art. 333 des Strafgesetzbuches in der Fassung des BG vom
13. Dez. 2002, in Kraft seit 1. Jan. 2007 (AS 2006 3459; BBl 1999 1979). 
Datenschutz. BG
21
235.1
a.77 die Information nach Artikel 6 Absatz 3 oder die Meldung nach Artikel 11a
unterlassen oder dabei vorsätzlich falsche Angaben machen;
b. dem Beauftragten bei der Abklärung eines Sachverhaltes (Art. 29) falsche
Auskünfte erteilen oder die Mitwirkung verweigern.
Art. 35 Verletzung der beruflichen Schweigepflicht
1 Wer vorsätzlich geheime, besonders schützenswerte Personendaten oder Persönlichkeitsprofile unbefugt bekannt gibt, von denen er bei der Ausübung seines Berufes, der die Kenntnis solcher Daten erfordert, erfahren hat, wird auf Antrag mit
Busse bestraft.78
2 Gleich wird bestraft, wer vorsätzlich geheime, besonders schützenswerte Personendaten oder Persönlichkeitsprofile unbefugt bekannt gibt, von denen er bei der Tätigkeit für den Geheimhaltungspflichtigen oder während der Ausbildung bei diesem
erfahren hat.
3 Das unbefugte Bekanntgeben geheimer, besonders schützenswerter Personendaten
oder Persönlichkeitsprofile ist auch nach Beendigung der Berufsausübung oder der
Ausbildung strafbar.
8. Abschnitt: Schlussbestimmungen
Art. 36 Vollzug
1 Der Bundesrat erlässt die Ausführungsbestimmungen.
2 …79
3 Er kann für die Auskunftserteilung durch diplomatische und konsularische Vertretungen der Schweiz im Ausland Abweichungen von den Artikeln 8 und 9 vorsehen.
4 Er kann ferner bestimmen:
a. welche Datensammlungen ein Bearbeitungsreglement benötigen;
b. unter welchen Voraussetzungen ein Bundesorgan Personendaten durch einen
Dritten bearbeiten lassen oder für Dritte bearbeiten darf;
c. wie die Mittel zur Identifikation von Personen verwendet werden dürfen.
5 Er kann völkerrechtliche Verträge über den Datenschutz abschliessen, wenn sie den
Grundsätzen dieses Gesetzes entsprechen.

77 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 78 Fassung gemäss Art. 333 des Strafgesetzbuches in der Fassung des BG vom
13. Dez. 2002, in Kraft seit 1. Jan. 2007 (AS 2006 3459; BBl 1999 1979). 79 Aufgehoben durch Art. 25 des Archivierungsgesetzes vom 26. Juni 1998, mit Wirkung
seit 1. Okt. 1999 (AS 1999 2243; BBl 1997 II 941). 
Datenschutz
22
235.1
6 Er regelt, wie Datensammlungen zu sichern sind, deren Daten im Kriegs- oder Krisenfall zu einer Gefährdung von Leib und Leben der betroffenen Personen führen
können.
Art. 37 Vollzug durch die Kantone
1 Soweit keine kantonalen Datenschutzvorschriften bestehen, die einen angemessenen Schutz gewährleisten, gelten für das Bearbeiten von Personendaten durch kantonale Organe beim Vollzug von Bundesrecht die Artikel 1–11a, 16, 17, 18–22 und 25
Absätze 1–3 dieses Gesetzes.80
2 Die Kantone bestimmen ein Kontrollorgan, welches für die Einhaltung des Datenschutzes sorgt. Die Artikel 27, 30 und 31 sind sinngemäss anwendbar.
Art. 38 Übergangsbestimmungen
1 Die Inhaber von Datensammlungen müssen bestehende Datensammlungen, die
nach Artikel 11 zu registrieren sind, spätestens ein Jahr nach Inkrafttreten dieses
Gesetzes anmelden.
2 Sie müssen innert einem Jahr nach Inkrafttreten dieses Gesetzes die notwendigen
Vorkehren treffen, damit sie die Auskünfte nach Artikel 8 erteilen können.
3 Bundesorgane dürfen eine bestehende Datensammlung mit besonders schützenswerten Personendaten oder mit Persönlichkeitsprofilen noch bis am 31. Dezember
2000 benützen, ohne dass die Voraussetzungen von Artikel 17 Absatz 2 erfüllt
sind.81
4 Im Asyl- und Ausländerbereich wird die Frist nach Absatz 3 bis zum Inkrafttreten
des totalrevidierten Asylgesetzes vom 26. Juni 199882 sowie der Änderung des
Bundesgesetzes vom 26. März 193183 über Aufenthalt und Niederlassung der Ausländer verlängert.84

80 Fassung gemäss Ziff. I des BG vom 24. März 2006, in Kraft seit 1. Jan. 2008
(AS 2007 4983; BBl 2003 2101). 81 Fassung gemäss Ziff. I des BB vom 26. Juni 1998, in Kraft bis 31. Dez. 2000
(AS 1998 1586; BBl 1998 1579 1583). 82 SR 142.31 83 [BS 1 121; AS 1949 221, 1987 1665, 1988 332, 1990 1587 Art. 3 Abs. 2, 1991 362
Ziff. II 11 1034 Ziff. III, 1995 146, 1999 1111 2262 Anhang Ziff. 1, 2000 1891 Ziff. IV 2,
2002 685 Ziff. I 1 701 Ziff. I 1 3988 Anhang Ziff. 3, 2003 4557 Anhang Ziff. II 2,
2004 1633 Ziff. I 1 4655 Ziff. I 1, 2005 5685 Anhang Ziff. 2, 2006 979 Art. 2 Ziff. 1 1931
Art. 18 Ziff. 1 2197 Anhang Ziff. 3 3459 Anhang Ziff. 1 4745 Anhang Ziff. 1, 2007 359
Anhang Ziff. 1. AS 2007 5437 Anhang Ziff. I] 84 Eingefügt durch Ziff. II des BB vom 20. Juni 1997, in Kraft seit 1. Jan. 1998
(AS 1997 2372; BBl 1997 I 877). Die genannten Gesetze traten am 1. Okt. 1999 in Kraft. 
Datenschutz. BG
23
235.1
Art. 38a85 Übergangsbestimmung zur Änderung vom 19. März 2010
Die Wahl des Beauftragten und die Beendigung seines Arbeitsverhältnisses unterstehen bis zum Ende der Legislaturperiode, in der diese Änderung in Kraft tritt, dem
bisherigen Recht.
Art. 39 Referendum und Inkrafttreten
1 Dieses Gesetz untersteht dem fakultativen Referendum.
2 Der Bundesrat bestimmt das Inkrafttreten.
Datum des Inkrafttretens: 1. Juli 199386
Übergangsbestimmung der Änderung vom 24. März 200687
Innert einem Jahr nach Inkrafttreten dieses Gesetzes haben die Inhaber der Datensammlungen die notwendigen Massnahmen zur Information der betroffenen Personen nach Artikel 4 Absatz 4 und Artikel 7a zu ergreifen.

85 Eingefügt durch Ziff. 3 des BG vom 19. März 2010 über die Umsetzung des Rahmenbeschlusses 2008/977/JI über den Schutz von Personendaten im Rahmen der polizeilichen
und justiziellen Zusammenarbeit in Strafsachen, in Kraft seit 1. Dez. 2010
(AS 2010 3387 3418; BBl 2009 6749). 86 BRB vom 14. Juni 1993 87 AS 2007 4983 
Datenschutz
24
235.1
Anhang
Änderung von Bundesgesetzen
…88

88 Die Änderungen können unter AS 1993 1945 konsultiert werden. `;
