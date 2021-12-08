import React, { useState } from "react"
import { useSelector } from 'react-redux'

const btnStyle = {
  backgroundColor: "black",
  color: "white",
  border: "none",
  padding: "5px 10px",
}

const Table = (
    pageNum = 0,
    pageSize = 10,
    width = "auto",
    height = "auto") => {

    const colNames = ["name", "district", "lat", "lng", "pin"]

    const list = useSelector((state) => {
        return state.data;
    })

    console.log(list)

    const [page, setPage] = useState(pageNum)

  const onBack = () => {
    setPage(page - 1 > -1 ? page - 1 : page)
  }

  const onNext = () => {
    setPage(page + 1 < list.length / pageSize ? page + 1 : page)
  }

  return (
    <div style={{ width: "100%", boxShadow: "3px 6px 3px #ccc" }}>
      {list.length > 0 && (
        <table
          cellSpacing="0"
          style={{ width: "100%", height: height, padding: "5px 10px" }}
        >
          <thead style={{ backgroundColor: "black", color: "white" }}>
            <tr>
              {colNames.map((headerItem, index) => (
                <th key={index}>{headerItem.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
              {
                list.map((obj, index) => {
                    return (<tr key={index}>
                    {console.log(obj)}
                        <td id="1" key={0}>{obj.name}</td>
                        <td id="1" key={1}>{obj.district}</td>
                        <td id="1" key={2}>{obj.lat}</td>
                        <td id="1" key={3}>{obj.lng}</td>
                        <td id="1" key={4}>{obj.pin}</td>
                    </tr>)
                })
              }
            {/* {Object.values(
              list.slice(pageSize * page, pageSize * page + pageSize)
            ).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, index2) => (
                  <td key={index2}>{value}</td>
                ))}
              </tr>
            ))} */}
          </tbody>
          {/* <tfoot>
            <td></td>
            <td style={{ padding: "10px 0" }}>
              <button style={btnStyle} onClick={onBack}>
                Back
              </button>
              <label style={{ padding: "0 1em" }}>{page + 1}</label>
              <button style={btnStyle} onClick={onNext}>
                Next
              </button>
            </td>
          </tfoot> */}
        </table>
      )}
    </div>
  )
}

export default Table
