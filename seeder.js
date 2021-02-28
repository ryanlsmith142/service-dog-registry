const seeder = require('mongoose-seed');



// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/servicedogregistry', function() {

  // Load Mongoose models
  seeder.loadModels([
    'models/OrganizationProfile'
    
  ], console.log("inside load models"));
 
  console.log("After load models");
  
  // Clear specified collections
  seeder.clearModels('OrganizationProfile', function() {
    console.log("Inside clar models");
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function(error, done) {

      seeder.disconnect();
    });
 
  });
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