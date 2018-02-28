!function (e) {
  var a = {};

  function n(t) {
    if (a[t])return a[t].exports;
    var r = a[t] = {i: t, l: !1, exports: {}};
    return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }

  n.m = e, n.c = a, n.d = function (e, a, t) {
    n.o(e, a) || Object.defineProperty(e, a, {configurable: !1, enumerable: !0, get: t})
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", {value: !0})
  }, n.n = function (e) {
    var a = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(a, "a", a), a
  }, n.o = function (e, a) {
    return Object.prototype.hasOwnProperty.call(e, a)
  }, n.p = "", n(n.s = 5)
}([function (e, a, n) {
  "use strict";
  e.exports = {
    extend: function (e) {
      return function (a) {
        return Object.assign(Object.create(e), a)
      }
    }
  }
}, function (e, a, n) {
  "use strict";
  var t = (0, n(0).extend)({type: "int", min: 1, max: 5});
  e.exports = {
    recaster: {
      "customFields.environmental_score": t({displayName: "Environmental Score"}),
      "customFields.social_score": t({displayName: "Social Score"}),
      "customFields.facilities": {
        type: "array",
        name: "Facility",
        add: "Add facility",
        remove: "Remove facility",
        item: {
          name: {displayName: "Facility Name", required: !0},
          environmental_management_systems: t({displayName: "Environmental Management Systems"}),
          energy_greenhouse_gas_emissions: t({displayName: "Energy / Greenhouse gas emissions"}),
          water_use: t({displayName: "Water Use"}),
          wastewater: t({displayName: "Wastewater"}),
          air_emissions: t({displayName: "Air emissions"}),
          chemicals_management: t({displayName: "Chemicals management"}),
          recruitment: t({displayName: "Recruitment"}),
          compensation: t({displayName: "Compensation"}),
          hours: t({displayName: "Hours"}),
          worker_involvement: t({displayName: "Worker involvement"}),
          worker_treatment: t({displayName: "Worker treatment"}),
          health_and_safety: t({displayName: "Health & safety"}),
          value_chain_performance: t({displayName: "Value chain performance"}),
          external_engagement: t({displayName: "External engagement"}),
          community: t({displayName: "Community"}),
          transparency: t({displayName: "Transparency"})
        }
      }
    }
  }
}, function (e, a, n) {
  "use strict";
  var t = n(1);
  e.exports = {product: t}
}, function (e, a, n) {
  "use strict";
  e.exports = {
    recaster: {
      brand: {displayName: "Brand", placeholder: "Brand name (1.1)"},
      name: {displayName: "Name", placeholder: "Descriptive name (1.2)"},
      description: {displayName: "Description", placeholder: "Description (1.4)"},
      "identifiers.gtin": {displayName: "GTIN", placeholder: "Global Trade Item Number (1.6)"},
      "customFields.declaration.information_accuracy_date": {
        displayName: "Information Accuracy Date",
        placeholder: "Declaration (General) - Information accuracy date (2.1)"
      },
      "customFields.declaration.smart_label_landing_link": {
        displayName: "SmartLabel™ Landing page link",
        placeholder: "Declaration (General) - SmartLabel™ Landing page link (2.5)"
      }
    }
  }
}, function (e, a, n) {
  "use strict";
  var t = n(3);
  e.exports = {product: t}
}, function (e, a, n) {
  "use strict";
  var t = n(4), r = n(2);
  e.exports = {smartLabel: t, SAC: r}
}]);