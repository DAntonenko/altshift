import { describe, expect, it, vi, beforeEach } from 'vitest';

import { copyToClipboard } from './copyToClipboard';

describe('copyToClipboard', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(),
      },
    });
  });

  it('returns true when copying succeeds', async () => {
    vi.mocked(navigator.clipboard.writeText).mockResolvedValue(undefined);

    const result = await copyToClipboard('hello');

    expect(result).toBe(true);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('hello');
  });

  it('returns false when copying fails', async () => {
    vi.mocked(navigator.clipboard.writeText).mockRejectedValue(
      new Error('Clipboard error'),
    );

    const result = await copyToClipboard('hello');

    expect(result).toBe(false);
  });
});
