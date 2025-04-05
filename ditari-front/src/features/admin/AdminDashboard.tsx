import { Grid, Header, Segment } from "semantic-ui-react";
import React from "react";
import Breadcrumbs from "../../app/layout/Breadcrumbs";
import WelcomeBanner from "../../app/layout/WelcomeBanner";

export default function AdminDashboard() {
  return (
    <>
      <Segment.Group>
        <Segment>
          <Breadcrumbs />
        </Segment>
        <Segment style={{ backgroundColor: "#9C528B" }}>
          <Header as="h3" content="Dashboard" />
        </Segment>
      </Segment.Group>
      <Grid>
        <Grid.Column width="10">
          <WelcomeBanner />
          <Grid>
            <Grid.Column width="8">Smth</Grid.Column>
            <Grid.Column width="8">Other</Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column width="6"></Grid.Column>
      </Grid>
    </>
  );
}
