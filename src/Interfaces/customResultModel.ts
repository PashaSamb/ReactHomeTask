import ApiResponseModel from "./ApiResponseModel";

export default interface customResultModel {
    result: ApiResponseModel | null;
    error: string | null;
}