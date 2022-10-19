export const testResponse = [
  {
    trigger: `
    increment.click();
  `,
    checker: `
      console.log('asd', counter.prev, counter.next - 1)
      return counter.prev == counter.next - 1
    `,
    triggerArgs: ['increment'],
    checkerArgs: ['counter'],
    state: [{ name: 'counter', id: 'text', valuePath: 'textContent' }],
  },
]
