// Übertrage folgende arithmetische Operatoren in deinen Code - Editor und schaue dir das Ergebnis an:

// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt.
let score1 = 5 + 5 * 10;
console.log('Ergebnis: ' + score1);

// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern.
let score2 = (5 + 5) * 10;
console.log('Ergebnis: ' + score2);

// Du kannst Werte auf Variablen addieren.
let score3 = 0;
score3 = score3 + 10;
console.log('Ergebnis: ' + score3);

// Hiervon gibt es eine verkürzte Version.
let score4 = 0;
score4 += 10;
console.log('Ergebnis: ' + score4);


// Nun probiere es hiermit:
// Inkrementierung und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;

// Verwende Inkrement - Operatoren
zahl++;
console.log('increment: ' + zahl);

// Verwende Dekrement - Operatoren
zahl--;
console.log('dekrement: ' + zahl);
