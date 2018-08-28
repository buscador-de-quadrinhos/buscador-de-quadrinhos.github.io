const ComicsApiModel = (AjaxModel, $cacheFactory, $q) => {

    const cache = $cacheFactory("comics-api");

    const getComics = (url) => {
        const defer = $q.defer();

        if($cacheFactory.get("comics-api")["url"] !== undefined) {
            defer.resolve($cacheFactory("comics-api")["url"]);
        } else {
            AjaxModel.get(url).then((response)=>{
                cache.put(url, response);
                defer.resolve(response);
            });
        }

        return defer.promise;
    };

    return {
        getComics: getComics
    };

};

ComicsApiModel.$inject = ["AjaxModel", "$cacheFactory", "$q"];

export default ComicsApiModel;