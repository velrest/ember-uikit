import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk icon', function() {
  setupComponentTest('uk-icon', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-icon}}
    //     template content
    //   {{/uk-icon}}
    // `);

    this.render(hbs`{{uk-icon}}`);
    expect(this.$()).to.have.length(1);
  });
});