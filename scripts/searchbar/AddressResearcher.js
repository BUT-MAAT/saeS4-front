import researcher from "~/scripts/searchbar/IResearcher";
import json from '/static/postal.json'
class AddressResearcher extends  researcher{

  constructor() {
    super();
    this.api = "http://localhost:9000/api/address/getaddress/"
  }

  getSearchResult(comparator){
    return new Promise((resolve, reject) => {

      let str = comparator.trim().replaceAll(" ","+");
      let url = this.api+str;
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let json = JSON.parse(xhr.responseText)
          resolve(AddressResearcher.parseResult(json))
        }};
      xhr.send();
   });
  }
  ParseJson(text){
    const splitedText = text.split(" ");
    const postal = splitedText[splitedText.length - 2];
    const city = splitedText[splitedText.length - 1];
    const address = splitedText.slice(0, -2).join(" ");
    let template = `
      {
        "street" : "${address}",
        "postal" : "${postal}",
        "city"   : "${city}"
      }`
    return JSON.parse(template)
  }
  static parseResult(response){
    let results = []
    response.forEach(element => {
      results.push(element.label)
    })
    return results
  }
}
export default AddressResearcher
