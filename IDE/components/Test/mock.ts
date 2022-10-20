export const testResponse = [
  {
    trigger: `
    increment.click();
  `,
    checker: `
      return counter.prev == counter.next - 1
    `,
    triggerArgs: ['increment'],
    checkerArgs: ['counter'],
    state: [{ name: 'counter', id: 'text', valuePath: 'textContent' }],
  },
]
