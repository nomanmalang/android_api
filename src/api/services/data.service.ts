import helperService from './helper.service';

class DataService {

    getData() {
        return new Promise((resolve, reject) => {
            const csv_data = helperService.fetchDataFromFile();

            if(!csv_data || csv_data.length === 0) {
                reject("Error!!! Data not found");
            }

            resolve(csv_data);
        })
    }

    getPieConstantData() {
        return new Promise((resolve, reject) => {
            const csv_data = helperService.generateConstantData();

            if(!csv_data || Object.keys(csv_data).length === 0) {
                reject("Error!!! Data not found");
            }

            resolve(csv_data);
        })
    }
}

export default new DataService();