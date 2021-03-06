import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
import FlightIcon from '@material-ui/icons/Flight';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import TrainIcon from '@material-ui/icons/Train';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Col } from 'react-bootstrap';
import TicketInnerTabContent from './TicketInnerTabContent';
import Covid19Content from './Covid19Content';
import PriceAlertContent from './PriceAlertContent';

function TicketInnerTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TicketInnerTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        // backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonPrevent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TicketInnerTabPanel value={value} index={0}>
                <Covid19Content />
                <br />
                <TicketInnerTabContent />
            </TicketInnerTabPanel>
            <TicketInnerTabPanel value={value} index={1}>
                Item Two
            </TicketInnerTabPanel>
            <TicketInnerTabPanel value={value} index={2}>
                Item Three
            </TicketInnerTabPanel>
            <TicketInnerTabPanel value={value} index={3}>
                Item Four
            </TicketInnerTabPanel>
            {/* <InnerTabPanel value={value} index={4}>
        Item Five
      </InnerTabPanel>
      <InnerTabPanel value={value} index={5}>
        Item Six
      </InnerTabPanel>
      <InnerTabPanel value={value} index={6}>
        Item Seven
      </InnerTabPanel> */}
        </div>
    );
}
