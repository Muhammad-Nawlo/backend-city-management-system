import path from 'path';
import fs from 'fs';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default async (req, update = false) => {

    if (req.files.length === 0 && !update) {
        return null;
    }

    if (req.files.length === 0 && update) {
        return 'DONT_UPDATE';
    }
    const file = req.files[0];
    const flag = false

    // Process and save the image to the local storage
    const folder = path.join(__dirname, '../public/files');

    // Create the 'images' folder if it doesn't exist
    fs.mkdir(folder, {recursive: true}, cb => {
    });

    const uniqueFilename = Date.now() + '-' + file.originalname;

    const imagePath = path.join("/public/files", uniqueFilename);

    // Move the uploaded file to the 'images' folder with the unique filename
    await fs.rename(file.path, imagePath, (err) => {
    });

    return file.filename;
}