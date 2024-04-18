import React, { useEffect, useState } from "react";
import Workspace from "polotno/canvas/workspace";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";

// const store = createStore();
// const page = store.addPage();

// page.addElement({
//   x: 50,
//   y: 50,
//   type: 'text',
//   fill: 'black',
//   text: 'hello',
// });
const style = {
  background: "blue",
  color: "white",
  "border-radius": "2px",
  margin: "5px",
  padding: "5px",
};
function Polotno({ store }) {

  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState({});
    const [storeElement, setStoreElement]=useState({})
  useEffect(() => {
    async function fetchStore() {
      const pagess = await store.pages;
      setPages(pagess);
      store.selectPage(store.pages[1].id);
      setActivePage(store.activePage);
      const element = store.activePage.addElement({
        type: 'text',
        x: 200,
        y: 200,
        fill: 'white',
        text: 'Dynamic text',
      });
      setStoreElement(element)
    }
    fetchStore();
  }, [store.pages]);


  const data = () => {
    console.log(store.toJSON());
    console.log(store.pages[1].id);
    console.log(store.pages.toJSON());
    console.log(pages.toJSON());
    console.log(activePage.toJSON());
    console.log(storeElement.toJSON())
  };

  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store}/>
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <div>
          <button onClick={data} style={style}>
            Custom button
          </button>
        </div>
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
}

export default Polotno;
