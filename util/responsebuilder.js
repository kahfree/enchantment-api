function buildSimpleResponse(body,status){
    return new Response(
        body,
        {
            status: status,
            headers: {
                "Content-Type": "application/json"
            },
        });
}

module.exports = {
    buildSimpleResponse
}