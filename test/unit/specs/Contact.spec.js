import Vue from 'vue'
import Contact from '@/components/Contact'

describe('Contact.vue', () => {
  it('Check that the content is rendered', () => {
    const Constructor = Vue.extend(Contact)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.contact-content h4').textContent)
      .to.equal('Give us a call or if you are shy and not in any immidiate danger write us an email instead.')
  })
})
