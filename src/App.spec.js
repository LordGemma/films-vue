import Vue from 'vue'
import App from './App.vue'

describe('App', () => {
  it('should mount component', () => {
    expect(typeof App.data).toBe('function');
  })
})