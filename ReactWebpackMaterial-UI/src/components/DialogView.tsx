import * as React from 'react';
import { connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export interface IDiaglogView {
    open?: boolean;
    slideIndex?: number;
}
export interface IDialogProps{
    title?:string;
}
export class DialogView extends React.Component<IDialogProps, IDiaglogView> {
    state = {
        open: false,
    };
    constructor(props: IDialogProps) {
        super(props);
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                key="dialogCancel"
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true} 
                key="dialogSubmit"
                onTouchTap={this.handleClose}
                />,
        ];
        return (
            <div>
                <RaisedButton label="Dialog" key="sfdsf" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}