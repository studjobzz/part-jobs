import * as React from "react";
import { ListViewModel } from "../../view-models/list-jobs";
import { observer, inject } from "mobx-react";
import "../../shared/list-all.css";
import { ListsStore } from "../../store/lists-store";
import NavbarPage from "../NavBar/NavbarPage";
import FooterPage from "../FooterPage/FooterPage";
import Content from "../AllJobs/Content";

interface Props {
  listsStore: ListsStore;
}

interface State {
  allLists: ListViewModel;
}

const initialState: State = {
  allLists: {
    id: 1,
    name: "first",
    description: "easy",
    jobs: [
      { id: 1, name: "Software developer", description: "ASP.net" },
      { id: 2, name: "Q&A", description: "Normal" },
      { id: 3, name: "Inginer Constructii", description: "Blocuri" },
      { id: 4, name: "Zara coach", description: "Suits" },
      { id: 5, name: "Q&A", description: "Normal" },
      { id: 6, name: "Laptop", description: "Husa" },
      { id: 7, name: "Software", description: "Phyton" },
      { id: 8, name: "George", description: "Boss" },
      { id: 9, name: "Ionut", description: "Jmeck" }
    ]
  }
};

@inject("listsStore")
@observer
export class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
    // this.props.listsStore.loadLists(() => {
    //   this.setState({ allLists: this.props.listsStore.lists });
    // });
  }

  render(): React.ReactNode {
    return (
      <div className="list-items">
        <NavbarPage />
        <Content jobs={this.state.allLists.jobs} />
        <FooterPage />
      </div>
    );
  }
}

export default Home;
