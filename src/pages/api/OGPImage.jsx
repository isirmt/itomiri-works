import { ImageResponse, NextRequest } from "next/server"
import works from '../../../json/worksList'

export const config = {
  runtime: "edge",
}

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url)

    const hasId = searchParams.has("id")
    const targetId = hasId
      ? searchParams.get("id")
      : "1"

    const targetItem = works.find(item => item.id.toString() === targetId)

    const urlBackImg = "url(https://works.itomiri.com" + targetItem.img + ")"

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: "url(https://works.itomiri.com/ogp_bg.png)",
            backgroundColor: "#fff",
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "left",
            alignItems: "flex-start",
            // justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              width: "537px",
              height: "302px",
              backgroundColor: "#fff",
              backgroundSize: "100% 100%",
              backgroundImage: urlBackImg,
              border: "black 1px solid",
              margin: "44px auto 0 auto"
            }}>
          </div>
          <div
            style={{
              width: "900px",
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: 55,
              fontStyle: "normal",
              fontWeight: 'bold',
              color: "#000",
              margin: "7px auto 0 auto",
              borderStyle: "solid",
              borderWidth: "0 0 1px 0",
              borderColor: "#646464",
              wordWrap: "break-word",
              paddingLeft: "10px",
              whiteSpace: "nowrap",
              overflow: "hidden"
            }}
          >
            {targetItem.title}
          </div>

          <ul className="tag_list"
            style={{
              width: "537px",
              display: "flex",
              margin: "0 auto",
              padding: "0",
              flexWrap: "wrap",
              marginTop: "20px",
              fontSize: 25
            }}>
            {targetItem.tags.map((node) => (
              <li style={{
                backgroundColor: "#3DCAB1",
                color: "white",
                fontWeight: "bold",
                listStyle: "none",
                position: "relative",
                paddingLeft: "8px",
                paddingRight: "14px",
                marginRight: "30px",
                marginBottom: "10px",
                borderRadius: ".2rem .5rem .5rem .2rem"
              }}
                className="custom-element"
                key={node.id}>{node.name}</li>
            ))}
          </ul>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to Generate the Image`, {
      status: 500,
    })
  }
}