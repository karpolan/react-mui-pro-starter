import { Component } from 'react';
import { Grid } from '@mui/material';
import { AppButton } from '../../components';
import { AppSection } from '../../components/forms';
import { MessageDialog, ConfirmationDialog, EmailEditDialog } from '../../components/dialogs';
import TagsSection from './Tags';

/**
 * Renders demo section for Dialogs
 */
class DialogsSection extends Component {
  state = {
    modal: null,
    someText: 'Some text to edit',
    email: 'i@karpolan.com',
  };

  onDialogClose = (event, reason) => {
    log.info('DialogsSection.onDialogClose() - reason:', reason || 'buttonClick');
    this.setState({ modal: null });
  };

  onMessageDialogOpen = () => {
    this.setState({
      modal: (
        <MessageDialog
          open
          data="Dialog Data can be object, string, number, boolean, etc. It is passed to onConfirm callback"
          title="Simple Message"
          text={`Use props.text to pass string message here. 
						If you need to render JSX content inside the dialog use props.body. 
						Text and color of the "Confirm" button is customizable.
						The "Cancel" button can be hidden`}
          onClose={this.onDialogClose}
          onConfirm={this.onMessageDialogConfirm}
        />
      ),
    });
  };

  onMessageDialogConfirm = (data) => {
    log.info('DialogsSection.onMessageDialogConfirm() - data:', data);
    this.setState({ modal: null });
  };

  onConfirmDialogOpen = () => {
    const dialogData = {
      id: 123,
      name: 'Sample data for Confirm Dialog',
    };
    this.setState({
      modal: (
        <ConfirmationDialog
          open
          data={dialogData}
          title="Do you really want to do something?"
          body={
            <>
              <div>JSX content can be easily added into the dialog via props.body</div>
              <br />
              <TagsSection useTagCloud />
              <br />
              <div>
                The props.body takes precedence over props.text. So JSX content is rendered, but the text is ignored
              </div>
            </>
          }
          text="!!! This text will not be rendered !!!"
          confirmButtonText="Confirm and do something"
          onClose={this.onDialogClose}
          onConfirm={this.onConfirmDialogConfirm}
        />
      ),
    });
  };

  onConfirmDialogConfirm = (data) => {
    log.info('DialogsSection.onConfirmDialogConfirm() - data:', data);
    this.setState({ modal: null });
  };

  onEditEmailDialogOpen = () => {
    this.setState({
      modal: (
        <EmailEditDialog
          open
          email={this.state.email}
          onClose={this.onDialogClose}
          onConfirm={this.onEditEmailDialogConfirm}
        />
      ),
    });
  };

  onEditEmailDialogConfirm = (data) => {
    log.info('DialogsSection.onEditEmailDialogConfirm() - data:', data);
    this.setState({ modal: null, email: data });
  };

  render() {
    const { modal } = this.state;
    return (
      <AppSection title="Dialogs" align="center">
        {modal}
        <Grid container justifyContent="center">
          <AppButton ml={0} size="small" label="Message" color="default" onClick={this.onMessageDialogOpen} />
          <AppButton size="small" label="Confirm" color="primary" onClick={this.onConfirmDialogOpen} />
          <AppButton mr={0} size="small" label="Edit Email" color="secondary" onClick={this.onEditEmailDialogOpen} />
        </Grid>
      </AppSection>
    );
  }
}

export default DialogsSection;
