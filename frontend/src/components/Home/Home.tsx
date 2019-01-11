import * as React from "react";
import { ListViewModel } from "../../view-models/list-jobs";
import { observer, inject } from "mobx-react";
import "../../shared/list-all.css";
import { ListsStore } from "../../store/lists-store";
import NavbarPage from "../NavBar/NavbarPage";
import FooterPage from "../FooterPage/FooterPage";
import Content from "../AllJobs/Content";
import { UserStore } from "src/store/UserStore";
import { JobViewModel } from "../../view-models/job";

interface Props {
  listsStore: ListsStore;
  userStore: UserStore;
}

interface State {
  allList: JobViewModel[];
}

const initialState: State = {
  allList: []
};

@inject("listsStore")
@inject("userStore")
@observer
export class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
    this.props.listsStore.loadList(() => {
      this.setState({ allList: this.props.listsStore.activeList });
    });
  }

  render(): React.ReactNode {
    return (
      <div className="list-items">
        <NavbarPage userStore={this.props.userStore} />
        <Content jobs={this.state.allList} />
        <FooterPage />
      </div>
    );
  }
}

export default Home;
