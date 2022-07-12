import React from "react"
import {connect,styled} from "frontity"

const Page = ({ state,styled }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  return (
    <Main>
      <h2>{page.title.rendered} </h2>
      <div dangerouslySetInnerHTML={{__html:page.content.rendered}}></div>
    </Main>
  )
}
export default connect(Page);
const Main = styled.div`
  margin: auto;
  max-width: 900px
`