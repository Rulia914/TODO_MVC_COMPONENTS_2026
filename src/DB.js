export default class DB {
    static setApiUrl(apiUrl) {
      this.apiUrl = apiUrl;
    }
  
    static async findAll() {
      const response = await fetch(this.apiUrl + "/todos");
      return response.json();
    }
  }