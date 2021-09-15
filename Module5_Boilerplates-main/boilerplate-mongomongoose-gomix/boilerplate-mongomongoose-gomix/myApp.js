var mongoose = require('mongoose')
require('dotenv').config()

const { Schema } = mongoose;


const uri = "mongodb://127.0.0.1:27017/"


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// #2
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
//missing model
// #3
var createAndSavePerson = function (done) {
  let Robert = {
    name: "Robert",
    age: 43,
    favoriteFoods: ["Pizza", "bbq ribs", "ny strip"]
  }
  Robert.save(function (err, data) {
    if (err) {
      return console.log(err)
    }
    done(null, data);
  });

  console.log(Robert);

};





// #5
var findPeopleByName = function (personName, done) {

  done(null, data);

};

// #6
var findOneByFood = function (food, done) {

  done(null, data);

};

// #7
var findPersonById = function (personId, done) {

  done(null, data);

};


// 06/08/2021 From here down.
// #8
const findEditThenSave = function (personId, done) {
  let foodToChange = 'hamburger';
  Person.findById(personId, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    personFound.favoriteFoods.push(foodToChange);
    personFound.save(function (err, personFound) {
      if (err) {
        return console.log(err)
      }
      done(null, personFound);
    })


  })
};

// #9
const findAndUpdate = function (personName, done) {
  let ageToSet = 20;
  Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true }, function (err, personFound) {
    if (err) {
      return console.log(err, data)
    }

    done(null, personFound);
  })

};

// #10
const removeById = function (personId, done) {

  Person.findByIdAndRemove(personId, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    //personFound.remove(personFound)
    done(null, personFound)
  })

};

// # 11
const removeManyPeople = function (done) {
  let nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, function (err, deletedPerson) {
    if (err) {
      return console.log(err);
    }
    done(null, deletedPerson);
  })

};



// #12
const queryChain = function (done) {
  let foodToSearch = "burrito";
  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec(function (err, personFound) {
      if (err) {
        return console.log(err);
      }
      done(null, personFound);
    })
};



/** # Further Readings... #
/*  ======================= */
// If you are eager to learn and want to go deeper, You may look at :
// * Indexes ( very important for query efficiency ),
// * Pre/Post hooks,
// * Validation,
// * Schema Virtuals and  Model, Static, and Instance methods,
// * and much more in the [mongoose docs](http://mongoosejs.com/docs/)


//----- **DO NOT EDIT BELOW THIS LINE**----
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
