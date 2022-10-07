import {FormControl, FormGroup, Validators} from "@angular/forms";

const SEARCH_PANEL_KEY = "search";

const DEFAULT_SEARCH_STRING = "";

const SEARCH_END_POINT_NAME = "search/advanced";

const DEFAULT_REDIRECT_URL = "/";

const SEARCH_FORM_GROUP = new FormGroup({
  search: new FormControl('', Validators.required)
});

export {
  SEARCH_PANEL_KEY,
  SEARCH_FORM_GROUP,
  DEFAULT_REDIRECT_URL,
  DEFAULT_SEARCH_STRING,
  SEARCH_END_POINT_NAME
};
