import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";
import Ad from "../models/Ad.js";

class AdRepository {
    async create(adDTO) {
        const newService = new Ad({
            image: adDTO.image,
            status: adDTO.status,
            withAuth: adDTO.withAuth,
            link: adDTO.link,
        });
        const ad = await newService.save();
        return ad;
    }

    async update(adDTO) {
        const ad = await Ad.findById(adDTO.id)
        if (!ad) {
            throw new NotFoundError();
        }
        ad.status = adDTO.status;
        ad.withAuth = adDTO.withAuth;
        ad.link = adDTO.link;
        if (adDTO.image !== 'DONT_UPDATE') {
            ad.image = adDTO.image;
        }
        await ad.save();
        return ad;
    }

    async delete(adDTO) {
        const ad = await Ad.findByIdAndDelete(adDTO.id);
        if (!ad) {
            throw new NotFoundError();
        }
        return ad;
    }

    async getById(adDTO) {
        const ad = await Ad.findById(adDTO.id);
        if (!ad) {
            throw new NotFoundError();
        }
        return ad;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
        };
        const searchOptions = searchHandler(req)
        const ad = await Ad.find(searchOptions).paginate(options);
        return ad;
    }
}

export default AdRepository;
