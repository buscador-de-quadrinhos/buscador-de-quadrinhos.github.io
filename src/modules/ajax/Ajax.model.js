const AjaxModel = function Ajax($http) {
    function get (url, params) {
        if (!params) {
            params = {};
        }
        return $http({
            method: "GET",
            url: url,
            params: params
        });
    }

    return {
        get: get
    };
};

export default AjaxModel;