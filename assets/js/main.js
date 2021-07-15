// Übertrage folgende arithmetische Operatoren in deinen Code - Editor und schaue dir das Ergebnis an:

// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt.
var score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);

// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern.
var score = (5 + 5) * 10;
console.log('Ergebnis: ' + score);

// Du kannst Werte auf Variablen addieren.
var score = 0;
score = score + 10;
console.log('Ergebnis: ' + score);

// Hiervon gibt es eine verkürzte Version.
score += 10;
console.log('Ergebnis: ' + score);


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
