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

function buildSimpleJSONResponse(body,status){
    return new Response(
        JSON.stringify(body),
        {
            status: status,
            headers: {
                "Content-Type": "application/json"
            },
        });
}

module.exports = {
    buildSimpleResponse,
    buildSimpleJSONResponse
}