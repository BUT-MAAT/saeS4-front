class Researcher
{
  constructor() {
    if(this.constructor == Researcher){
      throw new Error(" Object of Abstract Class cannot be created");
    }
  }
  getSearchResult(comparator){
    throw new Error("Abstract Method has no implementation");
  }
}
export default Researcher
