/**
 * @jest-environment ./__tests__/html/__jest__/WebChatEnvironment.js
 */

describe('accessibility requirement', () => {
  test('should delay activity with "replyToId" referencing a missing activity', () =>
    runHTMLTest('accessibility.delayActivity.withReplyToId.html'));
});
