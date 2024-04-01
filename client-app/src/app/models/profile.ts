import { User } from "./user";

export interface IProfile {
  username: string;
  displayName: string;
  image?: string;
  bio?: string;
  followersCount: number;
  followingCount: number;
  following: boolean;
  photos?: Photo[];
}

export class Profile implements IProfile {
  constructor(user: User) {
    this.username = user.username;
    this.displayName = user.displayName;
    this.image = user.image;
  }
  followersCount: number = 0;
  followingCount: number = 0;
  following: boolean = false;
  username: string;
  displayName: string;
  image?: string | undefined;
  bio?: string | undefined;
  photos?: Photo[];
}

export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
}

export interface UserActivity {
  id: string;
  title: string;
  category: string;
  date: Date;
}

export default class ProfileStore {
  currentUserProfile: Profile | null = null;
  profile: Profile | null = null;
  loadingProfile = false;
  uploading = false;
  loading = false;
  followings: Profile[] = [];
  loadingFollowings = false;
  activeTab: number = 0;
  userActivities: UserActivity[] = [];
  loadingActivities = false;
}
