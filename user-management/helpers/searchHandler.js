const searchHandler = (req) => {
    const searchTerm = req.query.q || '';
    const fields = req.query.fields ? req.query.fields.split(',') : [];

    let searchConditions = {};

    if (fields.length) {
        const orConditions = fields.map(field => {
            const condition = {
                [field]: { $regex: searchTerm, $options: 'i' }
            };

            // Check if the search term can be converted to a number
            if (!isNaN(searchTerm)) {
                const numericCondition = {
                    [field]: Number(searchTerm)
                };

                return {
                    $or: [condition, numericCondition]
                };
            }

            return condition;
        });

        searchConditions = { $or: orConditions };
    }

    return searchConditions;
}

export default searchHandler;
