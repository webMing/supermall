import ffnw from "network/ffnw";
export function getMultiData() {
  return ffnw.get({
    url: "/home/multidata"
  });
}
