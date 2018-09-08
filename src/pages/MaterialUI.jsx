import React, { Component } from "react";
// import { connect } from "react-redux";
import Container from "../components/wrappers/container";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent  from "@material-ui/core/CardContent";
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  TabContainer: {
    display: "flex",
    justifyContent: "space-between"
  },

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },

  cardBox: {
    display: 'flex',
    flex: "0 0 48%",
    maxWidth: "48%",
    // padding: "15px 0 0 15px"
  },

  CardContent: {
    display: 'flex'
  },

  cardPhoto: {
    height: '100%',
    width: '150px',
    marginLeft: 'auto'
  }
});

class MaterialUi extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    value: 0
  };

  handleChange = (evt, value) => this.setState({ value });

  buttonClick = (value) => console.log(value);

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Container>
        <div className={classes.root}>
        <IconButton onClick={() => this.buttonClick('fdfd')} aria-label="Share">
          <ShareIcon />
        </IconButton>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" href="#basic-tabs" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <div className={classes.TabContainer}>
                <Card className={classes.cardBox}>
                <CardContent className={styles.CardContent}>
                  <Typography variant="headline">Live From Space</Typography>
                  <Typography>Live From Space</Typography>
                </CardContent>
                  <CardMedia
                    className={classes.cardPhoto}
                    image="https://randomuser.me/api/portraits/women/29.jpg"
                    title="Live from space album cover"
                  />
                </Card>
                <Card className={classes.cardBox}>
                <CardContent className={styles.CardContent}>
                  <Typography variant="headline">Live From Space</Typography>
                  <Typography>Live From Space</Typography>
                </CardContent>
                  <CardMedia
                    className={classes.cardPhoto}
                    image="https://randomuser.me/api/portraits/women/29.jpg"
                    title="Live from space album cover"
                  />
                </Card>
              </div>
            </TabContainer>
          )}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
      </Container>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     contacts: GetFiltredContacts(state.contacts, state.contactsSearch),
//     search: state.contactsSearch
//   };
// };

// const mapDispatchToProps = { fetchContacts };

// const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default withStyles(styles)(MaterialUi);
