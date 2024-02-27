import { Tabs } from "antd";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const onChange2 = (currentSlide) => {
  console.log(currentSlide);
};
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: <span className="text-red-500 mx-auto">Tab 1</span>,
    children: (
      <>
        <Carousel afterChange={onChange2}>
          <div>
            <h3 style={contentStyle}>1 of Tab 1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2 of Tab 1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3 of Tab 1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4 of Tab 1</h3>
          </div>
        </Carousel>
      </>
    ),
  },
  {
    key: "2",
    label: "Tab 2",
    children: (
      <>
        <Carousel afterChange={onChange2}>
          <div>
            <h3 style={contentStyle}>1 of Tab 2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2 of Tab 2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3 of Tab 2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4 of Tab 2</h3>
          </div>
        </Carousel>
      </>
    ),
  },
  {
    key: "3",
    label: "Tab 3",
    children: (
      <>
        <Carousel afterChange={onChange2}>
          <div>
            <h3 style={contentStyle}>1 of Tab 3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2 of Tab 3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3 of Tab 3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4 of Tab 3</h3>
          </div>
        </Carousel>
      </>
    ),
  },
];

const TabContext = () => {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange}></Tabs>;
};

export default TabContext;
