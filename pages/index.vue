<template>
    <div>
        <section id="main" class="container">
            <div class="content-home flexbox">
                <div class="flexbox align-center">
                    <h1 class="font-size-7em color-white half">METALLIC ART SRLS</h1>
                </div>
                <div class="flexbox align-center center half">
                    <div>
                        <p class="color-white font-size-1-5em">
                            Metallic Art srls è una nuova azienda in grado di soddisfare
                            le più moderne esigenze nel campo della carpenteria metallica 
                            di precisione.
                        </p>
                        <button id="keep-reading"><a href="/#chi-siamo"><img src="@/assets/svg/angles-down-solid.svg" style="filter: invert(1)" /></a></button>
                    </div>
                </div>
            </div>
        </section>
        <section id="chi-siamo" class="container">
            <div class="content">
                <h1 class="font-size-7em color-white half">Chi siamo</h1>
                <p class="color-white font-size-2em line-height-50px" style="margin: 0">
                    Metallic Art srls è una nuova azienda in grado di soddisfare le più moderne esigenze nel campo della 
                    carpenteria metallica di precisione. La ditta opera con assoluta affidabilità e professionalità grazie
                    ad un team dinamico e ricco di esperienza, specializzato nella lavorazione del ferro, dell’acciaio inossidabile 
                    e dell’alluminio plexiglass e legno.
                    Il nostro reparto dispone di un' impianto di taglio laser, con campi di lavoro di 3000x2000 mm con capacità di taglio fino a 20 mm di spessore;
                    una postazioni di saldatura e due torni
                    L’azienda è dislocata su un area di 300 mq coperti, arrivando ad ottenere una estrema versatilità che le consente di spaziare dalla produzione
                    standard alla fabbricazione di pezzi particolari e su disegno.
                    Metallic Art srls  persegue il ciclo completo della fornitura: Dal progetto e studio di fattibilità, all’analisi dei costi, sviluppo campionatura,
                    approvazione del cliente, pre-serie e infine produzione. La progettazione viene eseguita con software bidimensionali e tridimensionali.
                    La sua Mission è garantire qualità e soddisfazione ai clienti.
                </p>
            </div>
        </section>
        <section id="servizi" class="container">
            <div class="content">
                <h1 class="font-size-7em color-white">La produzione di Metallic Art Srls attualmente riguarda:</h1>
                <p class="color-white font-size-2em line-height-50px" style="margin: 0">
                    Carpenteria metallica di precisione;<br>
                    Taglio laser;<br>
                    Presso-piegatura;<br>
                    Saldatura e assemblati su richiesta dal cliente;<br>
                    Produzione componenti in lamiera;<br>
                    Strutture saldate per macchine agricole, industriali, olearie, ecc;<br>
                    Lavorazioni personalizzate.
                </p>
            </div>
        </section>
        <section id="contatti" class="container">
            <div class="content flexbox align-center">
                <div class="half">
                    <h1 class="font-size-7em color-white">Contatti</h1>
                    <div class="flexbox align-center" style="margin-bottom: 20px">
                        <img src="@/assets/svg/location-pin-solid.svg" style="filter: invert(1); width: 30px;" />
                        <span style="padding-left: 20px"><p class="color-white font-size-2em" style="margin: 0">Via Bramea, 36 - Rapolla(PZ)</p></span>
                    </div>
                    <div class="flexbox align-center" style="margin-bottom: 20px">
                        <img src="@/assets/svg/phone-solid.svg" style="filter: invert(1); width: 30px;" />
                        <span style="padding-left: 20px"><p class="color-white font-size-2em" style="margin: 0">Tel. 0972 760145</p></span>
                    </div>
                    <div class="flexbox align-center" style="margin-bottom: 20px">
                        <img src="@/assets/svg/phone-solid.svg" style="filter: invert(1); width: 30px;" />
                        <span style="padding-left: 20px"><p class="color-white font-size-2em" style="margin: 0">Tel. Mattia 329 77 83 647</p></span>
                    </div>
                    <div class="flexbox align-center" style="margin-bottom: 20px">
                        <img src="@/assets/svg/phone-solid.svg" style="filter: invert(1); width: 30px;" />
                       <span style="padding-left: 20px"><p class="color-white font-size-2em" style="margin: 0">Tel. Giovanni 328 31 54 166</p></span>
                    </div>
                    <div class="flexbox align-center" style="margin-bottom: 20px">
                        <img src="@/assets/svg/envelope-solid.svg" style="filter: invert(1); width: 30px;" />
                        <span style="padding-left: 20px"><p class="color-white font-size-2em" style="margin: 0;">metallicartsrls@gmail.com</p></span>
                    </div>
                    <div class="flexbox align-center">
                        <img src="@/assets/svg/envelope-solid.svg" style="filter: invert(1); width: 30px;" />
                        <span style="padding-left: 20px"><p class="color-white font-size-2em" style="margin: 0">metallic.art@pec.it</p></span>
                    </div>
                </div>
                <!--QUI È DA METTERE GOOGLE MAPS-->    
            </div>
        </section>
    </div>
</template>
<style lang="scss">
    section#main{
        background: url(@/assets/img/bg2.jpg) no-repeat center center scroll;
        background-size: cover;
    }
    section#chi-siamo{
        background: url(@/assets/img/bg3.jpg) no-repeat center center scroll;
        background-size: cover;
    }
    section#servizi{
        background: url(@/assets/img/bg4.jpeg) no-repeat center center scroll;
        background-size: cover;
    }
    section#contatti{
        background: url(@/assets/img/bg5.jpg) no-repeat center center scroll;
        background-size: cover;
    }

    button#keep-reading{
        width: 10%;
        background: transparent;
        border: 0ch;
    }
</style>