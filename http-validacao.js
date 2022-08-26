import fetch from "node-fetch";

function manejaErros(err) {
  throw new Error(err.message);
}

async function checaStatus(arrayUrls) {
  try {
    const arrayStatus = await Promise.all(
      arrayUrls.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );
    return arrayStatus;
  } catch (err) {
    manejaErros(err);
  }
}

function geraArrayUrlsValidas(arrayUrls) {
  return arrayUrls.map((objLink) => Object.values(objLink).join());
}

async function validaUrls(arrayUrls) {
  const links = geraArrayUrlsValidas(arrayUrls);
  const statusLinks = await checaStatus(links);

  const resultado = arrayUrls.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice],
  }));
  return resultado;
}

export default validaUrls;
