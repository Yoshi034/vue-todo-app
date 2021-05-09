import { shallowMount } from "@vue/test-utils";
import NavigationHeader from "@/components/NavigationHeader.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(NavigationHeader, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
