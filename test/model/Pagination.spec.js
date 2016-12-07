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
    instance = new MessagemediaRestApi.Pagination();
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

  describe('Pagination', function() {
    it('should create an instance of Pagination', function() {
      // uncomment below and update the code to test Pagination
      //var instane = new MessagemediaRestApi.Pagination();
      //expect(instance).to.be.a(MessagemediaRestApi.Pagination);
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instane = new MessagemediaRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "page_size")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instane = new MessagemediaRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property totalCount (base name: "total_count")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instane = new MessagemediaRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property pageCount (base name: "page_count")', function() {
      // uncomment below and update the code to test the property pageCount
      //var instane = new MessagemediaRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property nextUri (base name: "next_uri")', function() {
      // uncomment below and update the code to test the property nextUri
      //var instane = new MessagemediaRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property previousUri (base name: "previous_uri")', function() {
      // uncomment below and update the code to test the property previousUri
      //var instane = new MessagemediaRestApi.Pagination();
      //expect(instance).to.be();
    });

  });

}));
