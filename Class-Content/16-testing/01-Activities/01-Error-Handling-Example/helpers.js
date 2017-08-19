"use strict";

// Throw error.
var mockError = function() {
  throw "Error:  Unable to find the file specified.";
};

// Mock error due to filesystem.
var readFile = function(filename) {
  mockError();
};

module.exports.mockError = mockError;
module.exports.readFile = readFile;
