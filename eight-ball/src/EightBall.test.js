import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import EightBall
  from "./EightBall";
import { finished } from "stream";



it("renders without errors", function () {

  mount(<EightBall />);
});

it("it renders initial message", function () {
  let wrapper = mount(<EightBall />);

  expect(wrapper.html()).toContain("Think of a Question");
});

it("it renders correct message", function () {
  let wrapper = mount(<EightBall />);

  wrapper.simulate("click");
  expect(wrapper.equals("black")).toEqual(false);
});

it("it changes default message on click", function() {
  let wrapper = mount(<EightBall />);

  wrapper.simulate("click");
  expect(wrapper.equals("Think of a Question")).toEqual(false);
});

it("it works with random message", function() {
  let wrapper = mount(<EightBall />);

  wrapper.simulate("click");
  console.log(test);
  expect(EightBall.defaultProps.messages).toContainEqual(wrapper.state());
});