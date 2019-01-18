import * as React from "react";
import { Button } from "react-bootstrap";
import "./modalStyle.css";
import { Container, Modal, ModalBody, ModalHeader } from "mdbreact";

interface Props {
  onButtonClick: Function;
}

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: true
};

export class TermsModal extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  toggle = () => {
    this.props.onButtonClick();
  };

  render() {
    return (
      <Container>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-lg"
          isOpen={this.state.isOpen}
          toggle={() => this.toggle()}
        >
          <ModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={() => this.toggle()}
          >
            TERMENI ȘI CONDIȚII WorkForMe
          </ModalHeader>
          <ModalBody>
            <div>
              <h5>1. Aspecte generale</h5>
              <p>
                Prezentele Termeni și Condiții („Termeni și Condiții”)
                guvernează raporturile dintre WorkForMe și persoanele care
                utilizează („Utilizatorul”) pagina de internet www.WorkForMe.ro
                („Site-ul” sau „WorkForMe.ro”) și/sau serviciile oferite de
                Societate prin intermediul Site-ului sau Aplicației
                („Serviciile”).
              </p>
              <p>
                Accesarea și utilizarea Site-ului, inclusiv a oricărei pagini
                sau secțiuni componente ale acestora, sau a oricărui Serviciu
                furnizat prin intermediul Site-ului se poate face numai în
                conformitate cu prezentele Termeni și Condiții, care includ
                Politica de Confidențialitate Datelor.
              </p>
              <p>
                PENTRU UTILIZAREA SERVICIILOR, PUTEM SOLICITA UTILIZATORULUI SĂ
                ÎȘI EXPRIME ACORDUL CU PRIVIRE LA ACEȘTI TERMENI ȘI CONDIȚII
                PRINTR-O ACȚIUNE SPECIFICA, CARE ARE SEMNIFICAȚIA UNUI CONSIMȚĂM
                NT NEECHIVOC (E.G. BIFAREA CĂSUȚEI SPECIFICE „AM CITIT ȘI SUNT
                DE ACORD CU TERMENII ȘI CONDIȚIILE WORKFORME”).
              </p>
              <p>
                BIFÂND O ANUMITA CĂSUȚA, UTILIZATORUL:
                <br /> A. ÎȘI DA ACORDUL, ÎN MOD EXPRES, SĂ RESPECTE TOATE
                CLAUZELE DIN ACEST SET DE TERMENI ȘI CONDIȚII, PRECUM ȘI ORICE
                ALȚI TERMENI ȘI CONDIȚII SPECIFICE APLICABILE SERVICIILOR;
                <br />
                B. IA LA CUNOȘTINȚA DE CONDIȚIILE DE PRELUCRARE A DATELOR
                PERSONALE CONFORM POLITICII DE CONFIDENȚIALITATE, CARE ESTE
                PARTE INTEGRANTA DIN ACEST SET DE TERMENI ȘI CONDIȚII.
              </p>
              <p>
                Pentru a asigura respectarea condițiilor de acces și utilizare a
                Serviciilor, Utilizatorii trebuie să verifice la momentul
                fiecărei accesări a Site-ului și / sau a Aplicației WorkForMe
                termenii și condițiile de utilizare. Chiar dacă omiteți să
                analizați termenii și condițiile, dar utilizați WorkForMe.ro,
                vom considera ca ați acceptat acest set de Termeni și Condiții
                (inclusiv orice actualizare a acestora). Dacă nu sunteți de
                acord cu prevederile din acest set de Termeni și Condiții
                (inclusiv orice actualizare a acestuia), vă rugam să nu
                utilizați, sau după caz, să încetați utilizarea Site-ului sau a
                Serviciilor oferite de noi, după caz.
              </p>
            </div>
            <div>
              <h5>2. Serviciile WorkForMe</h5>
              <p>
                Serviciile oferite WorkForMe.ro se adresează <br />
                (i) Utilizatorilor, persoane fizice, care vizitează Platforma
                WorkForMe, <br />
                (ii) Utilizatorilor care cauta un loc de munca („Utilizatori
                Candidați”) și <br />
                (iii) Utilizatorilor, persoane juridice sau persoane fizice
                autorizate, care postează locuri de munca sau cauta Utilizatori
                Candidați pentru anumite locuri de munca („Utilizatori
                Recrutori”).
              </p>
              <p>
                <b>
                  2.1. Crearea contului de Utilizator, parole și
                  responsabilități
                </b>
                <br />
                Utilizatorii Candidați pot folosi anumite facilități oferite de
                Platforma WorkForMe și fără a avea un cont de Utilizator. <br />
                Pentru a beneficia, de toate Serviciile oferite de Platforma
                WorkForMe, Utilizatorii (fie Utilizatori Candidați, fie
                Utilizatori Recrutori) trebuie să își creeze un cont pe
                Platforma WorkForMe, completând formularele disponibile. <br />
                Pentru a folosi Serviciile oferite de Platforma WorkForMe, este
                necesar sa: <br />
                a. furnizați date adevărate, exacte și complete despre
                dumneavoastră, prin completarea câmpurilor din formularul de
                înregistrare pentru crearea contului de Utilizator; <br />
                b. actualizați, atunci când situația o cere, datele de
                înregistrare pentru a fi adevărate, exacte și complete în orice
                moment.{" "}
              </p>
              <p>
                Dacă veți furniza informații care nu sunt conforme cu
                realitatea, inexacte sau incomplete, WorkForMe are dreptul să
                suspende sau să blocheze contul dumneavoastră și să refuze toate
                încercările curente sau viitoare de folosire a Platformei
                WorkForMe. <br />
                WorkForMe NU are obligația de a verifica în avans materialul
                publicat de către Utilizatori. WorkForMe nu răspunde în niciun
                mod cu privire la informațiile și datele postate, difuzate sau
                transmise de către Utilizatorii sai. Dacă i se solicita de către
                un Utilizator, WorkForMe poate investiga și verifica afirmațiile
                și poate hotărî dacă informațiile respective trebuie
                îndepărtate.
              </p>
              <p>
                <b>
                  2.2. Publicarea CV-urilor / anunțurilor de recrutare prin
                  intermediul Platformei WorkForMe
                </b>
                <br />
                Platforma WorkForMe este o platforma de comunicare intre
                Utilizatori, aceștia fiind responsabili de conținutul publicat
                în Platforma WorkForMe (CV-uri, Anunțuri recrutare, etc),
                denumite în continuare "Conținut Publicat de Utilizator”. Ne
                rezervam dreptul (care poate fi exercitat la momentul ales de
                noi și fără o notificare prealabila), de a șterge, muta sau
                edita aceste mesaje sau de a restricționa accesul unora dintre
                utilizatori la una dintre platformele sale de comunicare. Aceste
                măsuri pot fi luate ca urmare a nerespectării de către
                Utilizatori a prevederilor legale sau a termenilor și
                condițiilor de utilizare a Platformei WorkForMe.
              </p>
            </div>
            <div>
              <h5>
                3. Protecția Contului de Utilizator (Utilizator Candidat sau
                Utilizator Recrutor)
              </h5>
              <p>
                Accesul dvs. la contul de Utilizator al Platformei WorkForMe
                este protejat de o parola. Vă recomandam să nu dezvăluiți
                nimănui aceasta parola. WorkForMe nu vă cere niciodată parola
                conturilor dvs în mesaje sau telefoane nesolicitate. Mai mult,
                vă recomandam să ieșiți din contul de Utilizator (i.e. să dați
                log off / sign out), la sfarsitul fiecărei sesiuni de utilizare.
                Vă sfătuim de asemenea să închideți fereastra browserului în
                care ați lucrat la sfarsitul navigării dvs. în WorkForMe. Aceste
                sfaturi sunt destinate să înlăture accesul persoanelor
                neautorizate la informațiile dvs. personale sau la corespondenta
                dvs.
              </p>
              <p>
                Sunteți răspunzători de păstrarea confidențialității asupra
                informațiilor și a parolei dumneavoastră. Veți fi răspunzători
                de utilizarea înregistrării dumneavoastră, indiferent dacă
                utilizarea se face cu sau fără voia dumneavoastră. Sunteți de
                acord să sesizați WorkForMe în legătura cu orice utilizare
                neautorizata a datelor dvs. de înregistrare în Platforma
                WorkForMe. Societatea nu vă fi răspunzătoare pentru nici o
                paguba morala sau materiala provocata prin nerespectarea de
                către dvs. a măsurilor de securitate a datelor utilizate pentru
                accesarea Platformei WorkForMe.
              </p>
            </div>
            <div>
              <h5>4. Protecția datelor cu caracter personal</h5>
              <p>
                Societatea tratează cu seriozitate confidențialitatea datelor cu
                caracter personal ale Utilizatorilor. Politica de
                confidențialitate și aspectele privind modul în care Societatea
                prelucrează datele cu caracter personal ale Utilizatorilor
                (inclusiv ale reprezentanților Utilizatorilor Recrutori) sunt
                descrise în secțiunea Politica de Confidențialitate
              </p>
            </div>
            <div>
              <h5>5. Modificări și Suspendarea accesului</h5>
              <p>
                WorkForMe își rezerva dreptul de a suspenda, modifica, adaugă
                sau șterge în orice moment porțiuni ale conținutului Platformei
                WorkForMe. De asemenea, WorkForMe își rezerva dreptul de a
                restricționa accesul utilizatorilor la o parte sau la întregul
                sau conținut.
                <br />
                WorkForMe poate, fără orice alta notificare sau formalitate și
                fără ca acest lucru să necesite explicarea atitudinii sale, să
                suspende sau să înceteze accesul dvs. la conținutul Platformei
                WorkForMe sau la o parte a acestui conținut. În acest sens,
                WorkForMe poate bloca accesul, utilizarea serviciilor sau
                folosirea oricăror altor servicii ale sale de care beneficiați,
                sau să scoată și să șteargă orice material din cadrul
                Serviciilor, pentru orice motiv. WorkForMe poate de asemenea,
                oricând dorește și fără a da socoteala, întrerupe furnizarea
                Serviciilor, sau a unei părți a lor, cu sau fără nici o
                notificare prealabila.
              </p>
            </div>
            <div>
              <h5>6. Forta Majora</h5>
              <p>
                WorkForMe, afiliații sau, în general, furnizorii de informație
                către WorkForMe nu pot fi făcuți responsabili pentru nici o
                întârziere sau eroare în conținutul furnizat de publicațiile
                noastre, rezultând direct sau indirect din cauze care nu depind
                de voința WorkForMe. Aceasta exonerare include, dar nu se
                limitează la: erorile de funcționare al echipamentului tehnic,
                lipsa funcționarii conexiunii la internet, lipsa funcționarii
                conexiunilor de telefon, virușii informatici, accesul
                neautorizat în sistemele WorkForMe, erorile de operare, greva,
                etc.
              </p>
            </div>
            <div>
              <h5>7. Politica de confidentialitate a datelor</h5>
              <p>
                Societatea prelucrează o serie de date cu caracter personal ale
                Utilizatorilor atunci când utilizează Serviciile WorkForMe.
                <br />
                Aceasta politica de confidențialitate („Politica”) descrie ce
                tipuri de date cu caracter personal sunt prelucrate, cum sunt
                acestea utilizate, care sunt opțiunile dvs. în legătura cu
                aceste prelucrări, precum și modul în care Noi vom respecta
                drepturile pe care le aveți în calitate de persoana vizata
                conform legislației privind protecția datelor cu caracter
                personal, inclusiv Regulamentul (UE) 2016/679 („GDPR”).
              </p>
              <p>
                ÎNAINTE DE A UTILIZA WORKFORME.RO, APLICAȚIA WORKFORME SAU
                SERVICIILE NOASTRE, VĂ RECOMANDAM SĂ CITIȚI CU ATENȚIE ACEASTA
                POLITICA PENTRU A ÎNȚELEGE CUM VĂ SUNT PRELUCRATE DATELE CU
                CARACTER PERSONAL.
              </p>
              <p>
                1. Cine este responsabil de prelucrarea datelor dvs.?
                <br />
                WorkForMe este operatorul datelor cu caracter personal, conform
                legislației privind protecția datelor cu caracter personal
                inclusiv GDPR, în ceea ce privește datele cu caracter personal
                ale Utilizatorilor colectate și prelucrate prin intermediul
                WorkForMe.ro. <br />
                2. Ce date prelucram? <br />
                Prelucram următoarele categorii de date cu caracter personal:
                date pe care le furnizați în mod direct, crearea contului de
                Utilizator, atunci când vă creați un cont de Utilizator, trebuie
                să ne furnizați o serie de date, cum ar fi nume, prenume, adresa
                de e-mail/ nr. telefon mobil, vârsta, etc., datele din profilul
                de Utilizator înregistrat
                <br />
                3. Cui dezvăluim datele?
                <br />
                Putem dezvălui datele dvs cu caracter personal către: entitățile
                și/sau persoanele împuternicite de noi implicate în furnizarea
                Serviciilor inclusiv în furnizarea comunicărilor comerciale (cum
                ar fi furnizorilor de centre de date, furnizorii de platforma de
                e-mailing cum ar fi Google Mail); Utilizatorilor Recrutori
                inclusiv dacă este cazul celor situați în afara EEA; dacă avem
                obligația de a divulga datele personale în scopul conformării cu
                orice obligație legala sau decizie a unei autorități judiciare,
                autorități publice sau organ guvernamental; dacă ni se cere sau
                ni se permite în alt mod să facem acest lucru conform legislație
                aplicabile. <br />
                4. Cat păstram datele? <br />
                Păstrăm datele dvs cu caracter personal cat este necesar pentru
                îndeplinirea scopurilor pentru care au fost colectate, cu
                respectarea procedurilor interne privind retenția datelor,
                inclusiv a regulilor de arhivare aplicabile. În general, Datele
                Utilizatorilor Candidați sunt păstrate atât timp cat acesta are
                un cont de Utilizator în Platforma WorkForMe. Datele cu caracter
                personal vor fi șterse dacă Utilizatorul Candidat solicita
                dezactivarea și ștergerea contului, sau după o perioada de minim
                5 ani de la data la care Utilizatorul Candidat devine inactiv
                (i.e. de la data ultimei interacțiuni în Platforma WorkForMe).{" "}
                <br />
                5. Ce drepturi aveți în calitate de persoana vizata? <br />
                Conform legii, vă sunt recunoscute următoarele drepturi în
                calitate de persoana vizata:
              </p>
              <p>
                a. Dreptul de acces
                <br />
                puteți obține de la noi confirmarea ca prelucram datele dvs.
                personale, precum și informații privind specificul prelucrării
                <br />
                b. Dreptul de a corecta datele
                <br />
                puteți să ne solicitați să modificam datele dvs. personale
                incorecte ori, după caz, completarea datelor care sunt
                incomplete. <br />
                c. Dreptul la ștergere
                <br />
                puteți solicita ștergerea datelor personale atunci când: <br />
                (i) acestea nu mai sunt necesare pentru scopurile pentru care
                le-am colectat și le prelucram; <br />
                (ii) v-ați retras consimțământul pentru prelucrarea datelor și
                noi nu le mai putem prelucra pe alte temeiuri legale; <br />
                (iii) datele sunt prelucrate contrar legii; respective
                <br />
                (iv) datele trebuie șterse conform legislației relevante.
              </p>
            </div>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default TermsModal;
