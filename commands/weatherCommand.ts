const axios = require("axios");
const chalk = require("chalk");

class WeatherCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("weather <city>")
            .description("Fetch current weather information for a city")
            .action((city) => this.fetchWeather(city))
    }

    async fetchWeather(city) {
        try {
            const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);

            if (!geoRes.data.results || geoRes.data.results.length === 0) {
                console.log(chalk.red("Error: City '" + city + "' not found"));
                return;
            }

            const location = geoRes.data.results[0];
            const lat = location.latitude;
            const lon = location.longitude;

            const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const weather = weatherRes.data.current_weather;

            console.log(chalk.green("City:"), chalk.white(location.name + ", " + location.country));
            console.log(chalk.green("Temperature:"), chalk.yellow(weather.temperature + "°C"));
        } catch (err) {
            console.log(chalk.red("Error: Could not fetch weather for '" + city + "'"));
        }
    }
}

module.exports = WeatherCommand;

export { };
