class Weather {
    constructor(city) {
        this.apiKey = '951c60a698156170e5bbed4a9bbab2a1',
        this.city = city
        
    }
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        if(response.ok){
            const responseData = await response.json();
            return responseData;

        }else{
            throw Error(response.status);
        }

    }
    changelocation(city) {
        this.city = city
    }
    get location(){
        return this.city;
    }
}