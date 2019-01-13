import Vue from 'vue'
import Dino from '@/components/DinoDetails'

describe('DinoDetails', () => {
  it('should set passedID to props id', () => {
    const Constructor = Vue.extend(Dino)
    const vm = new Constructor({
      propsData: {
        id: 1
      }
    }).$mount()
    expect(vm.passedID).to.equal(1)
  })
});
