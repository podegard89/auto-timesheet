const { GoogleSpreadsheet } = require('google-spreadsheet');
const secrets = require('./secrets');

class Sheet {
    constructor() {
        this.doc = new GoogleSpreadsheet(secrets.sheetURL);
    }

    async load() {
        // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
        await this.doc.useServiceAccountAuth(secrets.credentials);

        await this.doc.loadInfo(); // loads document properties and worksheets
    }

    async addRows(rows) {
        const sheet = this.doc.sheetsByIndex[0]; // use first sheet
        await sheet.addRows([rows]);
    }

    async getRows() {
        const sheet = this.doc.sheetsByIndex[0];
        const rows = await sheet.getRows();
        return rows;
    }
}

module.exports = { Sheet }