const searchHandler = (req) => {
    const searchTerm = req.query.q || '';
    const fields = req.query.fields ? req.query.fields.split(',') : [];

    const searchConditions = fields.length ? {
        $or: fields.map(field => ({
            [field]: { $regex: searchTerm, $options: 'i' }
        }))
    } : {};
    return searchConditions
}


export default searchHandler