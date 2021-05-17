const userEndpoint = (router) => {
    router.get('/api/test', async (request, response, next) => {
        try {
            response.status(200).send('Test - ok');
        } catch (error) {
            console.log(error)
        }
    });
};

export default userEndpoint;
