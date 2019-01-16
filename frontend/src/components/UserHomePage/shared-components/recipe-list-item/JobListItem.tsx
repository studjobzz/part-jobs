import * as React from "react";
import { inject, observer } from "mobx-react";
import "../../../../shared/list-all.css";
import "./recipe-list-item.css";
// import StarRatingComponent from "react-star-rating-component";
import { Redirect } from "react-router-dom";
import { JobViewModel } from "../../../../view-models/job";
// import MyIcon from "../../../../shared/recipe-icon/MyIcon";
import { AnchorButton, Button, Dialog, Intent } from "@blueprintjs/core";

interface Props {
  job: JobViewModel;
  // handleSetFavorites: Function;
  waitingForData: boolean;
}

interface State {
  redirectTo: string;
  rating: number;
  isOpen: boolean;
}

@observer
export class JobListItem extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      redirectTo: "",
      rating: 0,
      isOpen: false
    };
  }

  // private handleDeleteFavorites(event: any) {
  //   let updatedRecipe = this.props.recipe;
  //   updatedRecipe.favourite = false;
  //   this.props.handleSetFavorites(updatedRecipe);
  //   this.handleClose();

  // }

  // private handleAddFavorites(event: any) {
  //   let updatedRecipe = this.props.recipe;
  //   updatedRecipe.favourite = true;
  //   this.props.handleSetFavorites(updatedRecipe);
  //   this.handleClose();

  // }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  handleClick(job: JobViewModel) {
    this.setState({ redirectTo: "/job/" + job.pk });
  }

  handleRedirect(): React.ReactNode {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    return null;
  }

  private handleOpen = () => this.setState({ isOpen: true });
  private handleClose = () => this.setState({ isOpen: false });
  render() {
    return (
      this.handleRedirect() || (
        <div className="list-item">
          <div onClick={() => this.handleClick(this.props.job)}>
            <img className="list-item-photo" src={this.props.job.image} />
          </div>
          <div className="summary_field">{this.props.job.title}</div>
          {this.props.job.title ? (
            <div>
              <button
                type="button"
                className="recipe-all-button recipe-button-rating active"
                onClick={this.handleOpen}
              >
                &hearts;
              </button>
              <Dialog
                className="bp3-dialog-header"
                onClose={this.handleClose}
                {...this.state}
              >
                <div>
                  <div className="bp3-dialog-body">
                    {this.props.job.title +
                      " " +
                      "has been removed to favorites!"}
                  </div>
                  <Button className="bp3-button" onClick={this.handleClose}>
                    Undo
                  </Button>
                  <AnchorButton
                    className="bp3-button bp3-intent-primary"
                    //  onClick={this.handleDeleteFavorites.bind(this)}
                    intent={Intent.PRIMARY}
                    target="_blank"
                  >
                    Ok
                  </AnchorButton>
                </div>
              </Dialog>
            </div>
          ) : (
            <div>
              <button
                type="button"
                className="recipe-all-button recipe-button-rating normal"
                onClick={this.handleOpen}
              >
                &hearts;
              </button>
              <Dialog
                className="bp3-dialog-header"
                onClose={this.handleClose}
                {...this.state}
              >
                <div>
                  <div className="bp3-dialog-body">
                    {this.props.job.title +
                      " " +
                      "has been added to favorites!"}
                  </div>
                  <Button className="bp3-button" onClick={this.handleClose}>
                    Undo
                  </Button>
                  <AnchorButton
                    className="bp3-button bp3-intent-primary"
                    //  onClick={this.handleAddFavorites.bind(this)}
                    intent={Intent.PRIMARY}
                    target="_blank"
                  >
                    Ok
                  </AnchorButton>
                </div>
              </Dialog>
            </div>
          )}
        </div>
      )
    );
  }
}
