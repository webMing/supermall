import ffnw from "./ffnw";
export function getMultiData() {
  return ffnw.get({
    url: "/home/multidata"
  });
}
