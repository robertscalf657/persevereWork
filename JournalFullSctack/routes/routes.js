'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose')

const { Schema } = mongoose;
// My Schema 
const entrySchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  content: { type: String, required: true },
  comment: [String]
})
// My Model
const Entry = mongoose.model("entry", entrySchema);
// all the routes go here
module.exports = function (app) {

  //here....this is where the react app is getting the entries from
  app.route('/entries')
    .get(function (req, res) {
      console.log("Does This Work?")
      Entry.find({}, function (err, entryFound) {
        res.json(
          entryFound
        )
      })
      //let reqDB = req.params.db;
    })
    .post(function (req, res) {
      console.log('posting...')
      let unixTime = new Date().getTime();
      let title = req.body.title;
      let content = req.body.content;
      console.log(title)
      console.log(content)

      let dbEntry = new Entry({
        title: title,
        date: unixTime,
        content: content
      })
      dbEntry.save()
        .then(
          //Entry.find({
          //}, 
          () => res.json(dbEntry))//)
    })


  // post method to post comments
  app.route('/entries/comments')
    .post(function (req, res) {
      console.log("this works to here");
      let entryid = req.body.id;
      let newComment = req.body.comment;

      //find entry by id and update the comment
      Entry.findByIdAndUpdate(entryid, { $push: { comments: newComment } }, function (err, entryFound, newComment) {
        console.log(`entry found to add comment to: ${entryFound}`)
        console.log(`comment to be added ${req.body.id}`)
        console.log(`comment to be added ${req.body.comment}`)
        if (entryFound == undefined) {
          res.send("Entry does not exist");
        }
        // else {
        //if (!entryFound.comments[0]) {
        // res.json({
        //   title: entryFound.title,
        //   _id: entryFound._id,
        //   comments: entryFound.comments
        // })
        //}
        //else if (entryFound) {
        // res.json({
        //   title: entryFound.title,
        //   _id: entryFound._id,
        //   comments: entryFound.comments
        // })
        //}
        //}
      })
    })
}