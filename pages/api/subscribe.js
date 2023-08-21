import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from "google-auth-library"

export default async function handler(req, res) {
    const toEmail = req.body.email;

    const doc = new GoogleSpreadsheet('1uUg2i_ZHnbS0TCcwV5LY9CT6SjHaNYkImEsBJDhiaF4');
    const sheetType = req.body.sheetType;
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
    });


    await doc.loadInfo(); // loads document properties and worksheets

    const index = doc.sheetsByIndex.findIndex(sheet => sheet.title === 'Sheet1');

    const sheet = doc.sheetsByIndex[index]; // or use doc.sheetsById[id]
    const date = new Date().toLocaleDateString("en-US");
    await sheet.addRow({ Timestamp: date, Email: toEmail });

    res.status(200).json({
        accepted: true
    });
}