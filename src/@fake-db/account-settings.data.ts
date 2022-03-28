export class accountSettingsFakeData {
  public static data = {
    accountSetting: {
      general: {
        avatar: 'assets/images/portrait/small/avatar-s-11.jpg',
        username: 'johndoe',
        fullName: 'John Doe',
        email: 'granger007@hogward.com',
        company: 'IBM Technology'
      },
      info: {
        bio: '',
        dob: null,
        country: 'USA',
        website: '',
        phone: '(+656) 254 2568'
      },
      social: {
        socialLinks: {
          twitter: 'https://www.twitter.com',
          facebook: '',
          google: '',
          linkedIn: 'https://www.linkedin.com',
          instagram: '',
          quora: ''
        },
        connections: {
          twitter: {
            profileImg: 'assets/images/avatars/11-small.png',
            id: '@johndoe'
          },
          google: {
            profileImg: 'assets/images/avatars/3-small.png',
            id: '@luraweber'
          },
          facebook: {},
          github: {}
        }
      },
      notification: {
        commentOnArticle: true,
        AnswerOnForm: true,
        followMe: false,
        newAnnouncements: true,
        productUpdates: true,
        blogDigest: false
      }
    }
  };
}
