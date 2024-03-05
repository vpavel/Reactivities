import { Image, List, Popup } from "semantic-ui-react";
import { Profile } from "../../../app/models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
  atttendees: Profile[];
}

export default function ActivityListItemAttendee({ atttendees }: Props) {
  return (
    <List horizontal>
      {atttendees.map((atttendee) => (
        <Popup
          hoverable
          key={atttendee.username}
          trigger={
            <List.Item key={atttendee.username} as={Link} to={`/profiles/${atttendee.username}`}>
              <Image size="mini" circular src={atttendee.image || "/assets/user.png"} />
            </List.Item>
          }
        >
          <Popup.Content>
            <ProfileCard profile={atttendee} />
          </Popup.Content>
        </Popup>
      ))}
    </List>
  );
}
