import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => {
        setData(response.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={[16, 16]}>
        {data.map((item) => (
          <Col xs={24} md={12} lg={8} xl={6} key={item.id}>
            <Card cover={<img alt={item.title} src={item.thumbnailurl} />}>
              <Meta title={item.title} description={item.url} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default App;
