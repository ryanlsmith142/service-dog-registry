const seeder = require('mongoose-seed');
require('./models/OrganizationProfile');


// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/servicedogregistry', async function() {

  // Load Mongoose models
  await seeder.loadModels(
    'models/OrganizationProfile'
  );
 
  await seeder.populateModels(data, async function(error, done) {
    if (error) {
        return console.log("Seed error", error);
    }

    if (done) {
        return console.log("Seed done", done);
    }

    await seeder.disconnect();
  });

//   // Clear specified collections
//   seeder.clearModels('OrganizationProfile', function() {
//     console.log("After")
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function(error, done) {
//       if (error) {
//           return console.log("Seed error", error);
//       }

//       if (done) {
//           return console.log("Seed done", done);
//       }

//       seeder.disconnect();
//     });
 
//   });
});

const data = [
    {
        'model': 'OrganizationProfile',
        'documents': [
            {
                'name': 'name',
                'value': 'VA Dogs Of Texas'
            },
            {
                'name': 'website',
                'value': 'www.vadogsoftexas.com'
            },
            {
                'name': 'address',
                'value': '1234 Dog St'
            },
            {
                'name': 'phoneNumber',
                'value': '9123331234'
            },
            {
                'name': 'email',
                'value': 'vadogsoftexas@email.com'
            },
            {
                'name': 'userIdThatOwnsOrganization',
                'value': '1234'
            }
        ]
    }
]