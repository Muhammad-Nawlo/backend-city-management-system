import AdRepository from "../repositories/adRepository.js";

const adRepository = new AdRepository();

export class AdService {
    async create(adDTO) {
        const newAd = await adRepository.create(adDTO);
        return newAd;
    }

    async update(adDTO) {
        const ad = await adRepository.update(adDTO);
        return ad;
    }

    async delete(adDTO) {
        const ad = await adRepository.delete(adDTO);
        return ad;
    }

    async get(adDTO) {
        const ad = await adRepository.getById(adDTO);
        return ad;
    }


    async all(req) {
        const ads = await adRepository.all(req);
        return ads;
    }
}

export default AdService;