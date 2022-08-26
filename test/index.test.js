import { expect, test } from "@jest/globals";
import pegaArquivo from "../index.js";

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

const caminhoComLink =
  "F:/Alura/Java Script/curso.nosejs_criando-sua-biblioteca/test/arquivos/texto1.md";
const caminhoSemLink =
  "F:/Alura/Java Script/curso.nosejs_criando-sua-biblioteca/test/arquivos/texto2.md";
const caminhoSemArquivo =
  "F:/Alura/Java Script/curso.nosejs_criando-sua-biblioteca/test/arquivos/";

describe("pegaArquivo::", () => {
  it("É uma função", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("Retorna array com resultados", async () => {
    const result = await pegaArquivo(caminhoComLink);
    expect(result).toEqual(arrayResult);
  });
  it("Quando não há link retorna 'vazia' ", async () => {
    const result = await pegaArquivo(caminhoSemLink);
    expect(result).toBe("vazia");
  });
  it("deve lançar um erro na falta de arquivo", async () => {
    await expect(pegaArquivo(caminhoSemArquivo)).rejects.toThrow("EISDIR");
  });
});
