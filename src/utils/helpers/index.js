export const replaceUrl = (url, data) => {
    var regex = new RegExp(":(" + Object.keys(data).join("|") + ")", "g");
    return url?.replace(regex, (m, $1) => data[$1] || m);
  };
  