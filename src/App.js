import React, { useEffect, useState } from "react";
import Card from "./Cards";
import { Button } from "@mui/material";

function App() {
  const [list, setlist] = useState([]);

  const [searchit, setSearch] = useState("");
  const [topic, setTopic] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }
  function handleClick() {
    setTopic(searchit);
    console.log(topic);
    console.log(url);
  }
  let url = `https://inshorts.deta.dev/news?category=${topic}`;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setlist(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [url]);
  return (
    <div className="App">
      <div>
        <div
          style={{
            display: "flex",
            padding: "20px",
            justifyContent: "center",
            position: "fixed",
          }}
        >
          <input onChange={handleChange} type="text" />
          <Button onClick={handleClick}>Search</Button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "500px 500px 500px  ",
            justifyContent: "space-between",
          }}
        >
          {list.map((item) => {
            return (
              <div>
                <Card
                  author={item.author}
                  imageUrl={item.imageUrl}
                  content={item.content}
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
