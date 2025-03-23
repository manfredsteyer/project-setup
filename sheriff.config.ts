import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  enableBarrelLess: true,
  modules: {
    'src/app/domains/<domain>/feature-<name>': [
      'domain:<domain>',
      'type:feature',
    ],
    'src/app/domains/<domain>/ui-<name>': ['domain:<domain>', 'type:ui'],
    'src/app/domains/<domain>/data': ['domain:<domain>', 'type:data'],
    'src/app/domains/<domain>/util-<name>': ['domain:<domain>', 'type:util'],
  },
  depRules: {
    root: '*',
    'domain:*': [sameTag, 'domain:shared'],
    'type:feature': ['type:ui', 'type:data', 'type:util'],
    'type:ui': ['type:data', 'type:util'],
    'type:data': ['type:util'],
    'type:util': [],
  },
};

/*
    // More Generic and hence compact
    'src/app/domains/<domain>/<type>-<name>': [
      'domain:<domain>', 
      'type:<type>'
    ],
    'src/app/domains/<domain>/<type>': [
      'domain:<domain>', 
      'type:<type>'
    ]
*/
