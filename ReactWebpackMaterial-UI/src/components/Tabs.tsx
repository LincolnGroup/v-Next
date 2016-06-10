import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
const styles: any = {
    headline: {
        fontSize: 24,
        fontWeight: 400,
        marginBottom: 12,
        paddingTop: 16,
    },
    slide: {
        padding: 10,
    },
};
export interface ITabsView {
    slideIndex?: number;
}
export class TabsView extends React.Component<{}, ITabsView> {
    constructor(props: any) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }
    handleChange(value: any): any {
        this.setState({
            slideIndex: value,
        });
    };
    public render(): any {
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                    >
                    <Tab label="Login" value={0} onClick={() => this.setState({ slideIndex: 0 }) }/>
                    <Tab label="Sign Up" value={1} onClick={() => this.setState({ slideIndex: 1 }) }/>
                    <Tab label="More Info" value={2} onClick={() => this.setState({ slideIndex: 2 }) }/>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    >
                    <div color="#000">
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </div>
                    <div style={styles.slide}>
                        slide n°2
                    </div>
                    <div style={styles.slide}>
                        slide n°3
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}
