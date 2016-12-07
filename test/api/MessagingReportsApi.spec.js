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
    instance = new MessagemediaRestApi.MessagingReportsApi();
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

  describe('MessagingReportsApi', function() {
    describe('getDeliveryReportsDetail', function() {
      it('should call getDeliveryReportsDetail successfully', function(done) {
        //uncomment below and update the code to test getDeliveryReportsDetail
        //instance.getDeliveryReportsDetail(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliveryReportsSummary', function() {
      it('should call getDeliveryReportsSummary successfully', function(done) {
        //uncomment below and update the code to test getDeliveryReportsSummary
        //instance.getDeliveryReportsSummary(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReceivedMessagesDetail', function() {
      it('should call getReceivedMessagesDetail successfully', function(done) {
        //uncomment below and update the code to test getReceivedMessagesDetail
        //instance.getReceivedMessagesDetail(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReceivedMessagesSummary', function() {
      it('should call getReceivedMessagesSummary successfully', function(done) {
        //uncomment below and update the code to test getReceivedMessagesSummary
        //instance.getReceivedMessagesSummary(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSentMessagesDetail', function() {
      it('should call getSentMessagesDetail successfully', function(done) {
        //uncomment below and update the code to test getSentMessagesDetail
        //instance.getSentMessagesDetail(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSentMessagesSummary', function() {
      it('should call getSentMessagesSummary successfully', function(done) {
        //uncomment below and update the code to test getSentMessagesSummary
        //instance.getSentMessagesSummary(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
