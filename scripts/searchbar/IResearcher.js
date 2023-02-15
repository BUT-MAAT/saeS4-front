class IResearcher
{
  constructor() {
    if(this.constructor == IResearcher){
      throw new Error(" Object of Abstract Class cannot be created");
    }
  }
  getSearchResult(comparator){
    throw new Error("Abstract Method has no implementation");
  }
}
export default IResearcher
