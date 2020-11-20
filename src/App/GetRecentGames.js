export const getRecentGames = async (page) => {
  var d = new Date();
  var date = new Date(new Date().setDate(new Date().getDate() - 30));
  let month = d.getMonth();
  let monthbefore = date.getMonth();

  if (d.getMonth() < 10) month = "0" + d.getMonth();
  if (date.getMonth() < 10) monthbefore = "0" + date.getMonth();

  let today = d.getFullYear() + "-" + month + "-" + d.getDate();
  let last30days =
    date.getFullYear() + "-" + monthbefore + "-" + date.getDate();

  const data = await (
    await fetch(
      `https://api.rawg.io/api/games?dates=${last30days},${today}&page_size=15`
    )
  ).json();
  return data.results;
};
