import { getJsonFromCsv } from 'convert-csv-to-json';
import { join } from 'path';


class HelperServer {

    private CSV_PATH = join(__dirname, "./../../mock/covid_19_clean_complete.csv");

    fetchDataFromFile() {
        const json = getJsonFromCsv(this.CSV_PATH);
        const data = [];
        json.forEach((dataNode) => {
            const keys = Object.keys(dataNode)[0].split(',');
            const values = (Object.values(dataNode)[0] as string).split(',');
            const dataObj = {};
            if (keys.length === values.length) {
                keys.forEach((key, index) => {
                    key = key.toLowerCase().replace('/', '_');
                    dataObj[key] = values[index];
                })
            }
            data.push(dataObj)
        });
        return data;
    }

    generateConstantData() {
        return {
            countries: [
                { title: "us", color: "#67001f" },
                { title: "brazil", color: "#b2182c" },
                { title: "russia", color: "#df5b50" },
                { title: "india", color: "#f3a77e" },
                { title: "spain", color: "#f9ddc6" },
                { title: "uk", color: "#f7f7f7" },
                { title: "italy", color: "#cde6f3" },
                { title: "france", color: "#8fc9db" },
                { title: "germany", color: "#4791c5" },
                { title: "iran", color: "#1e67ac" },
                { title: "peru", color: "#052e6a" },
                { title: "turkey", color: "#d6003b" },
                { title: "chile", color: "#eb485c" },
                { title: "mexico", color: "#eca99f" },
                { title: "china", color: "#fee7df" },
                { title: "pakistan", color: "#235011" },
                { title: "saudi", color: "#491150" },
                { title: "africa", color: "#503111" },
                { title: "canada", color: "#deeff7" },
                { title: "banglades", color: "#90bedc" }],
            active: 12214134,
            affectedCountries: 222,
            cases: 176485055,
            critical: 85046,
            deaths: 3812244,
            recovered: 160458677,
            todayCases: 78009,
            todayDeaths: 1760
        }
    }

}

export default new HelperServer();