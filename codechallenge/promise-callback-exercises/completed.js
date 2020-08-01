// Use call backs to make a login function that first logins with credentials. Loads a user profile. Loads profile posts.

const login = (email, password, successCb, failureCb) => {
  setTimeout(() => {
    if (email && password) {
      successCb({
        id: Date.now(),
        name: 'alex',
        email: 'alex@gmail.com',
      });
    } else {
      failureCb('Email and password are required.');
    }
  }, 1000);
};

const loadUserProfile = (user, successCb, failureCb) => {
  setTimeout(() => {
    if (user) {
      successCb({
        profileId: 122,
        img: 'http://image...',
      });
    } else {
      failureCb('User is required');
    }
  }, 1000);
};

const loadProfilePosts = (profile, successCb, failureCb) => {
  setTimeout(() => {
    if (profile) {
      successCb([
        {
          id: 1,
          title: 'My post',
        },
        {
          id: 2,
          title: 'This is a post',
        },
        {
          id: 3,
          title: 'Yet another post',
        },
      ]);
    }
  }, 1000);
};

// prettier-ignore
login('adrean@gmail.com', 'adrean123', (user) => {
  loadUserProfile(user, (profile) => {
    loadProfilePosts(profile, posts => {
      console.log(posts)
    }, (err) => {
      console.log(err)
    })
  }, (err) => {
    console.log(err)
  })
}, (err) => {
  console.log(err)
});
