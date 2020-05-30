import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "../team/teamStyle";
import SortIcon from '@material-ui/icons/Sort';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TocIcon from '@material-ui/icons/Toc';
export default function Season(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.leagueName}
        subheader={props.begin}
      />

      <CardContent>
        <div className={classes.contentContainer}>
            <div className={classes.contentCol}>
                {/* season */}
                <div className={classes.catagory}>
                    <ScheduleIcon/>
                    <ul className={classes.catagoryUl}>
                    <p key = {props.index}className={classes.catagoryUl}>{props.season}</p>
                    </ul>
                </div>
                {/* schedulingMethod */}
                <div className={classes.catagory}>
                    <TocIcon/>
                    <ul className={classes.catagoryUl}>
                    <p key = {props.index}className={classes.catagoryUl}>{props.schedulingMethod.schedulingMethodName}</p>
                    </ul>
                </div>
                {/* rankingMethod */}
                <div className={classes.catagory}>
                    <SortIcon/>
                    <ul className={classes.catagoryUl}>
                    <p key = {props.index}className={classes.catagoryUl}>Win:{props.rankingMethod.winPoints}</p>
                    <p key = {props.index + 1}className={classes.catagoryUl}>Draw:{props.rankingMethod.drawPoints}</p>
                    <p key = {props.index+ 2}className={classes.catagoryUl}>Lose:{props.rankingMethod.losePoints}</p>
                    </ul>
                </div>
            </div>
          
        </div>
      </CardContent>
    </Card>
  );
}
