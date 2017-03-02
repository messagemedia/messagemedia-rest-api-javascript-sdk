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
    instance = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
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

  describe('AsyncSentMessagesDetailRequest', function() {
    it('should create an instance of AsyncSentMessagesDetailRequest', function() {
      // uncomment below and update the code to test AsyncSentMessagesDetailRequest
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be.a(MessagemediaRestApi.AsyncSentMessagesDetailRequest);
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property sortBy (base name: "sort_by")', function() {
      // uncomment below and update the code to test the property sortBy
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property sortDirection (base name: "sort_direction")', function() {
      // uncomment below and update the code to test the property sortDirection
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property accounts (base name: "accounts")', function() {
      // uncomment below and update the code to test the property accounts
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property destinationAddressCountry (base name: "destination_address_country")', function() {
      // uncomment below and update the code to test the property destinationAddressCountry
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property destinationAddress (base name: "destination_address")', function() {
      // uncomment below and update the code to test the property destinationAddress
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property messageFormat (base name: "message_format")', function() {
      // uncomment below and update the code to test the property messageFormat
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadataKey (base name: "metadata_key")', function() {
      // uncomment below and update the code to test the property metadataKey
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadataValue (base name: "metadata_value")', function() {
      // uncomment below and update the code to test the property metadataValue
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceAddressCountry (base name: "source_address_country")', function() {
      // uncomment below and update the code to test the property sourceAddressCountry
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceAddress (base name: "source_address")', function() {
      // uncomment below and update the code to test the property sourceAddress
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "status_code")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property deliveryReport (base name: "delivery_report")', function() {
      // uncomment below and update the code to test the property deliveryReport
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

    it('should have the property deliveryOptions (base name: "delivery_options")', function() {
      // uncomment below and update the code to test the property deliveryOptions
      //var instane = new MessagemediaRestApi.AsyncSentMessagesDetailRequest();
      //expect(instance).to.be();
    });

  });

}));
