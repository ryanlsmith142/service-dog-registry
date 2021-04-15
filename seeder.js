const seeder = require('mongoose-seed');



// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/servicedogregistry', function() {

  // Load Mongoose models
  seeder.loadModels([
    'models/OrganizationProfile',
    'models/User',
    'models/ServiceDogProfile'
  ], console.log("inside load models"));
 
  console.log("After load models");
  
  // Clear specified collections
  seeder.clearModels(['organizationProfile','user','serviceDogProfile'], function() {
    console.log("Inside clearr models");
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function(error, done) {

      seeder.disconnect();
    });
 
  });
});

const data = [
    {
        'model': 'organizationProfile',
        'documents': [
            {
                'name': 'VA Dogs Of Texas',
                'website': 'www.vadogsoftexas.com',
                'address': '1234 Dog St',
                'phoneNumber': '9123331234',
                'email': 'vadogsoftexas@email.com',
                'userIdThatOwnsOrganization': '1234'
            }
        ]
    },
    {
        'model': 'user',
        'documents': [
            {
                'firstName': 'Ryan',
                'lastName': 'Smith',
                'email': 'ryansmith@email.com',
                'password': 'password',
                'idOfOrganizationUserBelongsTo': '1234'
            }
        ]
    },
    {
        'model': 'serviceDogProfile',
        'documents': [
            {
                'firstName': 'Ryan',
                'lastName': 'Smith',
                'email': 'ryansmith@email.com',
                'password': 'password',
                'idOfOrganizationUserBelongsTo': '1234'
            }
        ]
    }
    
]