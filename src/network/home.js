import ffnw from "network/ffnw";
export function getMultiData() {
  return ffnw.get({
    url: "/home/multidata"
  });
}

export function getHomeGoods(type,page){
  return ffnw.get({
    url: "/home/data",
    params:{
     type,
     page
    }
  });
}