'use strict';

const { extend } = require('../utils');
const starsWith = extend({
  type: 'int',
  min: 1,
  max: 5
});

module.exports = {
  recaster: {
    'customFields.environmental_score': starsWith({
      displayName: 'Environmental Score'
    }),

    'customFields.social_score': starsWith({
      displayName: 'Social Score'
    }),

    'customFields.facilities': {
      type: 'array',
      name: 'Facility',
      add: 'Add facility',
      remove: 'Remove facility',

      item: {
        'name': {
          displayName: 'Facility Name',
          required: true
        },
        'environmental_management_systems': starsWith({
          displayName: 'Environmental Management Systems'
        }),
        'energy_greenhouse_gas_emissions': starsWith({
          displayName: 'Energy / Greenhouse gas emissions'
        }),
        'water_use': starsWith({
          displayName: 'Water Use'
        }),
        'wastewater': starsWith({
          displayName: 'Wastewater'
        }),
        'air_emissions': starsWith({
          displayName: 'Air emissions'
        }),
        'chemicals_management': starsWith({
          displayName: 'Chemicals management'
        }),
        'recruitment': starsWith({
          displayName: 'Recruitment'
        }),
        'compensation': starsWith({
          displayName: 'Compensation'
        }),
        'hours': starsWith({
          displayName: 'Hours'
        }),
        'worker_involvement': starsWith({
          displayName: 'Worker involvement'
        }),
        'worker_treatment': starsWith({
          displayName: 'Worker treatment'
        }),
        'health_and_safety': starsWith({
          displayName: 'Health & safety'
        }),
        'value_chain_performance': starsWith({
          displayName: 'Value chain performance'
        }),
        'external_engagement': starsWith({
          displayName: 'External engagement'
        }),
        'community': starsWith({
          displayName: 'Community'
        }),
        'transparency': starsWith({
          displayName: 'Transparency'
        })
      }
    }
  }
};