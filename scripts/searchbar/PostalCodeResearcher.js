import researcher from "~/scripts/searchbar/IResearcher";
import json from '/static/postal.json'
class PostalCodeResearcher extends  researcher{

  constructor() {
    super();
    this.codePostaux = json.postal_code
  }
  getSearchResult(comparator){
    let tmpTab = this.codePostaux
      .map(item => item.toString())
      .filter(item => item.includes(comparator))
    tmpTab.length = tmpTab.length < 5 ? tmpTab.length : 5
    return tmpTab;
  }
}
export default PostalCodeResearcher
