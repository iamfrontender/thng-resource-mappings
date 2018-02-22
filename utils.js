'use strict';

module.exports = {
  extend
};

function extend(base) {
  return (addons) => {
    return Object.assign(
      Object.create(base), addons
    );
  };
}