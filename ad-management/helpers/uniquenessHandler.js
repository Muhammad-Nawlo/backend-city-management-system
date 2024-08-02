export default async function (model, cond) {
    const user = await model.findOne(cond);
    if (user) {
        throw new Error(`A record with ${Object.keys(cond)} already exists`);
    }
}