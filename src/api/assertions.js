'use strict';

import {core} from 'metal';
import globals from '../globals/globals';
import Uri from 'metal-uri';

const collectionTypes = [
  'binary',
  'boolean',
  'date',
  'double',
  'float',
  'geo_point',
  'geo_shape',
  'integer',
  'long',
  'string',
];

/**
 * Throws an exception if the current environment is not a browser.
 */
function assertBrowserEnvironment() {
  if (!globals.window) {
    throw new Error('Sign-in type not supported in this environment');
  }
}

/**
 * Throws an exception if given value is undefined or null.
 * @param {!*} value The value to be checked.
 * @param {!string} errorMessage The message to be provided to the exception.
 */
function assertDefAndNotNull(value, errorMessage) {
  if (!core.isDefAndNotNull(value)) {
    throw new Error(errorMessage);
  }
}

/**
 * Throws an exception if given value is null.
 * @param {!*} value The value to be checked.
 * @param {!string} errorMessage The message to be provided to the exception.
 */
function assertNotNull(value, errorMessage) {
  if (core.isNull(value)) {
    throw new Error(errorMessage);
  }
}

/**
 * Throws an exception if given value is not a function.
 * @param {!*} value The value to be checked.
 * @param {!string} errorMessage The message to be provided to the exception.
 */
function assertFunction(value, errorMessage) {
  if (!core.isFunction(value)) {
    throw new Error(errorMessage);
  }
}

/**
 * Throws an exception if given value is not an object.
 * @param {!*} value The value to be checked.
 * @param {!string} errorMessage The message to be provided to the exception.
 */
function assertObject(value, errorMessage) {
  if (!core.isObject(value)) {
    throw new Error(errorMessage);
  }
}

/**
 * Checks if a response has succeeded. The function checks if the `succeeded`
 * method of response object returns true. Throws an exception if the returned
 * value is false.
 * @param {!Object} response The response to be checked.
 * @return {Object} The response itself if valid. Otherwise throws an exception.
 */
function assertResponseSucceeded(response) {
  if (!response.succeeded()) {
    throw response.body();
  }
  return response;
}

/**
 * Checks if a valid user is provided to the function. Throws an exception
 * in case of an invalid user.
 * @param {!Object} user The user to be checked.
 */
function assertUserSignedIn(user) {
  if (!core.isDefAndNotNull(user)) {
    throw new Error('You must be signed-in to perform this operation');
  }
}

/**
 * Checks if an URL with a valid path is provided. Throws an exception
 * if the provided URL doesn't have a valid path.
 * @param {!string} url The URL to be checked.
 * @param {!string} errorMessage The message to be provided to the exception.
 */
function assertUriWithNoPath(url, errorMessage) {
  let uri = new Uri(url);
  if (uri.getPathname().length > 1) {
    throw new Error(errorMessage);
  }
}

/**
 * Validates the field types in a collection. Throws an exception if some field
 * is mapped to an unsupported type.
 * @param {!Object} fieldTypes The collection which types should be validated.
 */
function assertValidFieldTypes(fieldTypes) {
  if (!core.isObject(fieldTypes)) {
    throw new Error('Field types must be an object');
  }

  Object.keys(fieldTypes).forEach(key => {
    const value = fieldTypes[key];
    if (
      core.isObject(value) &&
      !Array.isArray(value) &&
      !core.isFunction(value)
    ) {
      assertValidFieldTypes(value);
    } else {
      if (collectionTypes.indexOf(value) === -1) {
        throw new Error(
          `Invalid type mapping "${value}". Valid types are: ` +
            `${collectionTypes.join(', ')}.`
        );
      }
    }
  });
}

export {
  assertBrowserEnvironment,
  assertDefAndNotNull,
  assertFunction,
  assertNotNull,
  assertObject,
  assertResponseSucceeded,
  assertUriWithNoPath,
  assertUserSignedIn,
  assertValidFieldTypes,
};
