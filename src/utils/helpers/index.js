// Replace placeholders in a URL with data values
export const replaceUrl = (url, data) => {
  var regex = new RegExp(":(" + Object.keys(data).join("|") + ")", "g");
  return url?.replace(regex, (m, $1) => data[$1] || m);
};

// Calculate and format the time difference to present
export function timeDiffToPresent(targetTime) {
  const currentTime = new Date();
  const timeDifference = targetTime - currentTime;

  const seconds = Math.abs(Math.floor(timeDifference / 1000));
  const minutes = Math.abs(Math.floor(seconds / 60));
  const hours = Math.abs(Math.floor(minutes / 60));
  const days = Math.abs(Math.floor(hours / 24));

  if (timeDifference < 0 || timeDifference > 0) {
    if (days > 0) {
      return days + " day";
    } else if (hours > 0) {
      return hours + " hour";
    } else if (minutes > 0) {
      return minutes + " min";
    } else {
      return seconds + " sec";
    }
  } else {
    return "Just now";
  }
}
