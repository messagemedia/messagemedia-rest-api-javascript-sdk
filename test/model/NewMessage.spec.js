/**
 * MessageMedia REST API
 * Australia's Leading Messaging Solutions for Business and Enterprise.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@messagemedia.com
 *
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MessagemediaRestApi);
  }
}(this, function(expect, MessagemediaRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MessagemediaRestApi.NewMessage();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NewMessage', function() {
    it('should create an instance of NewMessage', function() {
      // uncomment below and update the code to test NewMessage
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be.a(MessagemediaRestApi.NewMessage);
    });

    it('should have the property callbackUrl (base name: "callback_url")', function() {
      // uncomment below and update the code to test the property callbackUrl
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property destinationNumber (base name: "destination_number")', function() {
      // uncomment below and update the code to test the property destinationNumber
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property deliveryReport (base name: "delivery_report")', function() {
      // uncomment below and update the code to test the property deliveryReport
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property messageExpiryTimestamp (base name: "message_expiry_timestamp")', function() {
      // uncomment below and update the code to test the property messageExpiryTimestamp
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property scheduled (base name: "scheduled")', function() {
      // uncomment below and update the code to test the property scheduled
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property sourceNumber (base name: "source_number")', function() {
      // uncomment below and update the code to test the property sourceNumber
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

    it('should have the property sourceNumberType (base name: "source_number_type")', function() {
      // uncomment below and update the code to test the property sourceNumberType
      //var instane = new MessagemediaRestApi.NewMessage();
      //expect(instance).to.be();
    });

  });

}));
