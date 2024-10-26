import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

/**
 * Test the text rendering of Vue components.
 * @param {Array<Array<string>>} componentsToTest - An array of component names and their expected text.
 */
export function testComponentTextRendering(componentsToTest) {
  describe('Component Text Rendering', () => {
    componentsToTest.forEach(([name, expectedText]) => {
      it(`renders the correct text for ${name}`, async () => {
        const component = await import(`~/components/${name}.vue`).then(comp => comp.default || comp);
        expect(mount(component).text()).toContain(expectedText);
      });
    });
  });
}
