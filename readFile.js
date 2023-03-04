const readline = require('readline');
const fs = require('fs');

const readFile = (filename) => {
  var lineno = 0;
  var products = [];
  var Producers = [];
  const myInterface = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  //wyswietlenie naglowkow kolumn
  console.log('Nr.'.padEnd(4)+'Producent'.padEnd(12)+'Przekątna ekranu'.padEnd(17)+'Rozdzielczość ekranu'.padEnd(21)+
    'Powierzchnia ekranu'.padEnd(20)+'Dotykowy'.padEnd(9)+'Procesor'.padEnd(11)+'Rdzenie'.padEnd(9)+'Taktowanie[MHz]'.padEnd(16)+
    'RAM'.padEnd(7)+'Pojemność dysku'.padEnd(16)+'Rodzaj'.padEnd(7)+'Układ graficzny'.padEnd(24)+'Pamięć'.padEnd(7)+'System'.padEnd(24)+
    'Napęd')

  myInterface.on('line', function (line) {
    lineno++;
    //zapisanie danych oddzielonych srednikiem do zmiennej (tablicowej)
    var zmienna = line.split(';')
    products.push(zmienna[0]) //zmienna globalna

    //numer wiersza
    var row = lineno+'.'

    //zapisanie producentow do tablicy
    if(!Producers.find(producer => producer === zmienna[0]))
      Producers.push(zmienna[0])

    //wyswietlenie informacji o produktach
    console.log(row.padEnd(4)+zmienna[0].padEnd(12)+zmienna[1].padEnd(17)+zmienna[2].padEnd(21)+
      zmienna[3].padEnd(20)+zmienna[4].padEnd(9)+zmienna[5].padEnd(11)+zmienna[6].padEnd(9)+zmienna[7].padEnd(16)+
      zmienna[8].padEnd(7)+zmienna[9].padEnd(16)+zmienna[10].padEnd(7)+zmienna[11].padEnd(24)+zmienna[12].padEnd(7)+zmienna[13].padEnd(24)+
      zmienna[14])
  });

  myInterface.on('close', () => {
    //wyswietlenie liczby komputerow wg producenta
    console.log('\nLiczba laptopów wg. producenta:')
    Producers.map(p => console.log(p.padEnd(9)+products.filter(p2 => p2 === p).length+' sztk.'))
    
  })
} 



module.exports={
    readFile
}