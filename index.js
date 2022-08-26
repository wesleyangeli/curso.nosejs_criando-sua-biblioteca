import fs from "fs";

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados.length === 0 ? "vazia" : arrayResultados;
}

function trataErro(erro) {
  throw new Error(erro.code, "não há arquivo no caminho");
}

async function pegaArquivo(dir) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(dir, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

export default pegaArquivo;
