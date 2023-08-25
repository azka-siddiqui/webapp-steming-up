// CODE FOR MAIL STORING (UNUSED)


import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function handler(req, res) {
    const toEmail = req.body.email;


    const doc = new GoogleSpreadsheet('1Id_DFHcfX0rD_WAxY0GgkMNbeVD09eMcN5mEsczvi1I');
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
    });


    await doc.loadInfo()

    const index = doc.sheetsByIndex.findIndex(sheet => sheet.title === 'Sheet1');

    const sheet = doc.sheetsByIndex[index];
    const date = new Date().toLocaleDateString("en-US");
    await sheet.addRow({ Timestamp: date, Email: toEmail });

    res.status(200).json({
        accepted: true
    });
}