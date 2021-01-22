const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');
const PDFWriter = require('./PDFWriter');

const leitor = new Reader();
const escritor = new Writer();

async function main(){
  const data = await leitor.Read('./users.csv');
  const dadosprocessados = Processor.Process(data);
  const usuarios = new Table(dadosprocessados);

  const html = await HtmlParser.Parse(usuarios);
  escritor.Write(`${Date.now()}.html`,html);
  PDFWriter.WriterPDF(`${Date.now()}.pdf`,html);
  
}

main();