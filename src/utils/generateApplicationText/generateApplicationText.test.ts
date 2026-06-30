import { describe, expect, it } from 'vitest';

import { generateApplicationText } from './generateApplicationText';

describe('generateApplicationText', () => {
  it('generates correct application', () => {
    const text = generateApplicationText({
      jobTitle: 'Digger',
      company: 'Digging Co.',
      skills: 'to dig, not to dig',
      additionalDetails: 'I need money!',
    });

    expect(text).toContain('Digging Co.');
    expect(text).toContain('Digger');
    expect(text).toContain('to dig, not to dig');
    expect(text).toContain('I need money!');
  });
});
