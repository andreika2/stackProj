import {IOwner} from "../../store/store.entity";

enum AnswerPanelOwner {
  Link = "link",
  ProfileImage = "profile_image",
  DisplayName = "display_name"
}

interface IAnswerPanelInfo {
  owner: Pick<IOwner, AnswerPanelOwner>;
  score: number;
}

export {
  IAnswerPanelInfo
};
