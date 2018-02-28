'use strict';

module.exports = {
  extend
};

function extend(base) {
  return addons => Object.assign(Object.create(base), addons);
}