import { Divider, Grid, Header, Item, Segment, Statistic } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { observer } from "mobx-react-lite";
import FollowButton from "./FollowButton";

interface Props {
  profile: Profile;
}

const ProfileHeader = ({ profile }: Props) => {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image avatar size="small" src={profile.image || "/assets/user.png"}></Item.Image>
              <Item.Content verticalAlign="middle">
                <Header as="h1" content={profile.displayName} />
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Statistic.Group widths={2}>
            <Statistic labe="Followers" value={profile.followersCount}></Statistic>
            <Statistic labe="Following" value={profile.followingCount}></Statistic>
          </Statistic.Group>
          <Divider></Divider>
          <FollowButton profile={profile} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default observer(ProfileHeader);
