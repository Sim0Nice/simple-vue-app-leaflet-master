Gruppenmitglieder:

Isabel Wagner 
Matrikelnummer: 34268

Manuel Schneider
Matrikelnummer: 34266

Simon Salat
Matrikelnummer: 34322


URL zur Anwendung in der Cloud (ohne backend)

https://nice-sea-0d1ea8803.2.azurestaticapps.net


Architektur des Codes

Die Komponente Map.vue enthält die Karte und stellt die im Daten-Array(backend) gespeicherten Punkte als Marker dar.
Die Einträge aus dem Backend werden hierbei über die App.vue als "markers" in die Map.vue übergeben. 
Bei einem Klick auf die Karte liest Map.vue die aktuell gewählten Koordinaten aus. 
Diese werden an App.vue übergeben und in "lat"(latitude) und "lng"(longitude) gespeichert.
Wird ein Marker geklickt, wird das jeweilige Objekt an App.vue übergeben.

Die Komponente "AddEntry" enthält einen Button, durch den ein Pop-up-Fenster, in dem ein neuer Eintrag hinzugefügt werden kann, geöffnet wird.
Die Komponente ist in App.vue eingebettet und wird sichtbar, wenn "lat" nicht Null ist.
Die eingegeben Daten werden an App.vue übergeben und dort über /post ins Backend übergeben.

Wenn ein Pin geklickt wurde, wird von der App.vue das entsprechende Objekt an InfoEntry übergeben.
Die Komponente InfoEntry enthält die Infos, die der User dem jeweiligen Eintrag hinzugefügt hat. 
Die Komponente hat eine Kind-Komponente FungiDescription, in der je nachdem welcher "type" übergeben wird, 
den passenden Steckbrief des Pilzes in InfoEntry einbettet. 



Auflistung der verwendeten fremden Codebestandteile

Die Datei server.js wurde von der Prof-Rating-App übernommen und an unsere Bedürfnisse angepasst.
Auch Code-Schnipsel in App.vue sind an die Prof-Rating-App angelehnt.


Beschreibung der notwendigen Schritte, um die Vue‐Anwendung lokal zu starten


------> 1. Terminal Starten -> npm i -> npm run dev

------> 2. Terminal Starten -> cd backend -> node server.js 

------> Über http://localhost Webseite aufrufen 


