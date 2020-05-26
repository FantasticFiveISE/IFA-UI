import Api from './Api';
import ApiMock from './mock/Api';

export const DEBUG = true;

class ApiFactory {
    getApi = () => {
        if(DEBUG){
            return ApiMock;
        }
        return Api;
    }
}
export default new ApiFactory();