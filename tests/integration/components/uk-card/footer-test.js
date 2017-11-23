import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk card/footer', function() {
  setupComponentTest('uk-card/footer', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-card/footer}}
    //     template content
    //   {{/uk-card/footer}}
    // `);

    this.render(hbs`{{uk-card/footer}}`);
    expect(this.$()).to.have.length(1);
  });
});
