import { APPLICATION_KEY, APPLICATION_SITE_NAME } from "../../../environments/environment";

interface IApiQueryParams {
  [q: string]: string;
}

const DEFAULT_QUERY_PARAMS: IApiQueryParams = {
  key: APPLICATION_KEY,
  site: APPLICATION_SITE_NAME
};

export {
  IApiQueryParams,
  DEFAULT_QUERY_PARAMS
};
