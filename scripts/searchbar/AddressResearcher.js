import researcher from "~/scripts/searchbar/IResearcher";
import json from '/static/postal.json'
class AddressResearcher extends  researcher{

  constructor() {
    super();
    this.api = "https://api-adresse.data.gouv.fr/search/?q="
  }

  getSearchResult(comparator){
    return new Promise((resolve, reject) => {
      if(comparator.includes('  ') || str == " " || comparator.replaceAll(" ","").length <3){
        reject("Chaine de caractère trop courte")
        return
      }

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
    let data = response.features
    let results = []
    data.forEach(element => {
      results.push(element.properties.label)
    })
    return results
  }
}
export default AddressResearcher
